// Game constants
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 600;
const PLAYER_SIZE = 30;
const OBSTACLE_SIZE = 40;
const SUBAGENT_SIZE = 20;
const PLAYER_SPEED = 4;
const SUBAGENT_SPEED = 6;

// Game state
let gameState = 'instructions'; // instructions, playing, victory, gameOver
let player;
let obstacles = [];
let activeSubagents = [];
let level = 1;
let energy = 100;
let score = 0;
let obstaclesCleared = 0;

// Subagent types with their properties
const SUBAGENT_TYPES = {
    vision: { name: 'Vision Agent', color: '#2196f3', key: '1', cost: 15 },
    logic: { name: 'Logic Agent', color: '#4caf50', key: '2', cost: 20 },
    navigation: { name: 'Navigation Agent', color: '#ff9800', key: '3', cost: 15 },
    security: { name: 'Security Agent', color: '#f44336', key: '4', cost: 25 }
};

// Obstacle types
const OBSTACLE_TYPES = {
    vision: { name: 'Visual Pattern', color: '#64b5f6', requiredAgent: 'vision' },
    logic: { name: 'Logic Puzzle', color: '#81c784', requiredAgent: 'logic' },
    navigation: { name: 'Maze Block', color: '#ffb74d', requiredAgent: 'navigation' },
    security: { name: 'Security Barrier', color: '#e57373', requiredAgent: 'security' }
};

function startGame() {
    document.getElementById('instructions').classList.add('hidden');
    gameState = 'playing';
    initGame();
}

function initGame() {
    // Initialize player at center-left
    player = {
        x: 100,
        y: CANVAS_HEIGHT / 2,
        size: PLAYER_SIZE,
        vx: 0,
        vy: 0
    };

    // Create obstacles for the level
    createObstacles();

    // Reset game stats
    activeSubagents = [];

    // Setup canvas if not already done
    if (!document.querySelector('canvas')) {
        createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
        const canvas = document.querySelector('canvas');
        canvas.id = 'game-canvas';

        // Create HUD
        const hud = document.createElement('div');
        hud.id = 'hud';
        hud.innerHTML = `
            <div class="hud-item">
                <div class="hud-label">Level</div>
                <div class="hud-value" id="level-display">${level}</div>
            </div>
            <div class="hud-item">
                <div class="hud-label">Energy</div>
                <div class="energy-bar">
                    <div class="energy-fill" id="energy-fill"></div>
                </div>
            </div>
            <div class="hud-item">
                <div class="hud-label">Score</div>
                <div class="hud-value" id="score-display">${score}</div>
            </div>
            <div class="hud-item">
                <div class="hud-label">Obstacles</div>
                <div class="hud-value" id="obstacles-display">${obstacles.length}</div>
            </div>
        `;

        const container = document.getElementById('game-container');
        container.insertBefore(hud, canvas);
    }

    updateHUD();
}

function createObstacles() {
    obstacles = [];
    const types = Object.keys(OBSTACLE_TYPES);
    const obstacleCount = 3 + level; // More obstacles as levels progress

    for (let i = 0; i < obstacleCount; i++) {
        const type = types[floor(random(types.length))];
        const obstacle = {
            x: random(300, CANVAS_WIDTH - 100),
            y: random(100, CANVAS_HEIGHT - 100),
            size: OBSTACLE_SIZE,
            type: type,
            health: 3,
            maxHealth: 3
        };

        // Make sure obstacles don't overlap too much
        let overlap = false;
        for (let other of obstacles) {
            const d = dist(obstacle.x, obstacle.y, other.x, other.y);
            if (d < OBSTACLE_SIZE * 2) {
                overlap = true;
                break;
            }
        }

        if (!overlap) {
            obstacles.push(obstacle);
        } else {
            i--; // Try again
        }
    }
}

function setup() {
    // p5.js setup - canvas created in initGame
}

function draw() {
    if (gameState !== 'playing') return;

    // Background
    background(26, 26, 46);

    // Draw grid pattern
    stroke(40, 40, 60);
    strokeWeight(1);
    for (let i = 0; i < CANVAS_WIDTH; i += 40) {
        line(i, 0, i, CANVAS_HEIGHT);
    }
    for (let i = 0; i < CANVAS_HEIGHT; i += 40) {
        line(0, i, CANVAS_WIDTH, i);
    }

    // Update and draw player
    updatePlayer();
    drawPlayer();

    // Update and draw obstacles
    for (let i = obstacles.length - 1; i >= 0; i--) {
        drawObstacle(obstacles[i]);
    }

    // Update and draw subagents
    for (let i = activeSubagents.length - 1; i >= 0; i--) {
        updateSubagent(activeSubagents[i]);
        drawSubagent(activeSubagents[i]);

        // Remove if off screen
        if (activeSubagents[i].x > CANVAS_WIDTH + 50) {
            activeSubagents.splice(i, 1);
        }
    }

    // Check for level completion
    if (obstacles.length === 0) {
        levelComplete();
    }

    // Check for game over
    if (energy <= 0) {
        gameOver();
    }
}

function updatePlayer() {
    // Handle input
    player.vx = 0;
    player.vy = 0;

    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) player.vx = -PLAYER_SPEED; // A
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) player.vx = PLAYER_SPEED; // D
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) player.vy = -PLAYER_SPEED; // W
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) player.vy = PLAYER_SPEED; // S

    // Update position
    player.x += player.vx;
    player.y += player.vy;

    // Constrain to canvas
    player.x = constrain(player.x, player.size/2, CANVAS_WIDTH - player.size/2);
    player.y = constrain(player.y, player.size/2, CANVAS_HEIGHT - player.size/2);
}

function drawPlayer() {
    push();

    // Glow effect
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = '#667eea';

    fill(102, 126, 234);
    noStroke();
    circle(player.x, player.y, player.size);

    // Inner core
    fill(255, 255, 255, 150);
    circle(player.x, player.y, player.size * 0.5);

    // Direction indicator
    if (player.vx !== 0 || player.vy !== 0) {
        stroke(255, 255, 255, 200);
        strokeWeight(3);
        line(player.x, player.y,
             player.x + player.vx * 5,
             player.y + player.vy * 5);
    }

    pop();
}

function drawObstacle(obstacle) {
    const config = OBSTACLE_TYPES[obstacle.type];

    push();

    // Pulsing effect
    const pulse = sin(frameCount * 0.05) * 3;

    // Glow
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = config.color;

    fill(config.color);
    noStroke();
    rectMode(CENTER);
    rect(obstacle.x, obstacle.y, obstacle.size + pulse, obstacle.size + pulse, 8);

    // Health bar
    const healthWidth = obstacle.size * (obstacle.health / obstacle.maxHealth);
    fill(255, 255, 255, 100);
    rect(obstacle.x, obstacle.y - obstacle.size/2 - 10, obstacle.size, 4, 2);
    fill(255, 100, 100);
    rect(obstacle.x - obstacle.size/2 + healthWidth/2, obstacle.y - obstacle.size/2 - 10,
         healthWidth, 4, 2);

    // Type label
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(10);
    text(config.name.split(' ')[0], obstacle.x, obstacle.y);

    pop();
}

function updateSubagent(subagent) {
    // Move towards target obstacle
    if (subagent.target) {
        const angle = atan2(subagent.target.y - subagent.y,
                           subagent.target.x - subagent.x);
        subagent.x += cos(angle) * SUBAGENT_SPEED;
        subagent.y += sin(angle) * SUBAGENT_SPEED;

        // Check collision with target
        const d = dist(subagent.x, subagent.y, subagent.target.x, subagent.target.y);
        if (d < OBSTACLE_SIZE) {
            // Check if correct agent type
            if (subagent.type === subagent.target.type) {
                // Damage obstacle
                subagent.target.health -= 1;
                if (subagent.target.health <= 0) {
                    // Remove obstacle
                    const index = obstacles.indexOf(subagent.target);
                    if (index > -1) {
                        obstacles.splice(index, 1);
                        score += 100;
                        obstaclesCleared++;
                        updateHUD();
                    }
                }
                // Remove subagent
                const agentIndex = activeSubagents.indexOf(subagent);
                if (agentIndex > -1) {
                    activeSubagents.splice(agentIndex, 1);
                }
            } else {
                // Wrong agent type - just remove it
                const agentIndex = activeSubagents.indexOf(subagent);
                if (agentIndex > -1) {
                    activeSubagents.splice(agentIndex, 1);
                }
                // Penalty
                energy -= 5;
                updateHUD();
            }
        }
    }
}

function drawSubagent(subagent) {
    const config = SUBAGENT_TYPES[subagent.type];

    push();

    // Trail effect
    for (let i = 0; i < subagent.trail.length; i++) {
        const alpha = map(i, 0, subagent.trail.length, 0, 100);
        fill(config.color + hex(alpha, 2));
        noStroke();
        circle(subagent.trail[i].x, subagent.trail[i].y, SUBAGENT_SIZE * 0.5);
    }

    // Main body
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = config.color;
    fill(config.color);
    circle(subagent.x, subagent.y, SUBAGENT_SIZE);

    // Core
    fill(255, 255, 255, 200);
    circle(subagent.x, subagent.y, SUBAGENT_SIZE * 0.4);

    pop();

    // Update trail
    subagent.trail.push({x: subagent.x, y: subagent.y});
    if (subagent.trail.length > 5) {
        subagent.trail.shift();
    }
}

function keyPressed() {
    if (gameState !== 'playing') return;

    // Deploy subagents with number keys
    if (key === '1') deploySubagent('vision');
    if (key === '2') deploySubagent('logic');
    if (key === '3') deploySubagent('navigation');
    if (key === '4') deploySubagent('security');
}

function deploySubagent(type) {
    const config = SUBAGENT_TYPES[type];

    // Check energy
    if (energy < config.cost) {
        // Not enough energy - visual feedback
        return;
    }

    // Find nearest obstacle of matching type
    let nearestObstacle = null;
    let nearestDist = Infinity;

    for (let obstacle of obstacles) {
        if (obstacle.type === type) {
            const d = dist(player.x, player.y, obstacle.x, obstacle.y);
            if (d < nearestDist) {
                nearestDist = d;
                nearestObstacle = obstacle;
            }
        }
    }

    // If no matching obstacle, target any obstacle
    if (!nearestObstacle && obstacles.length > 0) {
        nearestObstacle = obstacles[0];
        nearestDist = dist(player.x, player.y, nearestObstacle.x, nearestObstacle.y);
        for (let obstacle of obstacles) {
            const d = dist(player.x, player.y, obstacle.x, obstacle.y);
            if (d < nearestDist) {
                nearestDist = d;
                nearestObstacle = obstacle;
            }
        }
    }

    if (nearestObstacle) {
        // Create subagent
        const subagent = {
            x: player.x,
            y: player.y,
            type: type,
            target: nearestObstacle,
            trail: []
        };

        activeSubagents.push(subagent);
        energy -= config.cost;
        updateHUD();
    }
}

function updateHUD() {
    document.getElementById('level-display').textContent = level;
    document.getElementById('score-display').textContent = score;
    document.getElementById('obstacles-display').textContent = obstacles.length;

    const energyFill = document.getElementById('energy-fill');
    energyFill.style.width = energy + '%';

    // Color code energy bar
    if (energy > 60) {
        energyFill.style.background = 'linear-gradient(90deg, #4caf50 0%, #8bc34a 100%)';
    } else if (energy > 30) {
        energyFill.style.background = 'linear-gradient(90deg, #ff9800 0%, #ffc107 100%)';
    } else {
        energyFill.style.background = 'linear-gradient(90deg, #f44336 0%, #e57373 100%)';
    }
}

function levelComplete() {
    level++;
    energy = Math.min(100, energy + 30); // Restore some energy
    score += level * 50;

    if (level > 5) {
        victory();
    } else {
        // Next level
        createObstacles();
        updateHUD();

        // Brief pause
        noLoop();
        setTimeout(() => {
            loop();
        }, 1000);
    }
}

function victory() {
    gameState = 'victory';
    noLoop();

    const container = document.getElementById('game-container');
    const canvas = document.querySelector('canvas');
    const hud = document.getElementById('hud');

    if (canvas) canvas.style.display = 'none';
    if (hud) hud.style.display = 'none';

    const victoryScreen = document.createElement('div');
    victoryScreen.className = 'screen end-screen victory';
    victoryScreen.innerHTML = `
        <h2>🎉 Victory! 🎉</h2>
        <p>You've mastered agentic AI and completed all levels!</p>
        <div class="stats">
            <h3>Mission Stats:</h3>
            <div class="stat-item">Final Score: <strong>${score}</strong></div>
            <div class="stat-item">Levels Completed: <strong>${level}</strong></div>
            <div class="stat-item">Obstacles Cleared: <strong>${obstaclesCleared}</strong></div>
            <div class="stat-item">Energy Remaining: <strong>${energy}%</strong></div>
        </div>
        <p>You've learned how specialized subagents work together to solve complex problems!</p>
        <button onclick="location.reload()" class="start-btn">Play Again</button>
        <button onclick="window.location.href='../index.html'" class="start-btn" style="background: linear-gradient(135deg, #4caf50 0%, #8bc34a 100%); margin-top: 10px;">Back to Main Site</button>
    `;

    container.appendChild(victoryScreen);
}

function gameOver() {
    gameState = 'gameOver';
    noLoop();

    const container = document.getElementById('game-container');
    const canvas = document.querySelector('canvas');
    const hud = document.getElementById('hud');

    if (canvas) canvas.style.display = 'none';
    if (hud) hud.style.display = 'none';

    const gameOverScreen = document.createElement('div');
    gameOverScreen.className = 'screen end-screen game-over';
    gameOverScreen.innerHTML = `
        <h2>Mission Failed</h2>
        <p>You ran out of energy! Remember to deploy the right subagent for each obstacle type.</p>
        <div class="stats">
            <h3>Mission Stats:</h3>
            <div class="stat-item">Final Score: <strong>${score}</strong></div>
            <div class="stat-item">Level Reached: <strong>${level}</strong></div>
            <div class="stat-item">Obstacles Cleared: <strong>${obstaclesCleared}</strong></div>
        </div>
        <p><strong>Tip:</strong> Match subagent colors to obstacle colors for efficient energy use!</p>
        <button onclick="location.reload()" class="start-btn">Try Again</button>
        <button onclick="window.location.href='../index.html'" class="start-btn" style="background: linear-gradient(135deg, #4caf50 0%, #8bc34a 100%); margin-top: 10px;">Back to Main Site</button>
    `;

    container.appendChild(gameOverScreen);
}

// Helper function for hex conversion
function hex(num, len) {
    let str = num.toString(16);
    while (str.length < len) str = '0' + str;
    return str;
}

# Agent Quest - Interactive Agentic AI Game

An educational arcade game that teaches players about agentic AI and subagent architectures through interactive gameplay.

## Game Overview

**Agent Quest** is a puzzle-based arcade game where players control an AI agent and deploy specialized subagents to overcome different types of obstacles. The game demonstrates core agentic AI concepts including:

- Autonomous agents with specialized capabilities
- Resource management and strategic decision-making
- Matching agent types to task requirements
- Progressive complexity and coordination

## How to Play

### Controls
- **Movement:** Arrow keys or WASD
- **Deploy Subagents:** Number keys 1-4

### Subagent Types

1. **Vision Agent (Blue)** - Cost: 15 energy
   - Analyzes and solves visual pattern obstacles
   - Best for: Blue obstacles

2. **Logic Agent (Green)** - Cost: 20 energy
   - Solves logical puzzles and reasoning challenges
   - Best for: Green obstacles

3. **Navigation Agent (Yellow)** - Cost: 15 energy
   - Finds optimal paths through maze obstacles
   - Best for: Yellow obstacles

4. **Security Agent (Red)** - Cost: 25 energy
   - Bypasses security barriers
   - Best for: Red obstacles

### Strategy Tips

- **Match colors:** Deploy the subagent that matches the obstacle color for maximum efficiency
- **Manage energy:** Each subagent costs energy. Using the wrong type wastes 5 additional energy!
- **Plan ahead:** Look at all obstacles before deploying subagents
- **Energy recovery:** You gain +30 energy when completing a level

## Game Features

### Core Mechanics
- **Player Movement:** Smooth directional controls with visual feedback
- **Obstacle System:** Four types of obstacles requiring different subagent specializations
- **Subagent Deployment:** Strategic resource management with visual trails
- **Health System:** Obstacles require 3 hits to destroy
- **Energy Management:** Limited resource that depletes with subagent use

### Visual Design
- **Modern UI:** Clean, colorful interface with gradient effects
- **Visual Feedback:** Glowing effects, particle trails, pulsing animations
- **HUD Display:** Real-time stats for level, energy, score, and obstacles
- **Responsive Design:** Centered canvas with proper spacing

### Progression
- **5 Levels:** Increasing difficulty with more obstacles
- **Score System:** 100 points per obstacle + level bonuses
- **Victory Condition:** Complete all 5 levels
- **Game Over:** Runs out of energy

## Technical Implementation

### Technology Stack
- **p5.js:** Canvas rendering and game loop
- **HTML5:** Structure and layout
- **CSS3:** Styling with gradients and animations
- **Vanilla JavaScript:** Game logic and state management

### Architecture

```
game/
├── index.html      # Main HTML structure with instructions
├── style.css       # Styling for UI, HUD, and screens
├── game.js         # Core game logic and mechanics
└── README.md       # This file
```

### Key Systems

**Game State Management:**
- Instructions screen
- Active gameplay
- Victory screen
- Game over screen

**Collision Detection:**
- Subagent-to-obstacle proximity checking
- Player boundary constraints
- Obstacle overlap prevention

**Visual Effects:**
- Shadow/glow rendering using canvas context
- Particle trail system for subagents
- Pulsing animations for obstacles
- Color-coded energy bar

## Educational Value

The game teaches players about:

1. **Specialization:** Different agents have different capabilities
2. **Resource Management:** Limited energy requires strategic thinking
3. **Problem Matching:** Choosing the right tool for the task
4. **Autonomous Behavior:** Subagents operate independently once deployed
5. **Parallel Processing:** Multiple subagents can work simultaneously

## Development Notes

This game was built as a demonstration for the "Agentic AI" talk, showcasing how autonomous AI systems with specialized subagents can solve complex problems through coordination and specialization.

The implementation includes:
- Full p5.js integration for canvas rendering
- Responsive design for different screen sizes
- Accessibility considerations (keyboard controls, color contrast)
- Progressive difficulty scaling
- Complete game state management

## Credits

Built as part of the AgentAI educational initiative to demonstrate agentic AI concepts through interactive experiences.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

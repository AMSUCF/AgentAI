---
layout: default
title: "Agentic AI: Understanding Subagents and Modern AI Tools"
---

# Agentic AI: Understanding Subagents and Modern AI Tools

**Duration:** 1 hour
**Target Audience:** Academics, researchers, faculty, and developers
**Format:** Conceptual introduction with hands-on demonstrations

## Talk Overview

This talk explores the emerging paradigm of agentic AI—autonomous systems that can plan, execute, and manage complex multi-step tasks with minimal supervision. Unlike conventional AI chatbots that require constant prompting, agentic AI systems leverage subagent architectures to decompose complex problems and execute sophisticated workflows. Through three focused segments, participants will understand what makes AI "agentic," see real-world applications in browser-based tools like Perplexity's Comet, and witness advanced development workflows using Claude Code for the web to build interactive applications.

## Learning Objectives

By the end of this talk, participants will be able to:

- Define agentic AI and understand how it differs from conversational AI
- Explain the concept of subagents and their role in complex task execution
- Recognize practical applications of agentic AI in academic and development workflows
- Understand how Perplexity's Comet browser integrates AI into web-based tasks
- Appreciate the capabilities of Claude Code for rapid application development
- Evaluate when agentic approaches offer advantages over traditional AI interactions

## Prerequisites and Setup

**No prior coding experience required.** Participants should bring:

- A laptop with internet access
- Familiarity with basic web browsing and academic tools
- Curiosity about AI systems and their capabilities
- (Optional) Interest in web development or interactive media

**Note:** Demonstrations will show advanced features, but all concepts will be explained from first principles.

---

## Part 1: Understanding Agentic AI and Subagents

**Duration:** 15 minutes

### What is Agentic AI?

Traditional AI systems operate in a **reactive mode**: you provide a prompt, they generate a response, and the interaction ends. **Agentic AI** represents a paradigm shift toward **autonomous, goal-oriented systems** that can:

#### Core Characteristics of Agentic AI

1. **Autonomous Planning**
   - Break down complex goals into executable subtasks
   - Determine the sequence and dependencies of operations
   - Adapt plans based on intermediate results

2. **Tool Use**
   - Execute code and scripts
   - Access external APIs and web resources
   - Read and write files
   - Interact with databases and systems

3. **Persistent Context**
   - Maintain awareness of project state across sessions
   - Track progress toward long-term goals
   - Remember previous decisions and their rationales

4. **Self-Correction**
   - Detect errors in outputs
   - Iterate on solutions without human intervention
   - Test and validate results automatically

5. **Multi-Step Execution**
   - Work continuously toward goals without constant prompting
   - Handle workflows that span minutes or hours
   - Manage complex dependencies between tasks

### What are Subagents?

**Subagents** are specialized AI agents that operate as part of a larger agentic system. Think of them as expert team members, each with specific capabilities:

#### Subagent Architecture

```
Main Orchestrating Agent
│
├── Vision Analysis Subagent
│   └── Image recognition, alt-text generation, visual QA
│
├── Code Development Subagent
│   └── Writing, debugging, and testing code
│
├── Web Interaction Subagent
│   └── Browsing, scraping, form filling
│
├── Data Processing Subagent
│   └── Analysis, transformation, validation
│
└── Accessibility Audit Subagent
    └── WCAG compliance, testing, recommendations
```

#### Why Subagents Matter

- **Specialization:** Each subagent is optimized for specific tasks
- **Parallelization:** Multiple subagents can work simultaneously
- **Scalability:** Complex problems are decomposed into manageable units
- **Quality:** Expert subagents produce better results than generalist approaches
- **Modularity:** Subagents can be swapped, upgraded, or reconfigured

#### Real-World Example

**Task:** Build an accessible image gallery website

**Without subagents:** A single AI struggles to balance competing concerns—visual design, code quality, accessibility, performance.

**With subagents:**
1. **Vision subagent** analyzes images and generates descriptive alt text
2. **Development subagent** writes HTML/CSS/JavaScript
3. **Accessibility subagent** audits for WCAG compliance
4. **Performance subagent** optimizes loading and rendering
5. **Main agent** orchestrates all activities and integrates outputs

Result: Higher quality, faster execution, better adherence to best practices.

### From Theory to Practice

The remaining demonstrations will show agentic AI and subagent systems in action through two powerful tools:

1. **Perplexity Comet:** Agentic browser assistance for everyday academic tasks
2. **Claude Code:** Advanced development environment leveraging subagent architectures

---

## Part 2: Perplexity Comet Browser - Agentic AI for Web Workflows

**Duration:** 20 minutes

### Concept

Perplexity's **Comet browser** represents a new paradigm of AI-powered web interaction. Unlike browser extensions or separate AI tools, Comet integrates agentic AI directly into your browsing experience, providing contextual assistance for web-based tasks.

### What Makes Comet "Agentic"?

Traditional browser AI:
- Requires you to copy/paste content
- Works in isolation from web context
- Cannot interact with pages on your behalf
- Loses context when you switch tabs

**Comet's agentic approach:**
- **Context-aware:** Understands what page you're on and what you're doing
- **Action-capable:** Can interact with web forms, buttons, and interfaces
- **Persistent:** Maintains awareness across your browsing session
- **Proactive:** Offers assistance based on your current task

---

### Demo 1: Downloading Websites as Markdown

**Use Case:** Archiving web content for research, creating offline documentation, or preserving sources.

**The Challenge:** Websites contain complex HTML, CSS, JavaScript, ads, navigation menus, and other noise. Extracting clean, readable content is time-consuming.

**Comet's Agentic Solution:**

1. **Navigate to any web article or documentation page**
2. **Invoke Comet** with a simple request: "Download this page as markdown"
3. **Comet autonomously:**
   - Analyzes page structure
   - Identifies main content vs. navigation/ads
   - Preserves headings, links, images, and formatting
   - Converts to clean markdown format
   - Downloads the file

**Why This is Agentic:**
- No manual HTML parsing required
- Comet makes decisions about what content matters
- Works across different site structures
- Handles edge cases (dynamic content, complex layouts)

**Applications:**
- Building research archives
- Creating offline reading collections
- Preserving cited sources in durable formats
- Converting documentation for academic notes

---

### Demo 2: Managing BibTeX Bibliographies

**Use Case:** Maintaining citation databases for research papers and literature reviews.

**The Challenge:** Manually creating BibTeX entries from web sources is tedious and error-prone. Each entry requires extracting author names, titles, publication info, URLs, and dates—then formatting according to BibTeX syntax.

**Comet's Agentic Solution:**

1. **Browse to an academic article, book page, or online source**
2. **Ask Comet:** "Create a BibTeX entry for this source"
3. **Comet autonomously:**
   - Extracts bibliographic metadata (authors, title, journal, year, DOI)
   - Determines the correct BibTeX entry type (@article, @book, @inproceedings, etc.)
   - Formats the entry with proper syntax
   - Generates a unique citation key
   - Provides the complete entry for copying into your .bib file

**Why This is Agentic:**
- Understands different source types (journal articles, books, conference papers, websites)
- Adapts extraction strategy to page structure
- Validates and formats according to BibTeX standards
- Handles missing fields gracefully

**Applications:**
- Building literature review databases
- Maintaining citation files for manuscripts
- Quick reference capture during research
- Ensuring citation consistency

---

### Demo 3: Editing Course Dates and Modules in Canvas LMS

**Use Case:** Faculty need to update course schedules, module release dates, and assignment deadlines when syllabi change.

**The Challenge:** Canvas LMS requires clicking through multiple pages to update dates. Changing a course schedule across many modules and assignments is repetitive and time-consuming.

**Comet's Agentic Solution:**

1. **Navigate to your Canvas course**
2. **Describe the change:** "Move all dates in Module 3 forward by one week"
3. **Comet autonomously:**
   - Analyzes current module structure and dates
   - Calculates new dates based on your instruction
   - Navigates through Canvas interface
   - Updates module availability dates
   - Adjusts assignment due dates
   - Modifies quiz availability windows
   - Confirms changes

**Why This is Agentic:**
- Navigates complex web interfaces independently
- Performs multi-step workflows without supervision
- Handles Canvas's specific UI patterns
- Validates changes before committing
- Can roll back if errors occur

**Alternative Applications:**
- Bulk updating assignment point values
- Duplicating module structures across courses
- Checking all assignments have rubrics
- Ensuring consistent late policy application
- Generating module completion requirements

### Key Takeaways: Comet Browser

- **Contextual intelligence:** Comet understands your current task and environment
- **Web automation:** Performs complex interactions beyond simple form-filling
- **Adaptive:** Works across different websites with different structures
- **Time-saving:** Eliminates repetitive browser-based tasks
- **Accessible:** Natural language instructions, no scripting required

### Critical Considerations

- **Privacy:** Understand what data Comet accesses and transmits
- **Verification:** Always review automated changes, especially in LMS contexts
- **Permissions:** Ensure you have authorization to modify systems
- **Limitations:** Comet may struggle with complex authentication or dynamic interfaces
- **Dependence:** Over-reliance on automation can reduce understanding of underlying systems

---

## Part 3: Claude Code for the Web - Building Interactive Applications with Subagents

**Duration:** 25 minutes

### Concept

**Claude Code** is an advanced AI development environment that combines conversational AI with autonomous coding capabilities. Unlike code assistants that suggest snippets, Claude Code can plan, build, test, and deploy complete applications through natural language instructions.

### What Makes Claude Code Agentic?

Traditional coding assistants:
- Suggest code completions line-by-line
- Require you to understand and integrate suggestions
- Cannot execute or test code independently
- Lose context across files and sessions

**Claude Code's agentic approach:**
- **Full project awareness:** Understands your entire codebase structure
- **Autonomous execution:** Writes, runs, debugs, and iterates on code without constant guidance
- **Subagent architecture:** Deploys specialized subagents for different development tasks
- **Multi-file coordination:** Manages dependencies across HTML, CSS, JavaScript, and assets
- **Error handling:** Detects bugs, interprets error messages, and fixes issues automatically

---

### The Demo: Interactive Arcade Game About Agentic AI

**Project Goal:** Build a complete interactive game that teaches players about agentic AI concepts through gameplay.

**Technology Stack:**
- **p5.js:** JavaScript library for creative coding and interactive graphics
- **HTML/CSS:** Web structure and styling
- **Vanilla JavaScript:** Game logic and interactivity

**Game Concept:** "Agent Quest" - a puzzle arcade game where players control an AI agent navigating challenges. The player deploys specialized subagents to solve obstacles that require different capabilities (vision, logic, navigation, etc.).

---

### The Workflow: Subagents in Action

#### Phase 1: Project Planning (Main Agent)

**Natural language prompt:**
```
Build an interactive arcade game using p5.js about agentic AI.
The game should teach players about subagents by having them
deploy specialized AI assistants to solve different puzzles.
Use --dangerously-skip-permissions to enable rapid development.
```

**Main agent's autonomous planning:**
1. Analyze requirements
2. Design game architecture
3. Identify required subagents
4. Create file structure
5. Distribute tasks to specialized subagents

#### Phase 2: Specialized Subagent Deployment

**1. Game Design Subagent**
- Creates game concept and mechanics
- Designs level progression
- Defines victory/failure conditions
- Plans user interface elements

**2. p5.js Development Subagent**
- Sets up canvas and rendering loop
- Implements game physics and collision detection
- Creates player controls and movement
- Handles animation and visual effects

**3. UI/UX Subagent**
- Designs intuitive controls
- Creates HUD (heads-up display) for subagent status
- Implements accessibility features (keyboard navigation, color contrast)
- Adds tutorial overlays and instructions

**4. Asset Creation Subagent**
- Generates visual assets (sprites, backgrounds, UI elements)
- Creates sound effects (or integrates audio libraries)
- Optimizes media for web performance

**5. Testing & Debugging Subagent**
- Runs the game in browser
- Identifies errors and edge cases
- Tests collision detection accuracy
- Validates game balance and difficulty

**6. Documentation Subagent**
- Writes inline code comments
- Creates README with setup instructions
- Documents game mechanics and controls
- Generates developer notes

#### Phase 3: Integration and Polish (Main Agent)

The main orchestrating agent:
- Synthesizes outputs from all subagents
- Resolves conflicts between different implementations
- Ensures consistent style and naming conventions
- Performs final testing
- Deploys to local server or hosting platform

---

### The --dangerously-skip-permissions Flag

**What it does:**
By default, AI development tools require explicit permission for potentially impactful actions:
- Creating or deleting files
- Running code
- Installing dependencies
- Modifying configurations

The `--dangerously-skip-permissions` flag tells Claude Code: "I trust you to make decisions autonomously. Proceed without asking for confirmation."

**Why use it?**
- **Rapid prototyping:** Eliminates interruptions during creative flow
- **Batch operations:** Allows bulk file operations without repeated approval
- **Autonomous development:** Enables true "hands-off" AI development
- **Educational demos:** Shows the full potential of agentic AI without friction

**When to use it with caution:**
- In production environments
- When working with sensitive data
- In shared codebases with version control
- When you're unfamiliar with what the AI might do

**For this demo:** Perfect for building a self-contained game where we want to see AI development at full speed.

---

### What You'll See During the Demo

**Live coding demonstration showing:**

1. **Initial prompt** - Single natural language instruction
2. **Autonomous planning** - Agent outlines the project structure
3. **File creation** - HTML, CSS, JavaScript files generated
4. **p5.js setup** - Canvas initialization and game loop
5. **Game mechanics implementation:**
   - Player character with movement controls
   - Enemy/obstacle behavior
   - Subagent deployment system (player can "call in" specialized subagents)
   - Puzzle elements requiring different subagent types
6. **Visual design:**
   - Color scheme and styling
   - Animations and effects
   - UI elements and HUD
7. **Testing and iteration:**
   - Agent plays its own game to test
   - Identifies and fixes bugs
   - Adjusts difficulty and balance
8. **Final polish:**
   - Instructions screen
   - Victory/game over states
   - Accessibility features

**Timeline:** Watch a complete game go from concept to playable in under 20 minutes.

---

### Game Mechanics: Teaching Agentic AI Through Play

**Core gameplay loop:**

1. **Player enters a level** with various obstacles
2. **Analyzes the challenge** - Some obstacles require vision (identifying objects), others require logic (solving puzzles), others require navigation (pathfinding)
3. **Deploys appropriate subagent** - Player has limited subagent "energy" and must choose wisely
4. **Subagent solves its specialized task** - Visual feedback shows the subagent at work
5. **Level completion** - Player learns which types of tasks benefit from specialized agents

**Educational value:**
- **Learning by doing:** Players intuitively understand subagent specialization
- **Resource management:** Limited subagent deployments teach strategic thinking
- **Visual metaphor:** Seeing different colored subagents tackle different problems reinforces the concept
- **Progressive complexity:** Later levels require coordinating multiple subagents

---

### Key Takeaways: Claude Code

- **Natural language to full application:** Describe what you want, get a working product
- **Subagent orchestration:** Watch specialized agents handle different aspects of development
- **Rapid iteration:** Changes and refinements happen in seconds, not hours
- **Accessible to non-programmers:** You don't need to know JavaScript or p5.js syntax
- **Educational tool:** Perfect for teaching programming concepts or prototyping ideas
- **Production-capable:** Not just demos—can build real, deployable applications

### Beyond Game Development

The same workflow applies to:
- **Data visualizations** - Interactive charts and dashboards
- **Educational simulations** - Physics, chemistry, or historical scenarios
- **Digital art projects** - Generative art, interactive installations
- **Web applications** - Forms, calculators, productivity tools
- **Prototypes** - Test ideas before committing to full development

### Subagent Architecture in Real-World Development

This demo illustrates how professional development teams can leverage agentic AI:

**Traditional development:**
- Designer creates mockups → Developer implements → QA tests → Iterate
- **Days or weeks** of back-and-forth

**Agentic AI development:**
- Natural language specification → Subagents handle all roles → Integrated output
- **Minutes to hours** from concept to prototype

**Hybrid approach (recommended):**
- AI handles boilerplate, structure, and repetitive tasks
- Humans focus on creative decisions, UX refinement, and strategic direction
- Subagents provide specialized expertise (accessibility, performance, security)
- Result: Faster development with higher quality

---

### Critical Considerations

**Trust and verification:**
- Always review generated code, especially with `--dangerously-skip-permissions`
- Test thoroughly before deploying to production
- Understand that AI can make mistakes or misunderstand requirements

**Learning vs. dependence:**
- Using Claude Code can teach programming concepts through observation
- But over-reliance can prevent developing fundamental skills
- Best used as a learning tool or for rapid prototyping, not as a replacement for understanding

**Security implications:**
- Generated code may contain vulnerabilities
- `--dangerously-skip-permissions` bypasses safety checks
- Never use with untrusted prompts or in sensitive environments
- Audit code for security issues, especially user input handling

**Intellectual property:**
- Who owns AI-generated code?
- Consider licensing and attribution
- Check terms of service for AI tools

**Creativity and authorship:**
- AI implements your vision, but the vision must come from you
- Original game design, mechanics, and educational goals are human contributions
- AI is a tool, not a replacement for creative thinking

---

## Synthesis: The Agentic AI Revolution

### Recap: Three Perspectives on Agentic AI

**Part 1: Conceptual Foundation**
- Agentic AI operates autonomously with planning, tool use, and self-correction
- Subagents enable specialization, parallelization, and modular problem-solving
- This architecture mirrors human team collaboration, but at AI speed

**Part 2: Browser Integration (Perplexity Comet)**
- Agentic AI embedded in everyday browsing
- Context-aware assistance for repetitive web tasks
- Demonstrates how agentic systems augment existing workflows without requiring new software

**Part 3: Development Acceleration (Claude Code)**
- Full-stack autonomous development from natural language
- Subagent orchestration for complex application building
- Shows the cutting edge: AI that plans, builds, tests, and deploys

### Core Characteristics of Agentic AI

**1. Autonomy**
- Works toward goals with minimal supervision
- Makes decisions about strategies and approaches
- Executes multi-step workflows independently

**2. Tool Use**
- Can execute code, access APIs, browse the web, manipulate files
- Deploys specialized subagents for expert capabilities
- Integrates with existing systems and platforms

**3. Planning and Reasoning**
- Breaks complex goals into actionable subtasks
- Adapts plans based on intermediate results
- Handles dependencies and sequencing automatically

**4. Contextual Awareness**
- Maintains understanding across extended sessions
- Tracks project state and progress
- Remembers prior decisions and their rationales

**5. Self-Correction**
- Detects errors and bugs automatically
- Iterates on solutions without human intervention
- Tests and validates outputs

**6. Specialization Through Subagents**
- Each subagent brings domain expertise
- Parallel processing accelerates complex tasks
- Modular architecture enables flexible problem-solving

### Implications Across Domains

**For Academic Research:**
- Automate literature reviews, bibliography management, and citation formatting
- Process and analyze large datasets with minimal manual intervention
- Build research tools and visualizations without programming expertise

**For Teaching:**
- Rapidly update course materials across learning management systems
- Generate accessible content and study materials
- Create interactive educational experiences

**For Development:**
- Prototype applications in minutes instead of weeks
- Leverage specialized subagents for quality, accessibility, and performance
- Lower barriers to entry for non-technical creators

**For Daily Workflows:**
- Eliminate repetitive browser-based tasks
- Preserve and process web content for research
- Integrate AI assistance into existing tools without friction

---

## Ethical and Practical Considerations

### Transparency and Disclosure

- **In research:** Disclose when AI tools were used and for what purposes
- **In teaching:** Be transparent with students about AI use in course management
- **In development:** Document AI-generated code and its review process
- **Best practice:** Treat AI as a collaborator worthy of acknowledgment

### Verification and Quality Control

- **Always review outputs:** AI can make mistakes, misunderstand context, or generate plausible-sounding errors
- **Test thoroughly:** Especially critical with `--dangerously-skip-permissions` workflows
- **Validate sources:** Check that citations and references are accurate
- **Human oversight:** Final decisions on quality, appropriateness, and correctness remain human responsibilities

### Privacy and Data Security

- **Understand data flow:** What information do AI tools collect and store?
- **Protect sensitive information:** Don't upload confidential, proprietary, or personally identifiable data
- **Institutional policies:** Comply with IRB requirements, FERPA (for student data), and organizational guidelines
- **Terms of service:** Read and understand platform policies about data usage

### Equity and Access

- **Subscription barriers:** Most advanced agentic AI tools require paid accounts
- **Digital divide:** Not all students, faculty, or researchers have equal access
- **Institutional support:** Advocate for site licenses and training programs
- **Open alternatives:** Support development of open-source agentic tools

### Intellectual Property and Authorship

- **Code ownership:** Who owns AI-generated code? Check platform terms of service
- **Creative credit:** AI implements your vision, but you design the requirements
- **Licensing:** Understand implications for open-source licenses and attribution
- **Academic integrity:** Follow institutional and disciplinary norms for AI use

### Security Implications

- **Code vulnerabilities:** AI-generated code may contain security flaws
- **Bypassing safeguards:** `--dangerously-skip-permissions` disables safety checks
- **Audit requirements:** Review generated code for common vulnerabilities (SQL injection, XSS, etc.)
- **Deployment considerations:** Test thoroughly before production release

### Bias and Limitations

- **Training data bias:** AI tools reflect patterns in their training data
- **Domain gaps:** May lack expertise in specialized fields or non-Western contexts
- **Language limitations:** Often optimized for English; may struggle with other languages
- **Cultural nuance:** May miss context-dependent meanings or sensitive topics
- **Critical lens:** Maintain awareness of what AI can and cannot do well

### Dependence vs. Augmentation

- **Learning opportunity:** Using agentic AI can teach concepts through observation
- **Skill development:** Balance AI assistance with building fundamental knowledge
- **Strategic use:** Let AI handle boilerplate, focus human attention on creative and critical tasks
- **Avoiding over-reliance:** Understand underlying systems, don't treat AI as a black box

---

## Next Steps and Resources

### Getting Started with Agentic AI Tools

**Start Small:**
- Begin with simple browser tasks (Comet: download web pages, create citations)
- Try basic code generation (Claude Code: create a simple webpage or visualization)
- Experiment with `--dangerously-skip-permissions` only in safe, isolated environments

**Build Gradually:**
- Increase complexity as you understand capabilities and limitations
- Document what works well and what doesn't
- Share successful workflows with colleagues

**Stay Critical:**
- Always review and verify AI outputs
- Understand the tools' limitations in your domain
- Balance efficiency gains with quality control

### Tool Access

**Perplexity Comet:**
- Currently in beta/early access (check Perplexity.ai for availability)
- May require Perplexity Pro subscription
- Browser-based, works on desktop platforms

**Claude Code:**
- Available through Anthropic's Claude web interface
- Requires Claude subscription (Pro or enterprise)
- Web-based IDE with code execution capabilities

**Alternatives to explore:**
- GitHub Copilot: AI pair programming
- Cursor: AI-powered code editor
- Replit AI: Browser-based development with AI assistance
- Open-source options: Continue, Tabby, Code Llama

### Learning Resources

**Agentic AI Concepts:**
- Research papers on autonomous agents and multi-agent systems
- Anthropic's blog and research publications
- Academic conferences: NeurIPS, ICML, ACL (for AI/ML theory)

**Practical Tutorials:**
- p5.js tutorials: creative coding basics
- Web development fundamentals: HTML, CSS, JavaScript
- BibTeX and citation management
- Canvas LMS documentation and API guides

**Community and Discussion:**
- Digital humanities communities (DH Slack, Twitter/X, conferences)
- AI ethics and policy discussions
- Developer forums for specific tools

### Institutional Resources

- **Library support:** Many libraries offer digital scholarship consultations
- **IT services:** May provide access to AI tools or training
- **Teaching centers:** Can help integrate AI into pedagogy
- **Research computing:** For computational needs beyond browser-based tools

---

## Discussion Questions

**For reflection or group conversation:**

1. **Understanding Agentic AI:**
   - How is agentic AI different from the chatbots or AI assistants you've used before?
   - What role do subagents play in making complex tasks more manageable?

2. **Practical Applications:**
   - Which of the demonstrated capabilities (Comet browser automation, Claude Code development) would be most useful in your work?
   - What tasks in your current workflow could benefit from agentic automation?

3. **Ethical Considerations:**
   - What are the risks of using `--dangerously-skip-permissions` in real-world scenarios?
   - How should we balance AI efficiency with verification and quality control?
   - What does transparency look like when using agentic AI in research or teaching?

4. **Learning and Skills:**
   - Does using AI for development help you learn programming, or does it prevent skill development?
   - What competencies do students and faculty need to use agentic AI effectively and responsibly?

5. **Access and Equity:**
   - How do subscription costs and tool access affect who can benefit from agentic AI?
   - What can institutions do to ensure equitable access to these tools?

6. **Future Implications:**
   - How might widespread adoption of agentic AI change academic work?
   - What safeguards should be in place as these systems become more autonomous?
   - Where should human judgment remain central, even when AI could automate a task?

---

## Conclusion

Agentic AI represents a fundamental shift in how we interact with artificial intelligence—from reactive chatbots to autonomous systems capable of planning, executing, and managing complex workflows. Through subagent architectures, these systems achieve specialization and parallelization that enable sophisticated problem-solving across domains.

This talk explored three perspectives on agentic AI:

1. **Conceptual foundation:** Understanding what makes AI "agentic" and how subagents enable complex task decomposition
2. **Browser integration:** Perplexity Comet's demonstration of context-aware AI assistance for everyday web tasks
3. **Development acceleration:** Claude Code's showcase of autonomous application building from natural language instructions

### Key Takeaways

**Autonomy and Intelligence:**
Agentic AI systems operate with greater independence, making decisions, using tools, and iterating on solutions without constant human prompting.

**Subagent Architecture:**
Specialized subagents working in parallel enable higher quality outputs, faster execution, and more sophisticated problem-solving than single-agent approaches.

**Practical Applications:**
From automating repetitive browser tasks to building complete interactive applications, agentic AI is already transforming academic and creative workflows.

**Responsible Use:**
With increased autonomy comes increased responsibility. Verification, transparency, security, and critical engagement remain essential.

### Looking Forward

Agentic AI technology is evolving rapidly. Today's cutting-edge demonstrations will soon be baseline capabilities. The question is not whether agentic systems will become more prevalent, but how we'll integrate them thoughtfully into our work.

**The opportunity:** Reclaim time from repetitive tasks to focus on creative, interpretive, and relational work that defines human expertise.

**The challenge:** Maintain critical perspective, ensure equitable access, and prevent over-dependence on tools we don't fully understand.

**The responsibility:** Shape the development and deployment of these systems in ways that align with our values—rigor, accessibility, equity, transparency, and sustained engagement with complexity.

As scholars, educators, and creators, we have the chance to be thoughtful early adopters who help define best practices for agentic AI use in academic and creative contexts.

---

**Talk Facilitator Notes:**

- **Timing:** 15 min (intro/concepts) + 20 min (Comet demos) + 25 min (Claude Code demo) = 60 minutes total
- **Q&A:** Build in time for questions throughout, or save 10 minutes at the end for discussion
- **Engagement:** Encourage participants to share their own potential use cases
- **Follow-up:** Provide links to tools, documentation, and this overview document
- **Resources:** Consider creating a shared space for participants to exchange prompts and workflows
- **Accessibility:** Ensure any live demos are described verbally for screen reader users; provide captioned versions if recorded

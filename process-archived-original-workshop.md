---
layout: default
title: "Original Workshop Format - Archived"
---

# Original Workshop Format Documentation (Archived)

**⚠️ ARCHIVED:** This file documents the original four-demonstration workshop format developed in October 2025. The workshop has since been restructured into a three-part format.

**Current Workshop Structure:**
1. Agentic AI and subagent architectures (conceptual introduction)
2. Perplexity Comet browser demonstrations
3. Claude Code interactive development demonstration

**For current workshop documentation, see:** [agentic-ai-workshop-overview.md](agentic-ai-workshop-overview.html)

---

## Original Development Session Information

**Project:** AgentAI - Original workshop format (no longer current)
**Working Directory:** C:\Users\anast\Documents\GitHub\AgentAI
**Session Date:** 2025-10-06
**Repository Status:** Clean (Branch: main, Initial commit: c01d1dc)

---

## Session 1 - 2025-10-06

### [Session Start] - Initial Setup

**Repository Context:**
- Clean git repository with initial commit
- Platform: Windows (win32)
- Branch: main

---

### [Command 1] - Creating Digital Humanities Writer Agent

**Prompt:**
```
/agents
```

**Agents Used:** Primary Claude Code agent

**Output:** Successfully created custom agent named "digital-humanities-writer" configured for specialized content creation tailored to digital humanities projects.

**Issues:** None

---

### [Command 2] - Workshop Overview Document Creation

**Prompt:**
```
Use the digital humanities writer to build a markdown file that will serve as the overview for this project. The project is a one hour workshop for humanities graduate students and faculty in agentic AI.
```

**Workshop Specifications Provided:**
- Demo 1: General in-browser usage with Claude (dataset processing → DOCX output with citations)
- Demo 2: Perplexity.AI's Comet as always-on browser assistant (Canvas LMS integration)
- Demo 3: Claude Code for image alt-text generation and front-end development
- Demo 4: Creating custom accessibility audit sub-agent

**Agents Used:** digital-humanities-writer

**Output:** Created comprehensive workshop overview document at `agentic-ai-workshop-overview.md` (approximately 8 pages). The document includes:
- Introduction contextualizing agentic AI for humanities scholars
- Three clearly defined learning objectives
- Detailed breakdown of four demonstrations (60 minutes total)
- Ethical considerations section addressing bias, transparency, and digital labor
- Discussion questions for critical engagement
- Resources and next steps for continued learning
- Accessible writing style balancing technical precision with humanities audience needs

**Issues:** None

---

### [Command 3] - Creating Process Documenter Agent

**Prompt:**
```
/agents
```

**Agents Used:** Primary Claude Code agent

**Output:** Successfully created custom agent named "process-documenter" configured for maintaining comprehensive session documentation and project history tracking.

**Issues:** None

---

### [Command 4] - Session Documentation Creation

**Prompt:**
```
Document the complete process of this session in a new file called process.md.

## Session Context
- Project: AgentAI - A workshop on agentic AI for humanities graduate students and faculty
- Working directory: C:\Users\anast\Documents\GitHub\AgentAI
- Date: 2025-10-06

## Commands Executed This Session

### Command 1: Creating the digital-humanities-writer agent
- User ran: /agents command
- Result: Created agent: digital-humanities-writer
- Purpose: To enable specialized content creation for digital humanities projects

### Command 2: Initial Project Setup
- User prompt: "Use the digital humanities writer to build a markdown file that will serve as the overview for this project. The project is a one hour workshop for humanities graduate students and faculty in agentic AI."
- Workshop specifications:
  - Demo 1: General in-browser usage with Claude (dataset processing → DOCX output with citations)
  - Demo 2: Perplexity.AI's Comet as always-on browser assistant (Canvas LMS integration)
  - Demo 3: Claude Code for image alt-text generation and front-end development
  - Demo 4: Creating custom accessibility audit sub-agent
- Agent used: digital-humanities-writer
- Action taken: Created comprehensive workshop overview markdown file
- Output: agentic-ai-workshop-overview.md (8-page document)
- Outcome: Successfully created complete workshop framework with learning objectives, detailed demo sections, ethical considerations, discussion questions, and resources

### Command 3: Creating the process-documenter agent
- User ran: /agents command
- Result: Created agent: process-documenter
- Purpose: To track and document session processes

### Command 4: Current Documentation Request
- User prompt: "Use my process documenter agent to document all our process this session, creating a new markdown file process.md."
- Agent used: process-documenter
- Action: Creating this process.md file to document the complete session workflow

## Key Artifacts Created
1. **agentic-ai-workshop-overview.md** - Comprehensive workshop overview including:
   - Learning objectives for humanities scholars
   - Four detailed demonstration sections (60 minutes total)
   - Ethical considerations and critical thinking prompts
   - Resources and next steps
   - Accessible writing for mixed technical expertise

## Session Summary
This session focused on setting up a workshop project on agentic AI for humanities scholars. The primary deliverable was a detailed workshop overview document that balances technical demonstration with humanistic inquiry, emphasizing practical applications in research and teaching while maintaining critical awareness of AI limitations and ethical considerations.

## Technical Notes
- Repository status: Clean (initial commit: c01d1dc)
- Branch: main
- Platform: Windows (win32)
- Two custom agents created during session: digital-humanities-writer, process-documenter
```

**Agents Used:** process-documenter

**Output:** Created this process.md file documenting the complete session workflow with chronological command history, agent usage tracking, and artifact inventory.

**Issues:** None

---

## Session Summary

**Total Commands Executed:** 4
**Custom Agents Created:** 2 (digital-humanities-writer, process-documenter)
**Files Created:** 2 (agentic-ai-workshop-overview.md, process.md)
**Primary Objective:** Establish foundational workshop materials for humanities-focused agentic AI training

**Key Outcomes:**
1. Created specialized agent for digital humanities content creation
2. Developed comprehensive 60-minute workshop overview with four practical demonstrations
3. Established process documentation system for ongoing project tracking
4. Set up clean project structure ready for workshop material development

**Next Steps (Suggested):**
- Develop detailed materials for each demonstration section
- Create sample datasets for Demo 1
- Prepare accessibility audit examples for Demo 4
- Build participant handouts and reference materials

---

## File Inventory

**Documentation:**
- `process.md` - This session history document
- `agentic-ai-workshop-overview.md` - Workshop overview and framework

**Agents:**
- digital-humanities-writer
- process-documenter

---

*Documentation maintained by: process-documenter agent*
*Last updated: 2025-10-06*

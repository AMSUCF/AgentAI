# AgentAI Workshop

A demonstration-based workshop examining agentic AI systems and subagent architectures for academic contexts.

## About

This workshop demonstrates autonomous AI systems capable of:
- Automating browser-based research and teaching tasks (markdown archiving, BibTeX management, LMS editing)
- Rapid prototyping of interactive web applications
- Coordinating specialized subagents for complex workflows

**Target Audience:** Humanities faculty, graduate students, and digital scholarship practitioners
**Format:** Three demonstration segments with conceptual introduction
**Duration:** 1 hour
**Prerequisites:** None. Advanced development demonstrations included for interested participants.

## Repository Structure

```
AgentAI/
├── _config.yml                          # Jekyll configuration
├── _sass/                               # Custom theme styles
│   ├── variables.scss                   # Color palette & variables
│   └── jekyll-theme-cayman.scss        # Main stylesheet override
├── assets/
│   └── css/
│       └── style.scss                   # Style integration
├── game/                                # Agent Quest interactive demonstration
│   ├── index.html
│   ├── game.js
│   ├── style.css
│   └── README.md
├── index.md                             # Workshop homepage
├── agentic-ai-workshop-overview.md     # Complete workshop content
└── README.md                            # This file
```

## Design

The site uses a sixties pop art aesthetic with:

- High-contrast color palette for improved readability
- Typography optimized for screen display
- Accessible color combinations meeting WCAG AA standards
- Responsive design for multiple device types

## Local Development

To run this site locally:

```bash
# Install dependencies
bundle install

# Serve the site
bundle exec jekyll serve

# View at http://localhost:4000
```

## Deployment

This site is configured for **GitHub Pages** deployment using:
- Base theme: `jekyll-theme-cayman`
- Custom subtheme: Sixties pop art styling
- Automatic deployment from the `main` branch

## Content Structure

### Workshop Sections
1. **Conceptual Introduction:** Agentic AI characteristics and subagent architectures (15 min)
2. **Perplexity Comet Demonstrations:** Browser-based AI workflows (20 min)
3. **Claude Code Demonstration:** Interactive application development (25 min)

### Additional Materials
- **Agent Quest:** Interactive demonstration of subagent coordination
- Learning objectives and applications
- Ethical considerations for academic contexts
- Discussion questions

### Technical Implementation
- Jekyll static site generator
- GitHub Pages deployment
- Custom Sass styling with theme override
- Responsive design meeting accessibility standards

## License

Workshop content and design by the Digital Humanities Initiative.

## Contact

For questions about workshop materials, use the repository issue tracker.

---

Built with Jekyll. Designed for academic audiences.

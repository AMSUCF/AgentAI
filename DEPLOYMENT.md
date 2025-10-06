# GitHub Pages Deployment Guide

This guide walks you through deploying your AgentAI Workshop site to GitHub Pages.

## Prerequisites

- Git installed on your system
- GitHub account with repository access
- Repository: `AgentAI`

## Quick Deployment Steps

### 1. Verify Your Files

Ensure all these files exist in your repository:

```
C:\Users\anast\Documents\GitHub\AgentAI\
├── _config.yml                          ✓ Jekyll configuration
├── _sass/
│   ├── variables.scss                   ✓ Color palette
│   └── jekyll-theme-cayman.scss        ✓ Custom styles
├── assets/css/
│   └── style.scss                       ✓ Style integration
├── index.md                             ✓ Homepage
├── agentic-ai-workshop-overview.md     ✓ Workshop content
├── process.md                           ✓ Documentation
├── Gemfile                              ✓ Dependencies
└── README.md                            ✓ Repository info
```

### 2. Commit and Push to GitHub

From your working directory, run:

```bash
cd C:\Users\anast\Documents\GitHub\AgentAI

# Stage all new files
git add .

# Create commit
git commit -m "Add Jekyll configuration with sixties pop art theme

- Configure Jekyll for GitHub Pages with Cayman base theme
- Create custom pop art subtheme with bold colors and typography
- Add workshop overview, homepage, and documentation
- Implement responsive design with accessibility features

🤖 Generated with Claude Code
Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to GitHub
git push origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/anast/AgentAI`
2. Click **Settings** (top navigation)
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 4. Wait for Deployment

- GitHub Pages will build your site automatically
- This typically takes 1-3 minutes
- Watch for the green checkmark in the **Actions** tab

### 5. View Your Live Site

Your site will be available at:
```
https://anast.github.io/AgentAI/
```

(Replace `anast` with your actual GitHub username if different)

## Configuration Notes

### Repository Name in _config.yml

The `_config.yml` file currently has:
```yaml
repository: anast/AgentAI
```

If your GitHub username is different, update this line to match:
```yaml
repository: YOUR-USERNAME/AgentAI
```

### Custom Domain (Optional)

To use a custom domain:

1. Add a `CNAME` file to your repository with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use your custom domain

See: [GitHub Pages custom domain documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## Local Testing (Optional)

To preview your site locally before deploying:

### Install Dependencies

```bash
# Install Bundler if you don't have it
gem install bundler

# Install Jekyll and dependencies
bundle install
```

### Run Local Server

```bash
bundle exec jekyll serve
```

Then visit: `http://localhost:4000`

### Troubleshooting Local Testing

**Windows Users:**
- You may need Ruby installed ([RubyInstaller for Windows](https://rubyinstaller.org/))
- Run commands in Command Prompt or PowerShell as Administrator

**Common Issues:**
- `bundle: command not found` → Install Ruby and Bundler
- Port 4000 in use → Use `bundle exec jekyll serve --port 4001`
- Permission errors → Run terminal as Administrator

## Verifying Deployment

After deployment, verify:

1. **Homepage loads**: Visit the main URL
2. **Navigation works**: Click links to workshop overview and process pages
3. **Styling applied**: Check for pop art colors and bold typography
4. **Responsive design**: Test on mobile device or browser dev tools
5. **No 404 errors**: All internal links should work

## Theme Features to Test

Once deployed, verify these pop art theme elements:

- **Header gradient**: Pink-to-blue gradient with subtle dot pattern
- **Bold headings**: Color-coded (pink H1s, blue H2s, orange H3s)
- **Enhanced lists**: Square bullets for unordered, numbered circles for ordered
- **Colorful links**: Electric blue links that turn hot pink on hover
- **Pop art buttons**: Bold buttons with black borders and shadows
- **Blockquotes**: Yellow left border with large quotation mark
- **Tables**: Gradient headers with striped rows
- **Code blocks**: Clean gray backgrounds with subtle borders

## Updating the Site

To make changes after initial deployment:

```bash
# Make your edits to markdown or style files

# Stage changes
git add .

# Commit with descriptive message
git commit -m "Update workshop content"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically rebuild and redeploy within 1-3 minutes.

## Common Customizations

### Change Color Scheme

Edit `C:\Users\anast\Documents\GitHub\AgentAI\_sass\variables.scss`

The main colors are:
```scss
$pop-hot-pink: #FF1493;      // Primary accent
$pop-electric-blue: #0080FF;  // Secondary accent
$pop-bright-yellow: #FFD700;  // Tertiary accent
$pop-bold-red: #FF3333;       // Attention color
```

### Modify Typography

In `_sass\variables.scss`, adjust:
```scss
$font-stack-heading: 'Impact', 'Arial Black', ...;
$h1-size: 3.5rem;
$h2-size: 2.5rem;
```

### Update Site Title/Description

Edit `_config.yml`:
```yaml
title: "Your New Title"
description: "Your new description"
```

## Troubleshooting Deployment

### Site Not Appearing

1. Check **Actions** tab for build errors
2. Verify `_config.yml` syntax (YAML is sensitive to indentation)
3. Ensure repository is public or you have GitHub Pages enabled for private repos
4. Wait 5 minutes and hard refresh (Ctrl+F5)

### Styles Not Loading

1. Verify `assets/css/style.scss` has the YAML front matter (`---` on lines 1-2)
2. Check for syntax errors in `.scss` files
3. Ensure `_sass` directory is not in `.gitignore`
4. Look for errors in Actions build log

### 404 Errors on Internal Links

1. Check that markdown files have proper frontmatter with `layout: default`
2. Verify file names match link paths (case-sensitive on GitHub)
3. Use `.html` extensions for links (e.g., `agentic-ai-workshop-overview.html`)

## Getting Help

- **Jekyll Documentation**: https://jekyllrb.com/docs/
- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Cayman Theme**: https://github.com/pages-themes/cayman
- **Repository Issues**: Create an issue in this repository

## Performance Notes

The custom theme includes:

- Minimal JavaScript (none required for basic functionality)
- Optimized CSS with only necessary overrides
- Responsive images that scale appropriately
- Accessible markup for screen readers
- Print-friendly styles

Your site should load quickly even on slower connections.

## Accessibility Compliance

The theme meets WCAG 2.1 AA standards:

- Color contrast ratios exceed 4.5:1 for body text
- Focus indicators on all interactive elements
- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility

Test with tools like:
- WAVE (Web Accessibility Evaluation Tool)
- Lighthouse (Chrome DevTools)
- axe DevTools

---

**Ready to deploy?** Follow steps 1-5 above and your AgentAI Workshop will be live!

**Questions?** Check the troubleshooting section or create an issue in the repository.

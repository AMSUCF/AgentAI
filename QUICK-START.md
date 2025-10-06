# Quick Start Guide - AgentAI Jekyll Site

Get your site live in 5 minutes.

## Step 1: Commit Your Files (2 minutes)

```bash
cd C:\Users\anast\Documents\GitHub\AgentAI

git add .

git commit -m "Add Jekyll site with pop art theme"

git push origin main
```

## Step 2: Enable GitHub Pages (1 minute)

1. Go to: https://github.com/anast/AgentAI/settings/pages
2. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
3. Click **Save**

## Step 3: Wait for Build (1-2 minutes)

Watch the **Actions** tab: https://github.com/anast/AgentAI/actions

When you see a green checkmark, your site is live.

## Step 4: Visit Your Site

Your site is now at: **https://anast.github.io/AgentAI/**

(Replace `anast` with your GitHub username if different)

## Common Tasks

### Update Content

1. Edit markdown files (`.md`) in your working directory
2. `git add .`
3. `git commit -m "Update content"`
4. `git push origin main`
5. Wait 1-2 minutes for rebuild

### Change Colors

Edit `C:\Users\anast\Documents\GitHub\AgentAI\_sass\variables.scss`

Key colors:
```scss
$pop-hot-pink: #FF1493;      // Change to any hex color
$pop-electric-blue: #0080FF; // Change to any hex color
```

Commit and push to apply.

### Add a New Page

1. Create `new-page.md` in the root directory
2. Add frontmatter:
```yaml
---
layout: default
title: "Your Page Title"
---

# Your Content Here
```
3. Commit and push
4. Access at: `https://anast.github.io/AgentAI/new-page.html`

### Test Locally (Optional)

```bash
bundle install
bundle exec jekyll serve
```

Visit: http://localhost:4000

## Theme Features to Use

### Buttons

```markdown
<a href="link.html" class="btn">Primary Button</a>
<a href="link.html" class="btn btn-secondary">Secondary Button</a>
```

### Pop Art Box

```markdown
<div class="pop-box">
Important callout with bold styling!
</div>
```

### Demo Sections

```markdown
<div class="demo-section">

## Demo Title

Your demo content here...

</div>
```

### Text Alignment

```markdown
<div class="text-center">
Centered text
</div>
```

## File Reference

```
_config.yml              → Site settings (title, description)
_sass/variables.scss     → Colors, fonts, spacing
_sass/jekyll-theme-cayman.scss → Complete theme styles
assets/css/style.scss    → Theme integration (don't edit)
index.md                 → Homepage
*.md files               → Your content pages
```

## Troubleshooting

**Site not appearing?**
- Wait 5 minutes and hard refresh (Ctrl+F5)
- Check Actions tab for build errors

**Styles not loading?**
- Verify `assets/css/style.scss` starts with `---` on line 1
- Check for SCSS syntax errors

**404 errors?**
- Check markdown files have proper frontmatter
- Use `.html` extension in links (not `.md`)

## Next Steps

- Read `DEPLOYMENT.md` for detailed deployment info
- Read `STYLE-GUIDE.md` for design philosophy
- Read `README.md` for project overview

## Support

Create an issue in the repository for questions or problems.

---

**That's it! Your AgentAI Workshop site is ready to go.**

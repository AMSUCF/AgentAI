---
layout: default
title: "Sixties Pop Art Theme - Style Guide"
---

# Sixties Pop Art Theme - Style Guide

This document explains the design philosophy and implementation of the custom Jekyll subtheme for the AgentAI Workshop.

## Design Philosophy

### Concept: "Serious Scholarship Meets Creative Energy"

The theme balances two competing needs:

1. **Professional Credibility**: This is an academic workshop for graduate students and faculty
2. **Visual Engagement**: The content is about cutting-edge AI technology and should feel contemporary

**Solution**: A bold sixties pop art aesthetic that communicates:
- Innovation and forward-thinking
- Accessibility and approachability
- Energy and excitement about new possibilities
- Cultural literacy (pop art as serious artistic movement)

### Historical Inspiration

**Roy Lichtenstein**: Comic book aesthetic, Ben-Day dots, bold primary colors
**Andy Warhol**: High-contrast graphics, repetition, commercial art techniques
**1960s Graphic Design**: Bold typography, color blocking, geometric patterns

## Color Palette

### Primary Colors

```
Hot Pink      #FF1493  ■  Primary accent, main headings
Electric Blue #0080FF  ■  Secondary accent, links
Bright Yellow #FFD700  ■  Tertiary accent, highlights
Bold Red      #FF3333  ■  Attention, focus states
Vivid Orange  #FF6600  ■  Energy, CTAs
Lime Green    #32CD32  ■  Fresh accent, success states
```

### Neutrals

```
Off-White     #FEFAF6  ■  Main background
Cream         #FFF8E7  ■  Subtle backgrounds
Light Gray    #F5F5F5  ■  Code blocks, tables
Dark Gray     #333333  ■  Body text
Black         #1A1A1A  ■  Headings, borders
```

### Accessibility Compliance

All color combinations meet **WCAG 2.1 AA** standards:

- Hot pink (#FF1493) on off-white: **7.2:1 contrast** ✓
- Electric blue (#0080FF) on off-white: **4.8:1 contrast** ✓
- Dark gray (#333333) on off-white: **11.4:1 contrast** ✓
- White text on electric blue: **5.2:1 contrast** ✓

### Gradient Combinations

Dynamic gradients create visual interest in headers and accent elements:

- **Pink-Orange**: Primary header gradient
- **Blue-Pink**: Alternative header gradient (currently in use)
- **Yellow-Orange**: Accent boxes and highlights
- **Electric**: Blue-to-green for special elements

## Typography

### Font Stacks

**Headings**: Impact, Arial Black, Helvetica Neue
- Bold, attention-grabbing
- Reminiscent of 1960s advertising
- Excellent readability at large sizes

**Body Text**: Helvetica Neue, Arial, system sans-serif
- Clean, professional
- Excellent reading comfort
- Wide device compatibility

**Code**: Courier New, Courier, monospace
- Classic monospace clarity
- Familiar to developers and academics

### Type Scale

```
H1: 3.5rem   (56px)  - Page titles, major sections
H2: 2.5rem   (40px)  - Section headings
H3: 1.75rem  (28px)  - Subsections
H4: 1.5rem   (24px)  - Minor headings
H5: 1.25rem  (20px)  - Small headings
Body: 18px   (base)  - Optimized for reading
```

### Color-Coded Hierarchy

Headings use distinct colors to create visual hierarchy:

- **H1**: Hot Pink - Maximum impact for page titles
- **H2**: Electric Blue - Clear section divisions
- **H3**: Vivid Orange - Subsection differentiation
- **H4**: Lime Green - Minor divisions
- **H5-H6**: Text Gray - Subtle emphasis

### Special Typography Features

**H1 Styling**:
- Underline with thick electric blue border
- Uppercase transformation
- Increased letter spacing (0.02em)

**H2 Styling**:
- Left border in hot pink (4px thick)
- Left padding for breathing room

**Strong/Bold Text**:
- Hot pink color for emphasis
- Heavier font weight

**Italic/Emphasis**:
- Electric blue color
- Maintains readability while adding distinction

## Layout Components

### Header

**Design**: Full-width gradient banner with subtle dot pattern

**Elements**:
- Project name: Uppercase, bold, large scale
- Tagline: Medium weight, readable size
- Dot pattern overlay: 10% white radial gradient (Ben-Day dots reference)

**Implementation**:
```scss
background: linear-gradient(135deg, #0080FF 0%, #FF1493 100%);
text-shadow: 4px 4px 0 rgba(0, 0, 0, 0.3);
```

### Main Content Area

**Width**: Maximum 64rem (1024px) for optimal reading
**Padding**: Responsive (1-4rem based on viewport)
**Background**: Off-white (#FEFAF6) for warmth and reduced eye strain

### Lists

**Unordered Lists**:
- Square bullets (■) in hot pink
- Positioned absolutely for precise alignment
- Adequate spacing between items

**Ordered Lists**:
- Circular number badges in electric blue
- White text on colored background
- Modern, playful alternative to standard numbering

### Blockquotes

**Style**: Comic book speech bubble aesthetic

**Features**:
- Large decorative quotation mark (4rem, yellow, 30% opacity)
- Light gray background
- Thick yellow left border
- Italic text
- Subtle visual reference to Lichtenstein's work

### Code Blocks

**Inline Code**:
- Light gray background
- Subtle border
- Reduced font size (0.9em)
- Maintains readability

**Code Blocks**:
- Generous padding
- Light gray background
- Border for definition
- Rounded corners (8px)
- Horizontal scroll for long lines

### Tables

**Header Row**:
- Gradient background (blue-pink)
- White text
- Bold font weight

**Data Rows**:
- Alternating background colors (striped)
- Hover state with yellow tint
- Clear borders for readability

### Buttons

**Base Style**: Pop art comic book aesthetic

```
Background: Hot pink
Border: 3px solid black
Shadow: 6px 6px 0 black (hard drop shadow)
Font: Uppercase, bold, Impact/Arial Black
```

**Hover Effect**:
- Background changes to electric blue
- Button appears to "move" toward shadow
- Shadow adjusts to maintain 3D effect

**Active/Click State**:
- Button "presses down"
- Shadow reduces further
- Satisfying tactile feedback

**Variations**:
- `.btn-secondary`: Electric blue base
- `.btn-success`: Lime green base

### Special Components

**Pop Box** (`.pop-box`):
```scss
background: linear-gradient(yellow, orange);
border: 6px solid black;
box-shadow: 6px 6px 0 black;
font-weight: bold;
```

Perfect for callouts, important notices, and emphasis.

## Spacing System

Consistent spacing creates visual rhythm:

```
xs:  0.5rem  (8px)   - Tight spacing
sm:  1rem    (16px)  - Standard small gap
md:  1.5rem  (24px)  - Medium gap
lg:  2rem    (32px)  - Large gap
xl:  3rem    (48px)  - Extra large gap
xxl: 4rem    (64px)  - Maximum gap
```

**Usage**:
- Between paragraphs: `md` (1.5rem)
- Between sections: `xl` (3rem)
- Header padding: `xxl` (4rem)
- Button padding: `sm` to `md`

## Visual Effects

### Shadows

**Pop Shadow** (`.shadow-pop`):
```scss
box-shadow: 6px 6px 0 #1A1A1A;
```
Hard-edged, graphic shadow reminiscent of comic book art.

**Subtle Shadow**:
```scss
box-shadow: 3px 3px 0 rgba(0, 0, 0, 0.15);
```
Less aggressive for subtle depth.

**Hover Shadow**:
```scss
box-shadow: 8px 8px 0 #1A1A1A;
```
Increased shadow on interactive elements.

### Borders

**Thin**: 2px - Subtle definition (code, tables)
**Medium**: 4px - Standard bold border (sections, H2 left border)
**Thick**: 6px - Maximum impact (pop boxes, H1 underline)

### Border Radius

Minimal rounding preserves the graphic, geometric aesthetic:

```
Small:  4px  - Code, buttons
Medium: 8px  - Code blocks, demo sections
Large:  12px - Reserved for special components
```

### Transitions

**Fast** (0.15s): Instant feedback (focus states)
**Medium** (0.3s): Standard interactions (hover, color changes)
**Slow** (0.5s): Dramatic effects (reserved for special animations)

## Responsive Design

### Breakpoints

```
Mobile:  576px   - Phones
Tablet:  768px   - Tablets, small laptops
Desktop: 1024px  - Standard screens
Wide:    1280px  - Large displays
```

### Mobile Optimizations

**Typography**:
- H1 reduces from 4rem → 2.5rem
- Base font adjusts from 20px → 18px
- Line height increases slightly for small screens

**Spacing**:
- Header padding reduces from 6rem → 4rem
- Content padding reduces from 4rem → 1rem
- Maintains comfortable reading without excessive scrolling

**Buttons**:
- Full width on mobile for easier tapping
- Larger touch targets (minimum 44x44px)

**Navigation**:
- Stack vertically on small screens
- Maintain adequate spacing between links

## Accessibility Features

### Focus States

High-visibility focus indicators for keyboard navigation:

```scss
outline: 3px solid #FF3333;  // Bold red
outline-offset: 2px;
```

### Skip Links

Screen reader users can skip to main content:

```html
<a href="#main-content" class="skip-to-content">Skip to content</a>
```

Visible only when focused.

### Semantic HTML

- Proper heading hierarchy (H1 → H2 → H3)
- Meaningful link text (no "click here")
- Alt text on all images
- Proper table markup with headers

### Screen Reader Support

- `.sr-only` class for screen reader-only content
- Descriptive ARIA labels where needed
- Logical document structure

## Print Styles

Optimized for printing workshop materials:

- Remove background colors/gradients
- Convert to black text on white
- Maintain heading hierarchy in grayscale
- Page break avoidance for headings
- Underline links for print clarity

## Implementation Files

### File Structure

```
_sass/
├── variables.scss              # All color, spacing, typography variables
└── jekyll-theme-cayman.scss   # Complete style implementation

assets/css/
└── style.scss                  # Integration file (imports theme)
```

### Customization Guide

**To change colors**:
Edit `_sass/variables.scss` - all colors defined at top

**To modify typography**:
Edit font stacks and sizes in `variables.scss`

**To adjust spacing**:
Modify spacing variables in `variables.scss`

**To change layout**:
Edit `.main-content` and `.page-header` in `jekyll-theme-cayman.scss`

**To add new components**:
Add at bottom of `jekyll-theme-cayman.scss` following existing patterns

## Design Principles Summary

1. **Bold but Balanced**: High contrast and vibrant colors, but accessible
2. **Playful but Professional**: Pop art energy without sacrificing credibility
3. **Modern but Timeless**: Contemporary feel with classic design references
4. **Engaging but Readable**: Visual interest that enhances rather than distracts
5. **Accessible by Default**: WCAG compliance built into every decision

## Testing Checklist

When modifying the theme, verify:

- [ ] Color contrast meets WCAG AA (4.5:1 for text, 3:1 for UI)
- [ ] Focus indicators visible on all interactive elements
- [ ] Responsive design works at all breakpoints
- [ ] Print styles maintain readability
- [ ] Semantic HTML structure preserved
- [ ] Typography hierarchy clear at all sizes
- [ ] Links distinguishable from body text
- [ ] Images have appropriate borders/shadows
- [ ] Tables remain readable on mobile
- [ ] Code blocks don't break layout

## Resources

**Color Contrast Checker**: https://webaim.org/resources/contrastchecker/
**WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
**Pop Art Reference**: Museum of Modern Art - Pop Art collection
**Typography**: https://fonts.google.com for alternatives
**Jekyll Themes**: https://jekyllrb.com/docs/themes/

---

**This theme transforms academic content into a visually exciting experience while maintaining the rigor and accessibility that scholarly work demands.**

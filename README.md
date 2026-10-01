# Quarto Kit

A personal toolbox for reusable Quarto extensions, brand files, themes, filters, templates, and snippets.

The first component is a technical-modern Reveal.js theme with coordinated light and dark formats, bundled Inter and JetBrains Mono fonts, and no network dependency.

## Install

From a Quarto project, install this repository as an extension:

```bash
quarto add Mads-PeterVC/quarto-kit
```

For local development, render the specimen directly:

```bash
quarto render template.qmd
```

## Use

Use `format: quarto-kit-revealjs` for the light theme and `format: quarto-kit-dark-revealjs` for the dark theme. Author, affiliation, subtitle, and date are ordinary Quarto metadata; no personal identity is hard-coded.

```yaml
---
title: "Presentation title"
author: "Your Name"
format: quarto-kit-revealjs
---
```

Defaults for the 16:9 canvas, fade transitions, progress, slide numbers, controls, and code wrapping remain overridable:

```yaml
format:
  quarto-kit-revealjs:
    slide-number: false
    transition: none
```

## Chapter progress

The Reveal.js formats can show the current level-one section and progress through
its level-two slides. Enable the bundled indicator with top-level metadata and use
`slide-level: 2` so Quarto groups each section into a vertical slide stack:

```yaml
---
title: "Presentation title"
chapter-progress: true
format:
  quarto-kit-revealjs:
    slide-level: 2
    navigation-mode: vertical
    progress: false
---
```

```markdown
# First topic

## First slide

## Second slide

# Next topic

## Another slide
```

The option is off by default. The standard deck-wide Reveal.js progress bar is
independent; set `progress: false` when the chapter indicator should replace it.

## Utility classes

| Class | Purpose |
|---|---|
| `.accent` | Primary violet emphasis |
| `.accent-strong` | Secondary magenta emphasis |
| `.muted` | De-emphasised supporting text |
| `.compact` | Denser text and vertical rhythm |
| `.centered` | Centered content |
| `.panel` | Raised semantic content surface |
| `.bordered` | Lightweight bordered container |
| `.section-title` | Section-divider layout |
| `.closing-slide` | Closing or discussion layout |

## Customise

- `_extensions/quarto-kit/_brand.yml` contains semantic colors and typography.
- `theme-light.scss` and `theme-dark.scss` contain mode-specific tokens.
- `_rules.scss` contains shared component behavior.
- `fonts.css` loads the bundled variable webfonts for offline presentations.

Prefer changing tokens instead of individual selectors so both modes remain coherent. The brand file can be referenced independently by supported Quarto formats, while the custom formats provide both the brand and Reveal.js styling. Bundled font licenses live beside the font files.

## Visual review

`template.qmd` renders `template-light.html` and `template-dark.html`. Review title, section, prose, columns, code, tables, figures, callouts, fragments, dense content, and closing slides in both outputs before changing shared rules.

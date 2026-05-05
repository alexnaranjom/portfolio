# Portfolio — CLAUDE.md

## Overview
Alex Naranjo's developer portfolio. Single-page static site hosted on GitHub Pages at alexnaranjom.github.io/portfolio/.

## Tech Stack
- Plain HTML5 (semantic elements: header, main, section, article, footer)
- Plain CSS3 with custom properties — no framework, no preprocessor, no build step
- Vanilla JS — no jQuery, no framework

## File Structure
```
index.html       — single page, all sections
css/style.css    — all styles
js/main.js       — all interactivity
img/             — images and cert badge icons
favicon.ico
CLAUDE.md
```

## Section Order
Hero → About → Skills → Projects → Certifications → Experience → Contact → Footer

Section backgrounds alternate: dark navy → white → light slate → dark navy → white → light slate → dark navy

## CSS Conventions
- All colors/spacing in `:root` custom properties at top of style.css
- Responsive breakpoints: 1024px (tablet), 768px (mobile), 480px (small mobile)
- Scroll animations: `.animate-on-scroll` class + IntersectionObserver adds `.visible`
- Do not add Bootstrap, Tailwind, or any CSS framework

## JS Conventions
- Vanilla JS only, no jQuery
- IntersectionObserver for scroll-spy and fade-in animations
- All logic in js/main.js

## Placeholders to Fill In
- **Contact form**: replace `YOUR_FORM_ID` in index.html form action with Formspree endpoint (formspree.io)
- **Profile photo**: add `img/profile.jpg`, then in the About section replace `<span class="about-initials">AN</span>` with `<img src="img/profile.jpg" alt="Alex Naranjo" class="about-photo-img">`
- **AWS cert verify URL**: update href on the AWS cert card (Credly link)
- **ServiceNow cert verify URL**: update href on the ServiceNow cert card
- **PCEP cert verify URL**: update href on the PCEP cert card (OpenEDG link)
- **LinkedIn handle**: verify `alexnaranjom` is the correct handle in nav, hero, footer

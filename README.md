# Alex Naranjo — Developer Portfolio

Personal portfolio site for Alex Naranjo, Full-Stack Developer based in the Washington DC metro area.

**Live site:** https://alexnaranjom.github.io/portfolio/

---

## Tech Stack

- **HTML5** — semantic markup, ARIA labels, JSON-LD structured data
- **CSS3** — custom properties, CSS Grid, Flexbox, no framework
- **Vanilla JS** — no jQuery, no framework
- **Formspree** — contact form backend (free tier)
- **GitHub Pages** — static hosting

No build step. Edit source files directly.

---

## Project Structure

```
portfolio/
├── index.html          # Single-page site — all sections
├── css/
│   └── style.css       # All styles (custom properties, responsive)
├── js/
│   └── main.js         # Nav, scroll-spy, animations, captcha
├── img/
│   ├── icon/           # Certification badge images
│   └── 1920x1080/      # Hero background images
├── favicon.ico
└── CLAUDE.md           # Project conventions
```

---

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, title, tagline, GitHub/LinkedIn links |
| **About** | Background, specialization, career direction |
| **Skills** | Categorized skill cards with devicon icons |
| **Projects** | 6 featured repos + legacy projects (collapsible) |
| **Certifications** | AWS, ServiceNow, PCEP, Claude Code badges |
| **Experience** | ICF/SSA and CEIEC work history timeline |
| **Contact** | Formspree form with custom alphanumeric captcha |

---

## Featured Projects

- [python-etl-pipeline](https://github.com/alexnaranjom/python-etl-pipeline) — ETL pipeline with FastAPI, SQLite, logging
- [anthropic-api-solutions](https://github.com/alexnaranjom/anthropic-api-solutions) — Claude API: multi-turn, tool use, streaming
- [fastapi-contacts-crud](https://github.com/alexnaranjom/fastapi-contacts-crud) — RESTful CRUD with FastAPI and Pydantic v2
- [python-document-automation](https://github.com/alexnaranjom/python-document-automation) — Excel→Word batch document generation
- [python-weather-sms-api](https://github.com/alexnaranjom/python-weather-sms-api) — Weather API + Twilio SMS notifications
- [laravel-contacts-api](https://github.com/alexnaranjom/laravel-contacts-api) — Laravel REST API with PHPUnit tests

---

## Pending Setup

- **Contact form:** Replace `YOUR_FORM_ID` in `index.html` with your Formspree endpoint ✅ done
- **Profile photo:** Add `img/profile.jpg`, swap the `AN` initials in the About section
- **AWS cert URL:** Update Credly verify link on the AWS cert card
- **ServiceNow cert URL:** Update verify link on the ServiceNow cert card
- **ServiceNow badge:** Add `img/icon/servicenow-cert.png` (convert PDF cert to PNG)

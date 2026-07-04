# Changelog

All notable changes to this project are documented here. Format based on [Keep a Changelog](https://keepachangelog.com/).

## [1.2.0] - 2026-07-04

### Added
- Sitewide responsive navigation bar with the logo, main links, and a "More" dropdown, present on every page.
- Unified 3-column site footer (brand, Learn links, Site links) with logo and contact email.
- New pages: Free & Open Source Resources (`resources.html`), Contact (`contact.html`), Privacy Policy (`privacy-policy.html`), and Terms & Conditions (`terms.html`).
- Open Graph share image for the resources page (`images/og-resources.png`).

### Changed
- Added the navbar and unified footer to the home page and all six guide pages.
- `sitemap.xml` expanded to include the resources, contact, privacy, and terms pages.

## [1.1.0] - 2026-07-04

### Added
- Six standalone learning guide pages, each with unique meta tags, Open Graph/Twitter cards, JSON-LD structured data (Article, FAQPage, BreadcrumbList) and its own social image:
  - Blood Types Explained (`blood-types-explained.html`)
  - Blood Type Compatibility Chart (`blood-type-compatibility-chart.html`)
  - Blood Transfusion Guide (`blood-transfusion-guide.html`)
  - Universal Donor & Recipient (`universal-donor-recipient.html`)
  - Rarest & Most Common Blood Types (`rarest-blood-type.html`)
  - Rh Factor Explained (`rh-factor.html`)
- Per-page 1200x630 Open Graph share images under `images/og-*.png`.
- "Learn More" resource section on the home page linking all guides, plus cross-links between guides for internal navigation.

### Changed
- `sitemap.xml` expanded from 1 URL to 7, with per-page image entries and updated `lastmod`.
- Redesigned the home page social share image (`images/blood-typing-game-social.png`) to match the new guide branding.
- README: added a Learning Guides section and updated the project structure.

## [1.0.0]

### Added
- Interactive Blood Typing Game: blood typing simulation, transfusion mechanics, scoring, and integrated educational content.
- Responsive UI, FAQ section, and baseline SEO (meta tags, Open Graph, JSON-LD, robots.txt, sitemap).

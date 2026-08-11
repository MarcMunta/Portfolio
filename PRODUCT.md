# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- Primary audience, inferred from the published copy and CV: recruiters, hiring managers, and technical, product, or design leads evaluating Marc for junior product-development roles.
- Secondary audience: potential collaborators who need fast, concrete proof of what Marc has designed, built, and shipped.
- Open decision: the exact weighting between frontend, full-stack, product, and applied-AI roles is not explicitly fixed.

## Product Purpose

The portfolio helps a first-time visitor understand Marc's strongest work, practical contribution, technical range, and current availability without reading a long biography. Success means the visitor can identify relevant proof in under two minutes, inspect a live product or repository, and contact Marc or open the localized CV.

## Positioning

The portfolio presents a developer through working products and bounded evidence rather than a generic skills inventory. Each selected project connects a real problem, Marc's role, implementation facts, and a path to verify the result.

## Operating Context

- Single-page portfolio published as a static GitHub Pages site.
- Spanish, Catalan, and English versions share equivalent content.
- Visitors may arrive on desktop or mobile and may browse quickly, use keyboard navigation, prefer reduced motion, or open a PDF CV.
- Primary proof sources are live demos, public repositories, technical documents, project imagery, the CV, and Marc's portrait.

## Capabilities and Constraints

- Three selected projects: Klime, ATLAS, and Fichestu.
- Local language and light/dark theme preferences.
- Direct links to working demos, repositories, technical documents, email, GitHub, LinkedIn, and localized CV files.
- Static Next.js export with no server-side product data or account requirement.
- Claims must remain verifiable. Do not invent clients, traffic, revenue, benchmarks, or production usage.
- Keep content concise; project evidence may expand only when it adds decision value.

## Brand Commitments

- Use the name Marc Muntané Clarà and Marc's real portrait.
- Retain the distinctive fine-pointer bubble cursor and atmospheric background as recognizable interaction signatures, with accessible fallbacks.
- The user explicitly wants a visually spectacular, creative portfolio and grants freedom to replace the current composition.

## Evidence on Hand

- Localized product copy: `src/data/portfolioContent.jsx` and `src/data/portfolioProjects.jsx`.
- Project covers: `public/images/projects/`.
- Live demos for Klime and ATLAS; public repositories for Fichestu.
- Technical PDF for Fichestu.
- Localized CV PDFs and preview images in `public/docs/`.
- Portrait in `public/images/profile/marc-muntane.jpg`.
- No testimonials, employer endorsements, analytics, or outcome metrics are available and none may be fabricated.

## Product Principles

1. Proof before claims.
2. Make the strongest work understandable before the full biography.
3. Every sentence must help a visitor evaluate fit or take action.
4. Creative interaction must preserve clarity, speed, and accessible fallbacks.
5. Real artifacts lead; decoration supports them.

## Accessibility & Inclusion

- Preserve semantic landmarks, logical keyboard order, visible focus, readable contrast, and useful alternative text.
- Respect reduced-motion preferences and avoid interaction-gated content.
- Prevent horizontal overflow and keep primary controls comfortably usable on touch screens.

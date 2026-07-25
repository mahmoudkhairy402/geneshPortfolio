# Frontend Take-Home Bundle Builder

Responsive React prototype for a multi-step security bundle builder with a live review panel.

## Overview

This project rebuilds the provided bundle-builder flow as a working React UI. Shoppers can move through accordion steps, choose products, change variants, update quantities, review their configured system, and save the configuration for later.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- Context API for bundle state
- localStorage for persistence

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run linting:

```bash
npm run lint
```

## Implemented Features

- Four-step accordion builder: cameras, plan, sensors, and extra protection.
- Step 1 opens by default, with support for expanding/collapsing every step.
- Product cards render from JSON data instead of hardcoded product markup.
- Product cards support discount badges, images, descriptions, learn-more links, variants, quantity steppers, and pricing.
- Selected product cards receive highlighted border styling when their active variant quantity is above zero.
- Variant quantities are tracked independently, so each color/variant keeps its own count.
- Product-card steppers and review-panel steppers stay synchronized through shared Context API state.
- Review panel groups selected items under Cameras, Sensors, Accessories, and Home Monitoring Plan.
- Review panel recalculates subtotal, compare-at subtotal, savings, and shipping display as quantities change.
- Save-for-later persistence restores the saved bundle configuration after reloads or return visits.
- Responsive layout supports desktop, tablet, and mobile viewport sizes.

## Project Structure

```text
src/
  assets/              Static visual assets
  components/          Reusable UI and feature components
  context/             Bundle Context API state provider
  data/                Local JSON product data
  types/               Shared TypeScript types
  App.tsx              Main page layout and provider composition
  App.css              App-level stylesheet placeholder
  index.css            Tailwind import, theme variables, global styles
  index.tsx            React entry point
```

## Data

Product content is stored in `src/data/products.json`. The app currently uses local JSON data with temporary product image URLs. This keeps the UI data-driven and makes it easy to replace placeholder content with final product data or an API response later.

## State Management

Bundle state lives in `src/context/BundleContext.tsx` and is shared across the builder and review panel.

The state stores:

- Selected product IDs
- Selected variant IDs, when a product has variants
- Quantity per product/variant combination
- Active accordion step

This allows product cards and review-panel rows to update the same source of truth.

## Persistence

The bundle configuration is saved to localStorage under `bundle_builder_state`. When the app loads, it restores that saved state if available. If no saved state exists, the app falls back to seeded initial selections so the review panel is pre-populated.

## Styling Decisions

- Tailwind CSS v4 theme variables are defined in `src/index.css`.
- `primary` maps to `#4E2FD2` and is used through semantic utilities like `bg-primary`, `text-primary`, and `border-primary`.
- `background` is used for the light blue panel and active-step background.
- Inter is used as the main font.

## Tradeoffs

- Product images are temporary placeholders except for the satisfaction badge asset.
- The checkout button is intentionally non-functional because the prototype focuses on builder and review-panel behavior.
- Product data is local JSON rather than a backend API. This satisfies the requirement, while keeping a backend/API easy to add later.
- Some exact visual details may need final tuning against the original Figma screenshots before submission.

## Build Status

The project has been verified with:

```bash
npm run build
```

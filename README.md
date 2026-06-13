# Neevo Orca

Neevo Orca is an AI orchestration platform that gives users precise control over how AI agents are created, configured, connected, executed, and monitored.

## Frontend platform baseline

This repository now contains the initial frontend application scaffold for Neevo Orca:
- React 19 + Vite + TypeScript
- client-side rendering by default
- `neevo-ui` as the shared UI foundation
- React Router for application navigation
- TanStack Query for server-state management
- React Hook Form + Zod as the default forms and validation pair
- no major global state library by default
- an app-shell-first folder structure for follow-up product surfaces

## Development docs

- Structural and development guidance: [`docs/developers/Structure.md`](docs/developers/Structure.md)

## Getting started

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev`
3. Build for production: `npm run build`

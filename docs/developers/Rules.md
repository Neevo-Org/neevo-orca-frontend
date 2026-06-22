# Developer Rules

This document is the canonical development guide for contributors and coding agents working in this repository. It defines the current structural rules, UI rules, routing rules, and development expectations that should be followed when adding or restructuring code.

## Documentation conventions

- `docs/users/` is for user-facing documentation that may be served publicly later.
- `docs/developers/` is for internal engineering guidance.
- folders inside `docs/` represent groups
- `.md` files represent pages
- the file name defines the page name shown in the side menu
- page file names should use capitalization intended for display

## Core goals

- Keep features modular and independently evolvable.
- Keep the app layer thin.
- Make ownership obvious from file placement.
- Prevent shared code from becoming a dumping ground.
- Prefer composition over central registries and one-off exceptions.
- Keep UI implementation aligned with the Neevo UI library.

## Source structure

```text
src/
  app/
    layouts/
    providers/
    router/
  shared/
    config/
    hooks/
    lib/
    types/
    ui/
  modules/
    chat/
    projects/
    agents/
    workflows/
    orchestrations/
    runs/
    settings/
  admin/
    dashboard/
    users/
    audit-logs/
```

This repository is domain-first. Product areas should own their routes, pages, components, services, data access, and types instead of pushing that work into central app files.

## Ownership rules

### `src/app`

Use `src/app` only for application wiring.

Put these concerns here:
- app bootstrap
- top-level router composition
- provider registration
- application shell composition
- app-level navigation composition

Do not put these concerns here:
- feature-specific business logic
- feature-specific page content
- feature-specific mock data
- large inline route implementations

### `src/app/layouts`

Application layout code belongs in `src/app/layouts`.

This includes:
- `AppShell`
- application navigation composition
- stage composition
- app-specific structural layout pieces

Do not keep app layouts under `shared`. Layouts know about the application shell and navigation behavior, so they are application-owned.

### `src/shared`

Use `shared` only for code with no single domain owner.

Good candidates:
- generic utilities
- cross-domain hooks
- shared config
- generic UI wrappers
- framework helpers
- domain-agnostic types

Bad candidates:
- agent-specific logic
- workflow rules
- project-specific types
- chat-specific services
- app shell layout pieces

If the code speaks the language of one domain, it should stay in that domain.

### `src/modules`

Each folder in `modules` is a product area that should own its implementation end to end.

A module may include:

```text
modules/
  feature/
    components/
    data/
      api/
      mocks/
    domain/
    hooks/
    pages/
    queries/
    routes/
    services/
    utils/
```

Not every module needs every folder. Create folders only when the feature complexity justifies them.

### `src/admin`

Keep admin code separate from workspace product modules. Admin has different permissions, navigation, and product concerns.

## Import boundary rules

These are the default dependency boundaries:

- `app` may import from `shared`, `modules`, and `admin`
- `shared` may import only from `shared`
- `modules` may import from `shared`
- `admin` may import from `shared`
- one module should not import another module’s internals
- admin should not depend on module internals

If one module needs behavior from another module, stop and reassess. Usually the right fix is one of these:
- move the shared concern into `shared`
- redesign the boundary
- expose a clean public contract instead of importing internals

## Routing rules

- route definitions should live close to the domain they render
- modules should expose their own route objects or route surfaces
- the app router should compose module routes, not implement feature behavior itself
- avoid large central route files containing page copy, placeholder logic, or feature-specific decisions

## Stage header rules

`AppShell` must not force a static stage header onto every route.

Current rule:
- stage header behavior must stay route-level and flexible
- a route may provide a header, omit it entirely, or provide a custom header implementation
- layout infrastructure should support that flexibility without hardcoding a single header for all pages

This keeps stage composition adaptable without forcing unnecessary boilerplate onto every page.

## Navigation rules

- navigation definitions should be data, not embedded inside structural layout components
- app layouts should render navigation, not own product policy
- labels, grouping, and visibility rules should live outside the shell structure

## UI rules

Neevo UI is the primary UI foundation for this repository.

### Required defaults

- use `neevo-ui` components before introducing custom wrappers
- use `Container`, `Row`, and `Column` for layout composition
- use library surface components such as `Card`, `Badge`, `Avatar`, `Button`, `Text`, `TextArea`, and related primitives for page structure
- prefer Neevo UI composition over custom CSS-driven layout systems

### Avoid by default

- custom layout shells built with raw CSS when `Container`, `Row`, `Column`, `Grid`, `Card`, or related primitives already solve the problem
- page-scoped CSS files for standard layout structure
- one-off structural wrappers that duplicate Neevo UI responsibilities

### Allowed custom styling

Custom CSS should be minimal and intentional. It is acceptable for:
- distinctive interaction details such as chat bubbles
- genuinely missing visual treatments not covered by Neevo UI
- feature-specific polish that does not replace the layout system

Custom CSS should not become the primary page layout mechanism.

### TSX styling rule

- do not store large reusable style objects or style-building helper functions inside `.tsx` files
- if styling is static or broadly reusable within a page, move it into a CSS file
- use the `style` prop only for short one-off declarations or runtime-conditional values
- if a block of styling would be clearer as a class, it belongs in CSS

### Theme token rule

- Neevo UI theme and mode variables are the default source of truth for color values
- do not hardcode static colors when an equivalent `--nv-*` token exists
- when building outside the library, still reuse Neevo UI theme variables so the product keeps an accurate color scheme
- prefer tokens such as `--nv-color-*`, `--nv-shadow-*`, `--nv-radius-*`, and the provided gradients over custom literal values

## Page composition rules

- do not use `Page` or `PageBody`
- if older code still references them, remove those usages during related work
- pages should compose directly from supported Neevo UI primitives

## State and data rules

Use the lightest state model that solves the actual problem.

- server state belongs in TanStack Query
- form state belongs in React Hook Form
- validation belongs in Zod
- local UI state should stay local until there is a proven need to lift it
- do not introduce a global client-state library without a concrete cross-cutting need

## Data mode rules

Frontend development supports two data modes:

- `mock`
- `api`

Rules:
- `mock` is the default mode for early frontend work
- `api` remains available for integration and verification
- these are interchangeable implementations behind the same module-owned contract
- UI components must not know whether data came from mock or API mode

Each module should keep:
- domain types in the module
- service contracts in the module
- mock implementations in the module
- API implementations in the module
- query hooks in the module

## Reuse rules

Before moving code into `shared`, ask:

1. Is it reused in more than one module?
2. Is the behavior actually the same, not just visually similar?
3. Does the abstraction preserve domain clarity instead of hiding it?

If not, keep it local to the owning module.

Small intentional duplication is better than premature shared architecture.

## Development flow rules

When adding or restructuring code:

1. Start in the owning module unless the work is clearly app-level or shared infrastructure.
2. Keep routes, types, services, queries, mocks, and pages near the domain that owns them.
3. Extract to `shared` only after reuse is real.
4. Keep app-level files smaller after a refactor, not larger.
5. Remove inline feature policy from structural components.

## Ticket workflow

When working from a ticket, follow this flow:

1. Receive the ticket number and read the ticket.
2. Check out a new branch from `develop` using `task/<ticket_number>-description`.
3. Do the work.
4. Commit with a meaningful body and a subject in this format: `<Label from the ticket>(#<ticket_number>): short explanation`
5. Push the branch to GitHub.
6. Create a merge request or pull request.
7. Move the ticket to review.

## Review checklist

Before considering work complete, verify:

- does the file live under the domain that owns the behavior?
- is `shared` still domain-agnostic?
- are app layouts under `src/app/layouts`?
- is the router composing module surfaces instead of implementing features?
- is the page using Neevo UI primitives for layout?
- did we avoid `Page` and `PageBody`?
- is custom CSS limited to intentional feature-specific styling?
- does the feature support the current module contract and data-mode approach?
- would a new contributor understand ownership from the folder structure alone?

## Current baseline

The repository is still early enough that structural discipline is cheap to maintain. That makes now the right time to enforce:

- thin app wiring
- app-owned layouts
- module-owned feature implementation
- flexible route-level stage headers
- Neevo UI as the default composition layer
- minimal custom CSS for layout

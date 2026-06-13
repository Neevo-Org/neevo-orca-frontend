# Frontend Structure Guide

This document defines how the Neevo Orca frontend should be structured as the product grows. It is intended for both human contributors and coding agents so implementation decisions stay consistent across the repository.

## Goals

- Keep features modular and independently evolvable.
- Prevent shared code from becoming a dumping ground.
- Keep app wiring thin and boring.
- Make ownership obvious from file placement.
- Reduce refactor cost as new product areas are added.

## Target structure

```text
src/
  app/
    App.tsx
    layout/
    router/
    providers/
  shared/
    ui/
    lib/
    config/
    hooks/
    types/
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

This structure is intentionally domain-first. Product areas should own their pages, components, API access, schemas, and local state instead of pushing those concerns into central app files.

## Directory responsibilities

### `src/app`

Use `app` for application bootstrapping only.

Put these concerns here:
- app entry composition
- app-specific layout composition
- provider registration
- top-level router composition
- global initialization

Do not put these concerns here:
- feature-specific UI
- feature-specific business rules
- large route element definitions with inline product content

`app` should compose modules, not implement them.

### `src/app/layout`

Use `app/layout` for layout components that are specific to the Neevo Orca application shell.

Examples:
- `AppShell`
- app-specific stage composition
- app-specific sidebar composition
- layout pieces that depend on app navigation, branding, or route behavior

### `src/shared`

Use `shared` for code that has no single product owner and can be reused across multiple areas without carrying domain-specific meaning.

Examples:
- generic UI wrappers
- utility functions
- generic hooks
- formatting helpers
- constants with cross-app relevance
- base types that are not tied to one domain

Do not place code in `shared` if it knows about concepts like project membership, agent definitions, run history, workflow execution, or admin policy. If the code speaks the language of one domain, it belongs to that domain.

### `src/modules`

Each directory in `modules` is a product area. A module should own the code required to build and evolve that area end to end.

A module may contain subfolders such as:

```text
modules/
  chat/
    routes/
    pages/
    components/
    api/
    model/
    hooks/
    utils/
```

Not every module needs every folder. Create structure when the module complexity justifies it.

Module code should prefer local ownership:
- module routes stay with the module
- module API hooks stay with the module
- module validation schemas stay with the module
- module view components stay with the module

Move code to `shared` only after it proves reusable across modules.

### `src/admin`

Keep admin separate from the main workspace modules. Admin surfaces typically have different permission rules, navigation visibility, and product goals. Mixing them into core workspace modules will blur both architecture and UX.

## Dependency rules

Use these import rules as the default model:

- `app` may import from `shared`, `modules`, and `admin`.
- `shared` may import only from `shared`.
- `modules` may import from `shared`.
- `admin` may import from `shared`.
- one module should not import implementation details from another module.
- admin should not depend on module internals.

If one module needs something from another, that usually means one of three things:
- the code actually belongs in `shared`
- the boundary is wrong and should be redesigned
- a public contract needs to be introduced instead of importing internals

## Routing rules

Keep route declarations close to the domain they render.

Preferred pattern:
- modules expose route objects or route elements from their own `routes` area
- the top-level app router composes those routes

Avoid large central route files that hardcode page copy, placeholder content, and feature behavior inline. That pattern scales poorly and turns the router into a second feature layer.

## Navigation rules

Navigation definitions should be data, not embedded inside layout components.

Preferred pattern:
- `app/layout` renders the application shell and navigation sections
- navigation configuration lives in app-level config or a dedicated navigation module
- visibility rules, labels, and grouping stay outside the structural shell

This keeps `AppShell` application-scoped while preventing layout code from accumulating feature-specific policy.

## State rules

Use the lightest state model that solves the real problem.

- server state belongs in TanStack Query
- form state belongs in React Hook Form
- validation belongs in Zod
- local UI state should stay local until there is a proven need to lift it

Do not introduce a global client-state library without a concrete cross-cutting need.

## Reuse rules

Before creating shared abstractions, ask:

1. Is this reused in more than one module?
2. Is the behavior actually the same, not just visually similar?
3. Will a shared abstraction reduce duplication without hiding domain intent?

If the answer is no, keep the code local to the module.

Premature sharing creates worse architecture than small, intentional duplication.

## Development rules

When adding new work:

1. Start in the owning module unless the code is clearly app-level or shared infrastructure.
2. Keep route logic, UI, API access, and schemas near the feature that owns them.
3. Extract to `shared` only after reuse is proven.
4. Avoid adding domain logic to `shared/ui` or `app/router`.
5. Prefer composition over large central registries.

When restructuring:

1. Move ownership boundaries first.
2. Reduce cross-folder knowledge.
3. Remove inline configuration from structural components.
4. Keep central app files smaller after the refactor, not larger.

## Practical review checklist

When reviewing a PR or generating code, validate these questions:

- Does the file live under the domain that owns the behavior?
- Is `shared` still domain-agnostic?
- Is the router composing modules instead of implementing them?
- Is layout rendering structure rather than owning navigation policy?
- Did we add a reusable abstraction only because reuse is real?
- Would a new contributor understand ownership from the folder alone?

## Current direction

The current repository is still early enough to enforce this structure cheaply. That makes this the right time to keep the app layer thin, keep app-specific shell composition in `app/layout`, and let each product area grow behind a clear boundary.

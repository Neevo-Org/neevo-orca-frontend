# Frontend Data Modes

This document defines how frontend feature work should handle data during the early Neevo Orca product phase.

## Recommendation

Neevo Orca frontend should support two development data modes from the start:

- `mock`
- `api`

`mock` mode should be the default. `api` mode should remain available as an opt-in integration mode.

## Why this is the default

`mock` as the default gives the frontend team:

- zero external setup for everyday UI work
- freedom to iterate before backend endpoints are finished
- stable local development inside the repository
- a cleaner path to design and workflow refinement

`api` mode still matters because it provides:

- early backend integration verification
- payload and contract validation
- a realistic path for end-to-end behavior checks

The correct model is not mock-only or API-only. It is mock-by-default with API as a supported secondary mode.

## Core rule

The frontend must not split into two different architectures.

Instead:

- each module defines one stable contract
- mock implementations satisfy that contract
- API implementations satisfy that contract
- query hooks depend on the contract, not on raw fetch logic inside the UI

UI code should not need to know which mode is active.

## Expected module shape

The current repository uses `modules`, so feature ownership should look like this:

```text
src/
  app/
    config/
      env.ts
  shared/
    http/
      client.ts
  modules/
    chat/
      domain/
        types.ts
        contracts.ts
      data/
        api/
          chat.api.ts
        mocks/
          chat.mock.ts
          chat.scenarios.ts
      queries/
        use-chat-session.ts
        use-send-message.ts
      pages/
      components/
      routes/
```

Not every module needs every file immediately, but this is the intended ownership model.

## Responsibilities by layer

### `domain/`

Own:

- core types
- input and output shapes
- service contracts
- module-level business vocabulary

### `data/api/`

Own:

- real backend calls
- request building
- payload normalization
- translation from backend response shapes into frontend domain shapes

Raw backend payloads should not leak directly into UI components.

### `data/mocks/`

Own:

- mock implementations of service contracts
- realistic scenarios
- loading, empty, error, and edge-case data variants

Mock mode should not be limited to one static happy-path object.

### `queries/`

Own:

- React Query hooks
- cache keys
- fetching orchestration
- mutation hooks

Query hooks should depend on service contracts or service selection, not embed direct transport concerns into UI components.

## Environment selection

The application should select the active data mode through environment configuration, for example:

```env
VITE_DATA_MODE=mock
```

or:

```env
VITE_DATA_MODE=api
```

The exact implementation can evolve, but the selection mechanism should stay app-level while the implementations remain module-owned.

The repository now includes a root `.env.example` file that exposes the current baseline variables:

- `VITE_DATA_MODE`
- `VITE_API_BASE_URL`

## Architectural rules

- default to `mock` for new MVP frontend work
- keep `api` mode available for integration checks
- do not let UI components branch on mock-versus-API behavior
- keep service contracts stable even if backend payloads change
- normalize backend data inside API implementations
- keep mock and API implementations swappable behind the same contract

## MVP application

This decision applies to MVP feature work as the default frontend development strategy.

Priority adoption targets:

- Chat
- Projects

Those modules should establish the pattern first so the rest of the product can follow a proven shape instead of inventing data boundaries repeatedly.

## Practical workflow

When building a new module surface:

1. Define the module domain types and service contract first.
2. Build a mock implementation that satisfies the contract.
3. Build query hooks against the contract.
4. Develop the UI against the mock-backed hooks.
5. Add the API implementation behind the same contract.
6. Verify the module in `api` mode without rewriting UI architecture.

## Summary

The frontend should be developed in a hybrid model with:

- `mock` as the default mode
- `api` as the integration mode
- module-owned contracts as the stable boundary

This gives the team implementation speed now without creating avoidable rewrite pressure later.

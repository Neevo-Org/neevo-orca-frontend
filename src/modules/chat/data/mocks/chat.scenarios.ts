import type { ChatOverview } from '../../domain/types';

export const chatOverviewScenario: ChatOverview = {
  mode: 'mock',
  summary:
    'Chat is currently running in mock mode so the frontend can iterate on conversation UX without waiting for backend endpoints.',
  primaryAction: 'Open mock conversation',
  highlights: [
    'Mock mode is the default development path for early frontend work.',
    'The UI should consume the same module contract that API mode will later satisfy.',
    'Chat is the first MVP surface that should prove the contract-first pattern.',
  ],
};

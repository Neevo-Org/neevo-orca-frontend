import type { ProjectsOverview } from '../../domain/types';

export const projectsOverviewScenario: ProjectsOverview = {
  mode: 'mock',
  summary:
    'Projects is running in mock mode so workspace flows, object relationships, and information density can be shaped before backend persistence is complete.',
  primaryAction: 'Open mock workspace',
  highlights: [
    'Projects should use the same contract in both mock and API modes.',
    'Mock scenarios should cover empty, seeded, and edge-case project states.',
    'This is one of the first MVP modules that should establish the shared data-mode pattern.',
  ],
};

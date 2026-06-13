import type { AppSurface } from '../../../shared/types/app-surfaces';

import { AgentsPage } from '../pages/AgentsPage';

export const agentSurfaces: AppSurface[] = [
  {
    id: 'agents',
    to: '/agents',
    element: <AgentsPage />,
    showInNav: true,
    navLabel: 'Agents',
    navIcon: 'smart_toy',
    navGroup: 'Workspace',
    navPlacement: 'primary',
  },
];

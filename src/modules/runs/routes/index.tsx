import type { AppSurface } from '../../../shared/types/app-surfaces';

import { RunsPage } from '../pages/RunsPage';

export const runSurfaces: AppSurface[] = [
  {
    id: 'runs',
    to: '/runs',
    element: <RunsPage />,
    showInNav: true,
    navLabel: 'Runs',
    navIcon: 'play_circle',
    navGroup: 'Workspace',
    navPlacement: 'primary',
  },
];

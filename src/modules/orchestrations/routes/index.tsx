import type { AppSurface } from '../../../shared/types/app-surfaces';

import { OrchestrationsPage } from '../pages/OrchestrationsPage';

export const orchestrationSurfaces: AppSurface[] = [
  {
    id: 'orchestrations',
    to: '/orchestrations',
    element: <OrchestrationsPage />,
    showInNav: true,
    navLabel: 'Orchestrations',
    navIcon: 'hub',
    navGroup: 'Workspace',
    navPlacement: 'primary',
  },
];

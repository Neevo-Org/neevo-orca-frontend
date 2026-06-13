import type { AppSurface } from '../../../shared/types/app-surfaces';

import { WorkflowsPage } from '../pages/WorkflowsPage';

export const workflowSurfaces: AppSurface[] = [
  {
    id: 'workflows',
    to: '/workflows',
    element: <WorkflowsPage />,
    showInNav: true,
    navLabel: 'Workflows',
    navIcon: 'account_tree',
    navGroup: 'Workspace',
    navPlacement: 'primary',
  },
];

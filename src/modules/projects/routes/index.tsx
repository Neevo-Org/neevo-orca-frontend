import type { AppSurface } from '../../../shared/types/app-surfaces';

import { ProjectsPage } from '../pages/ProjectsPage';

export const projectSurfaces: AppSurface[] = [
  {
    id: 'projects',
    to: '/projects',
    element: <ProjectsPage />,
    showInNav: true,
    navLabel: 'Projects',
    navIcon: 'folder',
    navGroup: 'Workspace',
    navPlacement: 'primary',
  },
];

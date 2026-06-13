import type { AppSurface } from '../../../shared/types/app-surfaces';

import { UsersPage } from '../pages/UsersPage';

export const adminUserSurfaces: AppSurface[] = [
  {
    id: 'admin-users',
    to: '/admin/users',
    element: <UsersPage />,
    showInNav: true,
    navLabel: 'Users',
    navIcon: 'groups',
    navGroup: 'Admin',
    navPlacement: 'primary',
  },
];

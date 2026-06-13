import type { AppSurface } from '../../../shared/types/app-surfaces';

import { DashboardPage } from '../pages/DashboardPage';

export const adminDashboardSurfaces: AppSurface[] = [
  {
    id: 'admin-dashboard',
    to: '/admin/dashboard',
    element: <DashboardPage />,
    showInNav: true,
    navLabel: 'Dashboard',
    navIcon: 'dashboard',
    navGroup: 'Admin',
    navPlacement: 'primary',
  },
];

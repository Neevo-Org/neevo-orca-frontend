import type { AppSurface } from '../../../shared/types/app-surfaces';

import { SettingsPage } from '../pages/SettingsPage';

export const settingsSurfaces: AppSurface[] = [
  {
    id: 'settings',
    to: '/settings',
    element: <SettingsPage />,
    showInNav: true,
    navLabel: 'Settings',
    navIcon: 'settings',
    navPlacement: 'utility',
  },
];

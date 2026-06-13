import type { AppSurface } from '../../../shared/types/app-surfaces';

import { AuditLogsPage } from '../pages/AuditLogsPage';

export const adminAuditLogSurfaces: AppSurface[] = [
  {
    id: 'admin-audit-logs',
    to: '/admin/audit-logs',
    element: <AuditLogsPage />,
    showInNav: true,
    navLabel: 'Audit Logs',
    navIcon: 'policy',
    navGroup: 'Admin',
    navPlacement: 'primary',
  },
];

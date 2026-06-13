import { adminAuditLogSurfaces } from '../../admin/audit-logs/routes';
import { adminDashboardSurfaces } from '../../admin/dashboard/routes';
import { adminUserSurfaces } from '../../admin/users/routes';
import { agentSurfaces } from '../../modules/agents/routes';
import { chatSurfaces } from '../../modules/chat/routes';
import { orchestrationSurfaces } from '../../modules/orchestrations/routes';
import { projectSurfaces } from '../../modules/projects/routes';
import { runSurfaces } from '../../modules/runs/routes';
import { settingsSurfaces } from '../../modules/settings/routes';
import { workflowSurfaces } from '../../modules/workflows/routes';
import type { AppNavigationGroup, AppNavigationItem, AppRouteObject, AppSurface } from '../../shared/types/app-surfaces';

export const appSurfaces: AppSurface[] = [
  ...chatSurfaces,
  ...projectSurfaces,
  ...agentSurfaces,
  ...workflowSurfaces,
  ...orchestrationSurfaces,
  ...runSurfaces,
  ...settingsSurfaces,
  ...adminDashboardSurfaces,
  ...adminUserSurfaces,
  ...adminAuditLogSurfaces,
];

export const primaryNavigationGroups: AppNavigationGroup[] = appSurfaces.reduce<AppNavigationGroup[]>((groups, surface) => {
  if (!surface.showInNav || surface.navPlacement !== 'primary' || !surface.navGroup || !surface.navLabel || !surface.navIcon) {
    return groups;
  }

  const item: AppNavigationItem = {
    to: surface.to,
    label: surface.navLabel,
    icon: surface.navIcon,
  };

  const existingGroup = groups.find((group) => group.label === surface.navGroup);

  if (existingGroup) {
    existingGroup.items.push(item);
    return groups;
  }

  return [...groups, { label: surface.navGroup, items: [item] }];
}, []);

export const utilityNavigation: AppNavigationItem[] = appSurfaces.flatMap((surface) => {
  if (!surface.showInNav || surface.navPlacement !== 'utility' || !surface.navLabel || !surface.navIcon) {
    return [];
  }

  return [
    {
      to: surface.to,
      label: surface.navLabel,
      icon: surface.navIcon,
    },
  ];
});

export const appRoutes: AppRouteObject[] = appSurfaces.map((surface) => ({
  path: surface.to.replace(/^\/+/, ''),
  element: surface.element,
  handle: {
    stageHeader: surface.stageHeader,
  },
}));

import { chatSurfaces } from '../../modules/chat/routes';
import type { AppNavigationGroup, AppNavigationItem, AppRouteObject, AppSurface } from '../../shared/types/app-surfaces';

export const appSurfaces: AppSurface[] = [
  ...chatSurfaces,
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

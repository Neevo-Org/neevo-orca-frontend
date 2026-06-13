import type { ReactNode } from 'react';
import type { RouteObject } from 'react-router-dom';

export type AppRouteHandle = {
  stageHeader?: ReactNode;
};

export type AppRouteObject = RouteObject & {
  handle?: AppRouteHandle;
};

export type AppNavigationPlacement = 'primary' | 'utility';

export type AppSurface = {
  id: string;
  to: string;
  element: ReactNode;
  stageHeader?: ReactNode;
  navLabel?: string;
  navIcon?: string;
  navGroup?: string;
  navPlacement?: AppNavigationPlacement;
  showInNav?: boolean;
};

export type AppNavigationItem = {
  to: string;
  label: string;
  icon: string;
};

export type AppNavigationGroup = {
  label: string;
  items: AppNavigationItem[];
};

import {
  AppNavItem,
  AppShell as NeevoAppShell,
  AppSidebar,
  AppSidebarBrand,
  AppSidebarGroup,
  AppSidebarNav,
  AppStage,
  I,
} from 'neevo-ui';
import { Outlet, matchPath, useLocation, useMatches, useNavigate } from 'react-router-dom';

import { primaryNavigationGroups, utilityNavigation } from '../surfaces';
import type { AppRouteHandle } from '../../shared/types/app-surfaces';

function isNavigationItemActive(itemPath: string, pathname: string) {
  return Boolean(matchPath({ path: itemPath, end: false }, pathname));
}

export function AppShell() {
  const location = useLocation();
  const matches = useMatches();
  const navigate = useNavigate();
  const currentMatch = matches[matches.length - 1];
  const stageHeader = (currentMatch?.handle as AppRouteHandle | undefined)?.stageHeader;

  return (
    <NeevoAppShell>
      <AppSidebar
        header={
          <AppSidebarBrand
            icon={<I>smart_toy</I>}
            title="Neevo Orca"
            subtitle="Navigation baseline"
          />
        }
        footer={
          <>
            {utilityNavigation.map((item) => (
              <AppNavItem
                key={item.to}
                icon={<I>{item.icon}</I>}
                label={item.label}
                active={isNavigationItemActive(item.to, location.pathname)}
                onClick={() => navigate(item.to)}
              />
            ))}
          </>
        }
      >
        <AppSidebarNav>
          {primaryNavigationGroups.map((group) => (
            <AppSidebarGroup key={group.label} label={group.label}>
              {group.items.map((item) => (
                <AppNavItem
                  key={item.to}
                  icon={<I>{item.icon}</I>}
                  label={item.label}
                  active={isNavigationItemActive(item.to, location.pathname)}
                  onClick={() => navigate(item.to)}
                />
              ))}
            </AppSidebarGroup>
          ))}
        </AppSidebarNav>
      </AppSidebar>

      <AppStage header={stageHeader}>
        <Outlet />
      </AppStage>
    </NeevoAppShell>
  );
}

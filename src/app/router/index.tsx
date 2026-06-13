import { Navigate, createBrowserRouter } from 'react-router-dom';

import { AppShell } from '../layout/AppShell';
import { appRoutes } from '../surfaces';
import type { AppRouteObject } from '../../shared/types/app-surfaces';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <Navigate to="/chat" replace />,
      },
      ...appRoutes,
    ],
  },
] satisfies AppRouteObject[]);

import { createBrowserRouter } from 'react-router-dom';

import { HomePage } from '../features/home/pages/HomePage';
import { AppShell } from '../layouts/AppShell';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
]);
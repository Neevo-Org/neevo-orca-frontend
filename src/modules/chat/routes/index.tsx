import { ChatPage } from '../pages/ChatPage';
import type { AppSurface } from '../../../shared/types/app-surfaces';

export const chatSurfaces: AppSurface[] = [
  {
    id: 'chat',
    to: '/chat',
    element: <ChatPage />,
    showInNav: true,
    navLabel: 'Chat',
    navIcon: 'chat',
    navGroup: 'Workspace',
    navPlacement: 'primary',
  },
];

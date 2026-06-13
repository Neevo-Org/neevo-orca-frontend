import { AppStageHeader } from 'neevo-ui';

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
    stageHeader: (
      <AppStageHeader
        eyebrow="Frontend ticket #2"
        title="Application navigation and information architecture"
        description="The app shell now treats Chat as the landing surface and separates workspace navigation from admin controls."
      />
    ),
  },
];

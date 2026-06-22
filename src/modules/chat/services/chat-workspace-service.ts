import { appEnv } from '../../../shared/config/env';
import type { ChatWorkspaceService } from '../domain/contracts';

import { chatApiService } from '../data/api/chat.api';
import { chatMockService } from '../data/mocks/chat.mock';

export function getChatWorkspaceService(): ChatWorkspaceService {
  if (appEnv.dataMode === 'api') {
    return chatApiService;
  }

  return chatMockService;
}

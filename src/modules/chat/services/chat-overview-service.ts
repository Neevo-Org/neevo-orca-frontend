import { appEnv } from '../../../shared/config/env';
import type { ChatOverviewService } from '../domain/contracts';

import { chatApiService } from '../data/api/chat.api';
import { chatMockService } from '../data/mocks/chat.mock';

export function getChatOverviewService(): ChatOverviewService {
  if (appEnv.dataMode === 'api') {
    return chatApiService;
  }

  return chatMockService;
}

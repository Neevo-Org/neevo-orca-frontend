import type { ChatWorkspaceService } from '../../domain/contracts';

import { chatWorkspaceScenario } from './chat.scenarios';

export const chatMockService: ChatWorkspaceService = {
  async getWorkspace() {
    return chatWorkspaceScenario;
  },
};

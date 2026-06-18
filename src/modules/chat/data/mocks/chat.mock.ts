import type { ChatOverviewService } from '../../domain/contracts';

import { chatOverviewScenario } from './chat.scenarios';

export const chatMockService: ChatOverviewService = {
  async getOverview() {
    return chatOverviewScenario;
  },
};

import { httpGet } from '../../../../shared/http/client';
import type { ChatOverviewService } from '../../domain/contracts';
import type { ChatOverview } from '../../domain/types';

type ChatOverviewApiResponse = Partial<{
  summary: string;
  highlights: string[];
  primaryAction: string;
}>;

function normalizeChatOverview(response: ChatOverviewApiResponse): ChatOverview {
  return {
    mode: 'api',
    summary:
      response.summary ??
      'Chat is running in API mode so the frontend can verify real backend integration and payload contracts.',
    primaryAction: response.primaryAction ?? 'Verify chat API integration',
    highlights:
      response.highlights ??
      [
        'API mode is opt-in and should be used for integration checks.',
        'Backend payload normalization should stay inside the API adapter layer.',
        'UI components should stay unaware of the transport source.',
      ],
  };
}

export const chatApiService: ChatOverviewService = {
  async getOverview() {
    const response = await httpGet<ChatOverviewApiResponse>('/chat/overview');
    return normalizeChatOverview(response);
  },
};

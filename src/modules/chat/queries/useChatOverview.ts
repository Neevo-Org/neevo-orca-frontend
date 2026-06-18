import { useQuery } from '@tanstack/react-query';

import { appEnv } from '../../../shared/config/env';
import { getChatOverviewService } from '../services/chat-overview-service';

export function useChatOverview() {
  return useQuery({
    queryKey: ['chat', 'overview', appEnv.dataMode],
    queryFn: () => getChatOverviewService().getOverview(),
  });
}

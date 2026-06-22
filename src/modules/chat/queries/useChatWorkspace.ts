import { useQuery } from '@tanstack/react-query';

import { appEnv } from '../../../shared/config/env';
import { getChatWorkspaceService } from '../services/chat-workspace-service';

export function useChatWorkspace() {
  return useQuery({
    queryKey: ['chat', 'workspace', appEnv.dataMode],
    queryFn: () => getChatWorkspaceService().getWorkspace(),
  });
}

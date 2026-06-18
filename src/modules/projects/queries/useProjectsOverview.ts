import { useQuery } from '@tanstack/react-query';

import { appEnv } from '../../../shared/config/env';
import { getProjectsOverviewService } from '../services/projects-overview-service';

export function useProjectsOverview() {
  return useQuery({
    queryKey: ['projects', 'overview', appEnv.dataMode],
    queryFn: () => getProjectsOverviewService().getOverview(),
  });
}

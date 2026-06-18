import { appEnv } from '../../../shared/config/env';
import type { ProjectsOverviewService } from '../domain/contracts';

import { projectsApiService } from '../data/api/projects.api';
import { projectsMockService } from '../data/mocks/projects.mock';

export function getProjectsOverviewService(): ProjectsOverviewService {
  if (appEnv.dataMode === 'api') {
    return projectsApiService;
  }

  return projectsMockService;
}

import type { ProjectsOverviewService } from '../../domain/contracts';

import { projectsOverviewScenario } from './projects.scenarios';

export const projectsMockService: ProjectsOverviewService = {
  async getOverview() {
    return projectsOverviewScenario;
  },
};

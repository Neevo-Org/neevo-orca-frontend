import type { ProjectsOverview } from './types';

export interface ProjectsOverviewService {
  getOverview(): Promise<ProjectsOverview>;
}

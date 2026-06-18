import { httpGet } from '../../../../shared/http/client';
import type { ProjectsOverviewService } from '../../domain/contracts';
import type { ProjectsOverview } from '../../domain/types';

type ProjectsOverviewApiResponse = Partial<{
  summary: string;
  highlights: string[];
  primaryAction: string;
}>;

function normalizeProjectsOverview(response: ProjectsOverviewApiResponse): ProjectsOverview {
  return {
    mode: 'api',
    summary:
      response.summary ??
      'Projects is running in API mode so the frontend can verify real workspace and persistence integration.',
    primaryAction: response.primaryAction ?? 'Verify projects API integration',
    highlights:
      response.highlights ??
      [
        'API mode should validate real object relationships and payload contracts.',
        'Normalization should happen inside the API adapter before data reaches the page layer.',
        'Projects should remain module-owned even when integration complexity increases.',
      ],
  };
}

export const projectsApiService: ProjectsOverviewService = {
  async getOverview() {
    const response = await httpGet<ProjectsOverviewApiResponse>('/projects/overview');
    return normalizeProjectsOverview(response);
  },
};

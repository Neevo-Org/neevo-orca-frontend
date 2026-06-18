import type { DataMode } from '../../../shared/config/env';

export type ProjectsOverview = {
  mode: DataMode;
  summary: string;
  highlights: string[];
  primaryAction: string;
};

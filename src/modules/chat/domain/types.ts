import type { DataMode } from '../../../shared/config/env';

export type ChatOverview = {
  mode: DataMode;
  summary: string;
  highlights: string[];
  primaryAction: string;
};

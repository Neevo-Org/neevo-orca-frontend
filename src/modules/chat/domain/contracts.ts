import type { ChatOverview } from './types';

export interface ChatOverviewService {
  getOverview(): Promise<ChatOverview>;
}

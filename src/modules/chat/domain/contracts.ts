import type { ChatWorkspace } from './types';

export interface ChatWorkspaceService {
  getWorkspace(): Promise<ChatWorkspace>;
}

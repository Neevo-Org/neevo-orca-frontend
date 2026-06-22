import type { DataMode } from '../../../shared/config/env';

export type ChatAgent = {
  id: string;
  name: string;
  role: string;
  status: 'default' | 'available';
  description: string;
};

export type ChatMessageAuthor = 'agent' | 'user' | 'system';

export type ChatMessage = {
  id: string;
  author: ChatMessageAuthor;
  body: string;
  timestamp: string;
};

export type ChatConversation = {
  agentId: string;
  summary: string;
  messages: ChatMessage[];
};

export type ChatWorkspace = {
  mode: DataMode;
  agents: ChatAgent[];
  conversations: ChatConversation[];
  composerPlaceholder: string;
};

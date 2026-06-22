import { httpGet } from '../../../../shared/http/client';
import type { ChatWorkspaceService } from '../../domain/contracts';
import type { ChatAgent, ChatConversation, ChatWorkspace } from '../../domain/types';

type ChatAgentApiResponse = Partial<{
  id: string;
  name: string;
  role: string;
  description: string;
  isDefault: boolean;
}>;

type ChatMessageApiResponse = Partial<{
  id: string;
  author: 'agent' | 'user' | 'system';
  body: string;
  timestamp: string;
}>;

type ChatConversationApiResponse = Partial<{
  agentId: string;
  summary: string;
  messages: ChatMessageApiResponse[];
}>;

type ChatWorkspaceApiResponse = Partial<{
  agents: ChatAgentApiResponse[];
  conversations: ChatConversationApiResponse[];
  composerPlaceholder: string;
}>;

function normalizeAgent(agent: ChatAgentApiResponse, index: number): ChatAgent {
  return {
    id: agent.id ?? `agent-${index + 1}`,
    name: agent.name ?? `Agent ${index + 1}`,
    role: agent.role ?? 'Available agent',
    status: agent.isDefault ? 'default' : 'available',
    description: agent.description ?? 'This agent is available for direct conversation.',
  };
}

function normalizeConversation(conversation: ChatConversationApiResponse, index: number): ChatConversation {
  return {
    agentId: conversation.agentId ?? `agent-${index + 1}`,
    summary: conversation.summary ?? 'Direct conversation thread.',
    messages:
      conversation.messages?.map((message, messageIndex) => ({
        id: message.id ?? `${conversation.agentId ?? `agent-${index + 1}`}-${messageIndex + 1}`,
        author: message.author ?? 'agent',
        body: message.body ?? 'Message unavailable.',
        timestamp: message.timestamp ?? '--:--',
      })) ?? [],
  };
}

function normalizeChatWorkspace(response: ChatWorkspaceApiResponse): ChatWorkspace {
  return {
    mode: 'api',
    composerPlaceholder:
      response.composerPlaceholder ?? 'Send a message to the selected agent using the live backend integration...',
    agents:
      response.agents?.map(normalizeAgent) ?? [
        {
          id: 'orchestrator',
          name: 'Orchestrator',
          role: 'Default primary agent',
          status: 'default',
          description: 'Default direct conversation agent.',
        },
      ],
    conversations: response.conversations?.map(normalizeConversation) ?? [],
  };
}

export const chatApiService: ChatWorkspaceService = {
  async getWorkspace() {
    const response = await httpGet<ChatWorkspaceApiResponse>('/chat/workspace');
    return normalizeChatWorkspace(response);
  },
};

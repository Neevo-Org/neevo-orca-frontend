import { useMemo, useState, type ChangeEvent } from 'react';
import {
  I,
} from 'neevo-ui';

import type { ChatConversation, ChatMessage } from '../domain/types';
import { useChatWorkspace } from '../queries/useChatWorkspace';
import { ChatAgentDrawer } from '../components/ChatAgentDrawer';
import { ChatComposer } from '../components/ChatComposer';
import { ChatConversation as ChatConversationView } from '../components/ChatConversation';
import { ChatHeader } from '../components/ChatHeader';
import { ChatLayout } from '../components/ChatLayout';
import { ChatLoadingState } from '../components/ChatLoadingState';
import { ChatStateCard } from '../components/ChatStateCard';

import './chat-page.css';

function createLocalMessageId() {
  return `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function createUserMessage(body: string): ChatMessage {
  return {
    id: createLocalMessageId(),
    author: 'user',
    body,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}

function createAgentReply(agentName: string): ChatMessage {
  return {
    id: createLocalMessageId(),
    author: 'agent',
    body: `${agentName} received your message. This MVP baseline keeps Chat centered on direct conversation, agent switching, and a clean reply loop.`,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  };
}

export function ChatPage() {
  const { data, error, isLoading } = useChatWorkspace();
  const [selectedAgentId, setSelectedAgentId] = useState<string>('orchestrator');
  const [isAgentDrawerOpen, setIsAgentDrawerOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [localMessagesByAgent, setLocalMessagesByAgent] = useState<Record<string, ChatMessage[]>>({});

  const selectedAgent = useMemo(
    () => data?.agents.find((agent) => agent.id === selectedAgentId) ?? data?.agents[0],
    [data, selectedAgentId],
  );

  const selectedConversation = useMemo(() => {
    if (!data || !selectedAgent) {
      return undefined;
    }

    const baseConversation =
      data.conversations.find((conversation) => conversation.agentId === selectedAgent.id) ??
      ({
        agentId: selectedAgent.id,
        summary: `Direct thread with ${selectedAgent.name}.`,
        messages: [],
      } satisfies ChatConversation);

    return {
      ...baseConversation,
      messages: [...baseConversation.messages, ...(localMessagesByAgent[selectedAgent.id] ?? [])],
    };
  }, [data, localMessagesByAgent, selectedAgent]);

  function handleSend() {
    const messageBody = draft.trim();
    if (!messageBody || !selectedAgent) {
      return;
    }

    const userMessage = createUserMessage(messageBody);
    const agentReply = createAgentReply(selectedAgent.name);

    setLocalMessagesByAgent((currentMessages) => ({
      ...currentMessages,
      [selectedAgent.id]: [...(currentMessages[selectedAgent.id] ?? []), userMessage, agentReply],
    }));

    setDraft('');
  }

  if (isLoading) {
    return <ChatLoadingState />;
  }

  if (error) {
    return (
      <ChatStateCard
        badge="Chat / Error"
        title="Chat workspace unavailable"
        description="The direct chat surface could not be prepared from the current workspace source."
        details={error.message}
        cardClassName="chat-page__card--state chat-page__card--error"
        icon={
          <div className="chat-page__error-icon">
            <I>error</I>
          </div>
        }
      />
    );
  }

  if (!data) {
    return (
      <ChatStateCard
        badge="Chat / Unavailable"
        title="Chat workspace missing"
        description="The workspace did not return a usable chat surface for the current development source."
        details="The chat workspace did not return any data from the active development mode."
        cardClassName="chat-page__card--state chat-page__card--missing"
        icon={
          <div className="chat-page__state-icon chat-page__state-icon--missing">
            <I>inventory_2</I>
          </div>
        }
      />
    );
  }

  if (!selectedAgent) {
    return (
      <ChatStateCard
        badge="Chat / Empty"
        title="No agents available"
        description="Direct chat needs at least one available agent before a conversation thread can open."
        details="Add or load an agent before opening a direct conversation thread."
        cardClassName="chat-page__card--state chat-page__card--empty"
        icon={
          <div className="chat-page__state-icon chat-page__state-icon--empty">
            <I>smart_toy</I>
          </div>
        }
      />
    );
  }

  const workspace = data!;
  const agent = selectedAgent!;

  return (
    <>
      <ChatLayout
        header={<ChatHeader agent={agent} conversation={selectedConversation} />}
        body={<ChatConversationView agent={agent} messages={selectedConversation?.messages ?? []} />}
        footer={
          <ChatComposer
            agent={agent}
            draft={draft}
            placeholder={workspace.composerPlaceholder}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) => setDraft(event.target.value)}
            onOpenAgents={() => setIsAgentDrawerOpen(true)}
            onSend={handleSend}
          />
        }
        bodyClassName="chat-page__body"
      />

      <ChatAgentDrawer
        agents={workspace.agents}
        selectedAgent={agent}
        open={isAgentDrawerOpen}
        onClose={() => setIsAgentDrawerOpen(false)}
        onSelectAgent={(agentId) => {
          setSelectedAgentId(agentId);
          setIsAgentDrawerOpen(false);
        }}
      />
    </>
  );
}

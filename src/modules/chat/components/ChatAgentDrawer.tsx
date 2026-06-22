import { Avatar, Badge, Button, Column, Drawer, DrawerBody, DrawerHeader, I, Row, Text } from 'neevo-ui';

import { appEnv } from '../../../shared/config/env';
import type { ChatAgent } from '../domain/types';
import { getChatAvatarLabel } from './chat-avatar';

type ChatAgentDrawerProps = {
  agents: ChatAgent[];
  selectedAgent: ChatAgent;
  open: boolean;
  onClose: () => void;
  onSelectAgent: (agentId: string) => void;
};

export function ChatAgentDrawer({ agents, selectedAgent, open, onClose, onSelectAgent }: ChatAgentDrawerProps) {
  return (
    <Drawer open={open} onClose={onClose} side="right" size="md">
      <DrawerHeader>
        <Column gap={10}>
          <Badge>Chat / {appEnv.dataMode.toUpperCase()}</Badge>
          <Text as="h2" weight="semibold">
            Agents
          </Text>
          <Text tone="muted">
            Orchestrator stays pinned as the default path, while each agent keeps its own direct thread.
          </Text>
        </Column>
      </DrawerHeader>
      <DrawerBody>
        <Column gap={12}>
          {agents.map((listedAgent) => {
            const isActive = listedAgent.id === selectedAgent.id;

            return (
              <Button
                key={listedAgent.id}
                type="button"
                onClick={() => onSelectAgent(listedAgent.id)}
                style={{
                  border: isActive
                    ? '1px solid color-mix(in srgb, var(--nv-color-theme) 44%, var(--nv-color-border))'
                    : '1px solid color-mix(in srgb, var(--nv-color-border) 56%, transparent)',
                }}
                className="chat-page__agent-button"
              >
                <Column gap={12} className="chat-page__agent-button-content">
                  <Row gap={12} align="center">
                    <Avatar
                      name={listedAgent.name}
                      fallback={getChatAvatarLabel(listedAgent.name)}
                      className="chat-page__avatar"
                    />
                    <Column gap={4}>
                      <Row gap={8} align="center">
                        <Text weight="semibold">{listedAgent.name}</Text>
                        {listedAgent.status === 'default' ? <Badge>Default</Badge> : null}
                      </Row>
                      <Text tone="muted">{listedAgent.role}</Text>
                    </Column>
                    <I>{isActive ? 'radio_button_checked' : 'chevron_right'}</I>
                  </Row>
                  <Text tone="muted">{listedAgent.description}</Text>
                </Column>
              </Button>
            );
          })}
        </Column>
      </DrawerBody>
    </Drawer>
  );
}

import type { ChatWorkspace } from '../../domain/types';

export const chatWorkspaceScenario: ChatWorkspace = {
  mode: 'mock',
  composerPlaceholder: 'Ask the selected agent for a decision, summary, or next action...',
  agents: [
    {
      id: 'orchestrator',
      name: 'Orchestrator',
      role: 'Default primary agent',
      status: 'default',
      description: 'Coordinates broad requests and acts as the default direct conversation surface.',
    },
    {
      id: 'research-analyst',
      name: 'Research Analyst',
      role: 'Knowledge synthesis',
      status: 'available',
      description: 'Best for gathering sources, comparing options, and summarizing findings.',
    },
    {
      id: 'builder',
      name: 'Builder',
      role: 'Execution-focused agent',
      status: 'available',
      description: 'Best for implementation planning, task breakdowns, and concrete next steps.',
    },
  ],
  conversations: [
    {
      agentId: 'orchestrator',
      summary: 'Default conversation for broad requests and coordinated execution.',
      messages: [
        {
          id: 'orch-1',
          author: 'agent',
          body: 'I am the Orchestrator. Start here when you want one place to ask, coordinate, and move work forward.',
          timestamp: '09:14',
        },
        {
          id: 'orch-2',
          author: 'user',
          body: 'What should this surface optimize for in the MVP?',
          timestamp: '09:16',
        },
        {
          id: 'orch-3',
          author: 'agent',
          body: 'A clean conversation flow: agent selection, message history, and a focused composer without workflow or debugging noise.',
          timestamp: '09:17',
        },
      ],
    },
    {
      agentId: 'research-analyst',
      summary: 'Conversation thread for investigation, comparisons, and synthesis.',
      messages: [
        {
          id: 'res-1',
          author: 'agent',
          body: 'I can compare approaches, gather evidence, and summarize tradeoffs for decisions.',
          timestamp: '08:42',
        },
      ],
    },
    {
      agentId: 'builder',
      summary: 'Conversation thread for converting direction into execution steps.',
      messages: [
        {
          id: 'build-1',
          author: 'agent',
          body: 'Use me when you want a scoped implementation plan, checkpoints, and delivery sequencing.',
          timestamp: '08:55',
        },
      ],
    },
  ],
};

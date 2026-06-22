export type AgentWorkflowStep = {
  title: string;
  detail: string;
};

export type AgentFieldRule = {
  name: string;
  guidance: string;
  options: string[];
};

export type TicketRelationshipExample = {
  source: string;
  target: string;
  relationship: string;
  reason: string;
  planningDecision: string;
};

export type TicketPlanItem = {
  id: string;
  title: string;
  priority: 'Urgent' | 'High' | 'Medium' | 'Low';
  size: 'XS' | 'S' | 'M' | 'L' | 'XL';
  effort: 'Low' | 'Medium' | 'High';
  placement: 'Current Iteration' | 'Next Iteration' | 'Future Iteration' | 'Backlog' | 'Blocked';
  summary: string;
};

export type TicketOrganizationAgentOverview = {
  badge: string;
  title: string;
  summary: string;
  primaryAction: string;
  focus: string[];
  workflow: AgentWorkflowStep[];
  fieldRules: AgentFieldRule[];
  relationships: TicketRelationshipExample[];
  plan: TicketPlanItem[];
};

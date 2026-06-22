import type { TicketOrganizationAgentOverview } from '../../domain/types';

export const ticketOrganizationAgentOverview: TicketOrganizationAgentOverview = {
  badge: 'Agents / Planning',
  title: 'GitHub Ticket Organization Agent',
  summary:
    'Organize open GitHub issues into a prioritized execution plan by classifying scope, identifying blockers, and assigning iteration placement from relationship-aware analysis.',
  primaryAction: 'Run issue triage',
  focus: [
    'Relationships are the main planning signal because they determine readiness and unlock sequences.',
    'The agent updates assignees, labels, type, priority, effort, size, iteration, milestone, and ticket links.',
    'Current iteration placement is constrained by clarity, capacity, and dependency order rather than priority alone.',
  ],
  workflow: [
    {
      title: 'Fetch and normalize open issues',
      detail:
        'Read titles, descriptions, comments, linked work, timestamps, and existing project metadata before applying any planning decision.',
    },
    {
      title: 'Analyze ticket intent',
      detail:
        'Detect whether the work is a bug, feature, or task and whether it is actionable, speculative, or missing product or design context.',
    },
    {
      title: 'Detect blocking relationships',
      detail:
        'Determine which tickets are blocked, which ones unblock several others, and where parent or sub-issue structure is missing.',
    },
    {
      title: 'Classify planning fields',
      detail:
        'Set labels, type, priority, effort, size, milestone usage, and iteration placement using consistent heuristics instead of ad hoc judgment.',
    },
    {
      title: 'Apply GitHub updates',
      detail:
        'Write back the organization decisions so the issue list becomes an execution plan rather than a flat backlog.',
    },
  ],
  fieldRules: [
    {
      name: 'Labels and type',
      guidance:
        'Use the smallest existing label set possible. If the label is Bug, the type is Bug. If the label is Enhancement, the type is Feature. Everything else is treated as a Task.',
      options: ['Analysis', 'Bug', 'Documentation', 'Duplicate', 'Enhancement', 'Invalid'],
    },
    {
      name: 'Priority',
      guidance:
        'Prioritize by user impact, release pressure, severity, and dependency value. Blocking work moves upward even when its direct user value is not the highest.',
      options: ['Urgent', 'High', 'Medium', 'Low'],
    },
    {
      name: 'Effort and size',
      guidance:
        'Size represents planning weight. Effort is derived from size and complexity. XL work should usually be split into smaller issues before entering active execution.',
      options: ['XS < 2h', 'S half day', 'M 1-2 days', 'L 3-5 days', 'XL split required'],
    },
    {
      name: 'Iteration placement',
      guidance:
        'Only clear, valuable, unblocked work belongs in the current iteration. Important but dependent work moves to next iteration. Unclear or oversized work stays in backlog.',
      options: ['Current Iteration', 'Next Iteration', 'Future Iteration', 'Backlog', 'Blocked'],
    },
  ],
  relationships: [
    {
      source: '#38 Add authentication API',
      target: '#42 Add login page',
      relationship: 'Blocking',
      reason: 'The login page cannot be completed until the authentication API exists.',
      planningDecision: 'Move #38 into the current iteration and mark #42 as blocked by #38.',
    },
    {
      source: '#38 Add authentication API',
      target: '#43 Add password reset',
      relationship: 'Blocking',
      reason: 'The password reset flow shares the same backend dependency and should not start first.',
      planningDecision: 'Keep downstream auth tickets out of active execution until #38 lands.',
    },
    {
      source: '#60 Build authentication system',
      target: '#61-#65 Suggested sub-issues',
      relationship: 'Parent',
      reason: 'The parent issue is too large for reliable iteration planning and hides several independent tasks.',
      planningDecision: 'Split the XL parent into focused child tickets before estimating capacity.',
    },
  ],
  plan: [
    {
      id: '#38',
      title: 'Add authentication API',
      priority: 'High',
      size: 'L',
      effort: 'High',
      placement: 'Current Iteration',
      summary: 'High leverage backend work that unlocks multiple frontend and account-management tickets.',
    },
    {
      id: '#42',
      title: 'Add login page',
      priority: 'High',
      size: 'M',
      effort: 'Medium',
      placement: 'Blocked',
      summary: 'Ready from a UX perspective but dependent on authentication endpoints and contract stability.',
    },
    {
      id: '#70',
      title: 'Improve dashboard loading speed',
      priority: 'Medium',
      size: 'M',
      effort: 'Medium',
      placement: 'Next Iteration',
      summary: 'Useful performance work with a clear outcome, but it does not unblock current release-critical delivery.',
    },
    {
      id: '#51',
      title: 'Add dark mode',
      priority: 'Low',
      size: 'L',
      effort: 'High',
      placement: 'Backlog',
      summary: 'Nice-to-have enhancement that should wait until nearer-term product and platform work is complete.',
    },
  ],
};

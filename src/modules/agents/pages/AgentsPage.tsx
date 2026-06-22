import { Badge, Button, Card, CardBody, CardHeader, Column, Container, Row, Text } from 'neevo-ui';

import { ticketOrganizationAgentOverview } from '../data/mocks/ticket-organization-agent.mock';

const placementTone: Record<string, 'default' | 'muted'> = {
  'Current Iteration': 'default',
  'Next Iteration': 'default',
  'Future Iteration': 'muted',
  Backlog: 'muted',
  Blocked: 'muted',
};

export function AgentsPage() {
  const overview = ticketOrganizationAgentOverview;

  return (
    <Container>
      <Column gap={20}>
        <Card>
          <CardHeader>
            <Badge>{overview.badge}</Badge>
          </CardHeader>
          <CardBody>
            <Column gap={16}>
              <Text as="h2" weight="semibold">
                {overview.title}
              </Text>
              <Text tone="muted">{overview.summary}</Text>
              <Button type="button">{overview.primaryAction}</Button>
            </Column>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Current Focus</CardHeader>
          <CardBody>
            <Column gap={12}>
              {overview.focus.map((item) => (
                <Text key={item} tone="muted">
                  {item}
                </Text>
              ))}
            </Column>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Workflow</CardHeader>
          <CardBody>
            <Column gap={16}>
              {overview.workflow.map((step, index) => (
                <Column key={step.title} gap={6}>
                  <Text weight="semibold">
                    {index + 1}. {step.title}
                  </Text>
                  <Text tone="muted">{step.detail}</Text>
                </Column>
              ))}
            </Column>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Planning Fields</CardHeader>
          <CardBody>
            <Column gap={16}>
              {overview.fieldRules.map((rule) => (
                <Column key={rule.name} gap={8}>
                  <Text weight="semibold">{rule.name}</Text>
                  <Text tone="muted">{rule.guidance}</Text>
                  <Row gap={8} wrap>
                    {rule.options.map((option) => (
                      <Badge key={option}>{option}</Badge>
                    ))}
                  </Row>
                </Column>
              ))}
            </Column>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Relationship Logic</CardHeader>
          <CardBody>
            <Column gap={16}>
              {overview.relationships.map((relationship) => (
                <Column key={`${relationship.source}-${relationship.target}`} gap={6}>
                  <Row gap={8} align="center" wrap>
                    <Text weight="semibold">{relationship.source}</Text>
                    <Badge>{relationship.relationship}</Badge>
                    <Text weight="semibold">{relationship.target}</Text>
                  </Row>
                  <Text tone="muted">{relationship.reason}</Text>
                  <Text>{relationship.planningDecision}</Text>
                </Column>
              ))}
            </Column>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Sample Iteration Plan</CardHeader>
          <CardBody>
            <Column gap={16}>
              {overview.plan.map((item) => (
                <Column key={item.id} gap={8}>
                  <Row gap={8} align="center" wrap>
                    <Text weight="semibold">
                      {item.id} {item.title}
                    </Text>
                    <Badge>{item.priority}</Badge>
                    <Badge>{item.size}</Badge>
                    <Badge>{item.effort} effort</Badge>
                    <Badge tone={placementTone[item.placement]}>{item.placement}</Badge>
                  </Row>
                  <Text tone="muted">{item.summary}</Text>
                </Column>
              ))}
            </Column>
          </CardBody>
        </Card>
      </Column>
    </Container>
  );
}

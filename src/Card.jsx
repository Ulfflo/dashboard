import { Card, Text } from "@radix-ui/themes";

export default function Cards() {
  return (
    <>
      <Card variant="surface" className="card">
        <Text as="div" size="2" weight="bold" className="title">
          Total Revenue
        </Text>
        <Text as="div" color="gray" size="2" className="sum">
          $45,231.89
        </Text>
        <Text as="div" color="gray" size="2" className="number">
          +20.1% from last month
        </Text>
      </Card>

      <Card variant="classic" className="card">
        <Text as="div" size="2" weight="bold" className="title">
          Subscriptions
        </Text>
        <Text as="div" color="gray" size="2" className="sum">
          +2350
        </Text>
        <Text as="div" color="gray" size="2" className="number">
          +180.1% from last month
        </Text>
      </Card>
      <Card variant="surface" className="card">
        <Text as="div" size="2" weight="bold" className="title">
          Sales
        </Text>
        <Text as="div" color="gray" size="2" className="sum">
          +12,234
        </Text>
        <Text as="div" color="gray" size="2" className="number">
          +19% from last month
        </Text>
      </Card>

      <Card variant="classic" className="card">
        <Text as="div" size="2" weight="bold" className="title">
          Active Now
        </Text>
        <Text as="div" color="gray" size="2" className="sum">
          +573
        </Text>
        <Text as="div" color="gray" size="2" className="number">
          +201 since last hour
        </Text>
      </Card>
    </>
  );
}

import { Table } from "@radix-ui/themes";

export default function Tables() {
  return (
    <Table.Root className="table">
      <Table.Header>
        <Table.Row>
          <Table.Cell className="headline">Recent Sales</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell colSpan={2} className="subHeadline">
            You made 265 sales this month.
          </Table.Cell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        

        <Table.Row>
          <Table.Cell className="name">Olivia Martin</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="mail">olivia.martin@email.com</Table.Cell>

          <Table.Cell className="tableSum">+$1,999.00</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell className="name">Jackson Lee</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="mail">jackson.lee@email.com</Table.Cell>
          <Table.Cell className="tableSum">+$39.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="name">Isabella Nguyen</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="mail">isabella.nguyen@email.com</Table.Cell>
          <Table.Cell className="tableSum">+$299.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="name">William Kim</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="mail">will@email.com</Table.Cell>
          <Table.Cell className="tableSum">+$99.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="name">Sofia Davis</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell className="mail">sofia.davis@email.com</Table.Cell>
          <Table.Cell className="tableSum">+$39.00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
}
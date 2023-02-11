import { Table, Tooltip, Button } from "@nextui-org/react";
import { DeleteIcon } from "../DeleteIcon";
import { IconButton } from "../IconButton";

interface Cart {
  id: number;
  price: number;
  name: string;
  quantity: number;
}

const columns = [
  {
    key: "id",
    label: "Cód. Produto",
  },
  {
    key: "name",
    label: "Nome",
  },
  {
    key: "quantity",
    label: "Quantidade",
  },
  {
    key: "price",
    label: "Vlr. Unitário",
  },
  {
    key: "total",
    label: "Vlr. Total",
  },
  { name: "Ações", key: "actions" },
];

interface ListProps {
  cart: Cart[];
  removeItem: (id: number) => void;
}

function List({ cart, removeItem }: ListProps) {
  console.log("carttttttt", cart);
  return (
    <Table
      aria-label="Example table with dynamic content"
      css={{
        height: "auto",
        w: "100%",
      }}
    >
      <Table.Header columns={columns}>
        {(column) => (
          <Table.Column key={column.key}>{column.label}</Table.Column>
        )}
      </Table.Header>
      <Table.Body>
        {cart.map((item) => {
          return (
            <Table.Row key={item.id}>
              <Table.Cell>{item.id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.quantity}</Table.Cell>
              <Table.Cell>
                {item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Table.Cell>

              <Table.Cell>
                {(item.quantity * item.price).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Table.Cell>
              <Table.Cell>
                <Tooltip
                  content="Remover"
                  color="error"
                  onClick={() => removeItem(item.id)}
                >
                  <IconButton>
                    <DeleteIcon size={20} fill="#FF0080" />
                  </IconButton>
                </Tooltip>
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

export default List;

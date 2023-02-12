import type { NextPage } from "next";
import {
  Card,
  Text,
  Container,
  Row,
  Input,
  Button,
  Modal,
} from "@nextui-org/react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { KeyboardEvent, useState } from "react";
import { FormElement } from "@nextui-org/react/types/input";
import List from "../components/Table";

interface Cart {
  id: number;
  price: number;
  name: string;
  quantity: number;
}

const list = [
  {
    id: 1,
    price: 14.5,
    name: "Banana",
    quantity: 1,
  },
  {
    id: 2,
    price: 2.99,
    name: "Cookies",
    quantity: 1,
  },
  {
    id: 3,
    price: 1.74,
    name: "Leite",
    quantity: 1,
  },
  {
    id: 4,
    price: 3.5,
    name: "Limão",
    quantity: 1,
  },
  {
    id: 5,
    price: 8.99,
    name: "Frango",
    quantity: 1,
  },
  {
    id: 6,
    price: 13.25,
    name: "Alface",
    quantity: 1,
  },
  {
    id: 7,
    price: 1.1,
    name: "Pão",
    quantity: 1,
  },
  {
    id: 8,
    price: 3.2,
    name: "Sal",
    quantity: 1,
  },
  {
    id: 9,
    price: 2.47,
    name: "Açúcar",
    quantity: 1,
  },
  {
    id: 10,
    price: 0.58,
    name: "Maçã",
    quantity: 1,
  },
  {
    id: 11,
    price: 4.3,
    name: "Limão",
    quantity: 1,
  },
  {
    id: 12,
    price: 18.7,
    name: "Salmão",
    quantity: 1,
  },
  {
    id: 13,
    price: 17.99,
    name: "Tilápia",
    quantity: 1,
  },
  {
    id: 14,
    price: 13.99,
    name: "Café",
    quantity: 1,
  },
  {
    id: 15,
    price: 5.99,
    name: "Leite Condensado",
    quantity: 1,
  },
  {
    id: 16,
    price: 10.99,
    name: "Macarrão",
    quantity: 1,
  },
  {
    id: 17,
    price: 8.99,
    name: "Maionese",
    quantity: 1,
  },
  {
    id: 18,
    price: 6.99,
    name: "Chocolate",
    quantity: 1,
  },
  {
    id: 19,
    price: 4.99,
    name: "Atum",
    quantity: 1,
  },
  {
    id: 20,
    price: 17.39,
    name: "Arroz",
    quantity: 1,
  },
  {
    id: 21,
    price: 2.39,
    name: "Abacate",
    quantity: 1,
  },
  {
    id: 22,
    price: 3.99,
    name: "Milho",
    quantity: 1,
  },
  {
    id: 23,
    price: 7.99,
    name: "Vinagre",
    quantity: 1,
  },
  {
    id: 24,
    price: 7.99,
    name: "Salsicha",
    quantity: 1,
  },
  {
    id: 25,
    price: 1.99,
    name: "Aguá",
    quantity: 1,
  },
  {
    id: 26,
    price: 2.34,
    name: "Maracujá",
    quantity: 1,
  },
  {
    id: 27,
    price: 4.34,
    name: "Morango",
    quantity: 1,
  },
  {
    id: 28,
    price: 10.2,
    name: "Uva",
    quantity: 1,
  },
  {
    id: 29,
    price: 3.2,
    name: "Cerveja",
    quantity: 1,
  },
  {
    id: 30,
    price: 1.7,
    name: "Cerveja",
    quantity: 1,
  },
  {
    id: 31,
    price: 3.7,
    name: "Cotonete",
    quantity: 1,
  },
  {
    id: 32,
    price: 13.9,
    name: "Desodorante",
    quantity: 1,
  },
  {
    id: 33,
    price: 11.9,
    name: "Creme Dental",
    quantity: 1,
  },
  {
    id: 34,
    price: 11.9,
    name: "Presunto",
    quantity: 1,
  },
  {
    id: 35,
    price: 8.9,
    name: "Queijo",
    quantity: 1,
  },
  {
    id: 36,
    price: 8.9,
    name: "Queijo",
    quantity: 1,
  },
  {
    id: 37,
    price: 28.9,
    name: "Vinho",
    quantity: 1,
  },
  {
    id: 38,
    price: 1.9,
    name: "Cebola",
    quantity: 1,
  },
  {
    id: 38,
    price: 2.9,
    name: "Gelatina",
    quantity: 1,
  },
  {
    id: 39,
    price: 1.4,
    name: "Sabonete",
    quantity: 1,
  },
  {
    id: 40,
    price: 7.5,
    name: "Lâmpada",
    quantity: 1,
  },
  {
    id: 41,
    price: 5.9,
    name: "Chá",
    quantity: 1,
  },
  {
    id: 42,
    price: 5.9,
    name: "Álcool",
    quantity: 1,
  },
  {
    id: 43,
    price: 3.9,
    name: "Azeite",
    quantity: 1,
  },
  {
    id: 44,
    price: 6.4,
    name: "Vagem",
    quantity: 1,
  },
  {
    id: 45,
    price: 26.43,
    name: "Bife",
    quantity: 1,
  },
  {
    id: 46,
    price: 16.12,
    name: "Batata",
    quantity: 1,
  },
  {
    id: 47,
    price: 12.45,
    name: "Mortadela",
    quantity: 1,
  },
  {
    id: 48,
    price: 5.45,
    name: "Pão de Queijo",
    quantity: 1,
  },
  {
    id: 49,
    price: 11.2,
    name: "Carne Moída",
    quantity: 1,
  },
  {
    id: 50,
    price: 2.35,
    name: "Água Tônica",
    quantity: 1,
  },
];

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  const closeHandler = () => {
    setVisible(false);
  };

  const [cart, setCart] = useState<Cart[]>([]);
  const [item, setItem] = useState("");
  const [receivedInput, setReicivedInput] = useState("");
  const [received, setReicived] = useState(0);

  function removeItem(index: number) {
    let aux: Cart[] = [];
    cart.forEach((element) => {
      if (element.id !== index) {
        aux.push(element);
      }
    });
    setCart(aux);
  }
  function resetCalculator() {
    setCart([]);
    setItem("");
    setReicivedInput("");
    setReicived(0);
    closeHandler();
  }

  function handleKeyPress(event: KeyboardEvent<FormElement>) {
    const aux = cart;

    if (event.key === "Enter") {
      const found = aux.some((element) => element.id === Number(item));

      if (found) {
        aux.forEach((element) => {
          if (element.id === Number(item)) {
            element.quantity = element.quantity + 1;
          }
        });
      } else {
        list.forEach((element) => {
          if (element.id === Number(item)) {
            aux.push(element);
          }
        });
      }

      setCart(aux);
      setItem("");
    }
  }

  function handleAddItem() {
    const aux = cart;

    const found = aux.some((element) => element.id === Number(item));

    if (found) {
      aux.forEach((element) => {
        if (element.id === Number(item)) {
          element.quantity = element.quantity + 1;
        }
      });
    } else {
      list.forEach((element) => {
        if (element.id === Number(item)) {
          aux.push(element);
        }
      });
    }

    setCart(aux);
    setItem("");
  }

  var sum = cart.reduce(function (accumulator, object) {
    return accumulator + object.quantity * object.price;
  }, 0);
  var sumItens = cart.reduce(function (accumulator, object) {
    return accumulator + object.quantity;
  }, 0);

  return (
    <div className={styles.container}>
      <Head>
        <title>Calculadora de Troco</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Container xs>
          <Row justify="center" align="center">
            <Text
              h1
              color="white"
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
              weight="bold"
            >
              Calculadora de Troco
            </Text>
          </Row>

          <Card css={{ padding: "1rem" }}>
            <Card.Body css={{ padding: "2rem", gap: "1rem" }}>
              <Container
                gap={0}
                css={{
                  d: "flex",
                  width: "100%",
                  flex: 1,

                  justifyContent: "space-between",
                }}
              >
                <Input
                  width="68%"
                  clearable
                  underlined
                  labelPlaceholder="Digite o código do produto"
                  id="one"
                  value={item}
                  onChange={(e) => {
                    setItem(e.target.value);
                  }}
                  onKeyPress={(event) => {
                    handleKeyPress(event);
                  }}
                />
                <Button
                  auto
                  color="secondary"
                  shadow
                  onPress={() => {
                    handleAddItem();
                  }}
                >
                  REGISTRAR
                </Button>
              </Container>
              {cart.length > 0 && <List cart={cart} removeItem={removeItem} />}
              <Card>
                <Card.Body css={{ padding: "1rem", gap: 4 }}>
                  <Container
                    css={{
                      justifyContent: "space-between",
                      d: "flex",
                      w: "100%",
                    }}
                  >
                    <div>
                      <Text css={{ m: 0 }}>
                        <strong>ITENS: </strong> {sumItens}
                      </Text>
                      <Text css={{ m: 0 }}>
                        <strong>SUBTOTAL: </strong>
                        {sum.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </Text>
                    </div>

                    <div>
                      {cart.length > 0 && (
                        <Button
                          auto
                          color="secondary"
                          shadow
                          onPress={() => setVisible(true)}
                        >
                          PAGAR
                        </Button>
                      )}
                      <Modal
                        closeButton
                        blur
                        aria-labelledby="modal-title"
                        open={visible}
                        onClose={closeHandler}
                      >
                        <Modal.Header>
                          <Text id="modal-title" size={18}>
                            CALCULAR TROCO
                          </Text>
                        </Modal.Header>
                        <Modal.Body>
                          <Input
                            step={0.2}
                            onChange={(e) => {
                              setReicivedInput(e.target.value);
                            }}
                            fullWidth
                            size="lg"
                            label="Valor á receber"
                            placeholder="00.00"
                            type="number"
                          />
                          <Button
                            auto
                            color="secondary"
                            shadow
                            onPress={() => {
                              setReicived(Number(receivedInput));
                            }}
                          >
                            PAGAR
                          </Button>
                          <Text css={{ m: 0 }}>
                            <strong>SUBTOTAL: </strong>
                            {sum.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </Text>
                          <Text css={{ m: 0 }}>
                            <strong>TOTAL PAGO: </strong>
                            {received.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </Text>
                          {received - sum > 0 && (
                            <Text css={{ m: 0 }}>
                              <strong>TROCO: </strong>
                              {(received - sum).toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </Text>
                          )}
                          {received > 0 &&
                            Number(receivedInput) > 0 &&
                            sum - received > 0 && (
                              <Text css={{ m: 0 }} color="error">
                                <strong>PAGAMENTO INCOMPLETO </strong>
                              </Text>
                            )}
                        </Modal.Body>
                        <Modal.Footer>
                          <Button
                            auto
                            flat
                            color="warning"
                            onPress={closeHandler}
                          >
                            VOLTAR
                          </Button>
                          <Button
                            auto
                            flat
                            color="error"
                            onPress={resetCalculator}
                          >
                            TERMINAR
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </Container>
                </Card.Body>
              </Card>
            </Card.Body>
          </Card>
        </Container>
      </main>
    </div>
  );
};

export default Home;

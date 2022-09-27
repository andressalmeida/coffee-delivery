import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { SelectedCoffeeCard } from "./components/SelectedCoffeeCard";
import { AddreesAndPaymentContainer, CheckoutContainer, ConfirmButton, DeliveryContainer, OrderForm, PaymentButtons, PaymentContainer, SelectedCoffees, TableContainer, TextWithIcon } from "./styles";

export function Checkout() {
    return (
        <CheckoutContainer className="container">
            <AddreesAndPaymentContainer>
                <h2>Complete seu pedido</h2>

                <OrderForm action="">
                    <TextWithIcon>
                        <i>
                            <MapPinLine size={22} color="#C47F17" />
                        </i>
                        <div>
                            <h3>Endereço de Entrega</h3>
                            <p>Informe o endereço onde deseja receber seu pedido</p>
                        </div>
                    </TextWithIcon>

                    <DeliveryContainer>
                        <input type="text" placeholder="CEP" className="mInput" />
                        <input type="text" placeholder="Rua" />
                        <div>
                            <input type="text" placeholder="Número" className="mInput" />
                            <input type="text" id="complement" placeholder="Complemento" />
                            <label htmlFor="complement">Opcional</label>
                        </div>
                        <div>
                            <input type="text" placeholder="Bairro" className="mInput" />
                            <input type="text" placeholder="Cidade" />
                            <input type="text" placeholder="UF" className="sInput" />
                        </div>
                    </DeliveryContainer>
                </OrderForm>


                <PaymentContainer>

                    <TextWithIcon>
                        <i>
                        <CurrencyDollar size={22} color="#8047F8" />
                        </i>
                            <div>
                                <h3>Pagamento</h3>
                                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            </div>
                    </TextWithIcon>

                        <PaymentButtons>
                            <button>
                            <CreditCard size={16} color="#8047F8" />
                                <span>CARTÃO DE CRÉDITO</span>
                            </button>
                            <button>
                            <Bank size={16} color="#8047F8" />
                                <span>CARTÃO DE DÉBITO</span>
                            </button>
                            <button>
                            <Money size={16} color="#8047F8" />
                                <span>DINHEIRO</span>
                            </button>
                        </PaymentButtons>
                    </PaymentContainer>
            </AddreesAndPaymentContainer>

            <div>
                <h2>Cafés selecionados</h2>

                <SelectedCoffees>
                    <ul>
                        <li>
                            <SelectedCoffeeCard />
                        </li>

                        <li>
                            <SelectedCoffeeCard />
                        </li>
                        
                    </ul>

                    <div>
                        <TableContainer>
                            <tr>
                                <th>Total de Itens</th>
                                <td>R$47,50</td>
                            </tr>
                            <tr>
                                <th>Entrega</th>
                                <td>R$3,50</td>
                            </tr>
                            <tr >
                                <th className="total">Total</th>
                                <td className="total">R$50,00</td>
                            </tr>
                        </TableContainer>
                        <ConfirmButton>CONFIRMAR PEDIDO</ConfirmButton>
                    </div>
                </SelectedCoffees>
            </div>
        </CheckoutContainer>
    )
}
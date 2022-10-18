import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { SelectedCoffeeCard } from "./components/SelectedCoffeeCard";
import { AddreesAndPaymentContainer, CheckoutContainer, ConfirmButton, DeliveryContainer, OrderForm, PaymentButtons, PaymentContainer, SelectedCoffees, TableContainer, TextWithIcon } from "./styles";

const deliveryPrice = 3.5

export function Checkout() {
    const {cartItems, cartItemsTotal, totalItems} = useContext(CartContext)

    const cartTotal = deliveryPrice + cartItemsTotal
    const deliveryPriceFormatted = deliveryPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2})
    const cartTotalFormated = cartTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})
    const cartItemsTotalFormated = cartItemsTotal.toLocaleString('pt-BR', {minimumFractionDigits: 2})
    

    
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
                    {cartItems.map(item => (
                        <SelectedCoffeeCard key={item.id} coffee={item}/>
                    ))}  
                    </ul>

                    <div>
                        <TableContainer>
                            <tbody>
                                <tr>
                                    <th>Total de Itens</th>
                                    <td>R$ {cartItemsTotalFormated}</td>
                                </tr>
                                <tr>
                                    <th>Entrega</th>
                                    <td>R$ {totalItems >= 1 ? deliveryPriceFormatted : '0,00'} </td>
                                </tr>
                                <tr >
                                    <th className="total">Total</th>
                                    <td className="total">R$ {totalItems >= 1 ? cartTotalFormated : '0,00'}</td>
                                </tr>
                            </tbody>
                        </TableContainer>
                        <ConfirmButton disabled={totalItems <= 0}>CONFIRMAR PEDIDO</ConfirmButton>
                    </div>
                </SelectedCoffees>
            </div>
        </CheckoutContainer>
    )
}
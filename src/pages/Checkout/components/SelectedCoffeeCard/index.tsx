import { Trash } from 'phosphor-react'
import { useContext } from 'react'
import { CountInput } from '../../../../components/CountInput'
import { CartContext, CartItem } from '../../../../contexts/CartContext'
import { CountAndTrashContainer, SelectedCoffeeCardContainer } from './styles'


interface SelectedCoffeeCartProps {
    coffee: CartItem
}

export function SelectedCoffeeCard({ coffee }: SelectedCoffeeCartProps) {

    const totalPrice = coffee.price * coffee.quantity
    const formattedPrice = totalPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2})
    const { changeItemQuantity, removeCartItem } = useContext(CartContext)
  
    function handleIncrease() {
        changeItemQuantity(coffee.id, 'increase') 
            
    }

    function handleDecrease() {
        changeItemQuantity(coffee.id, 'decrease') 
    }

    function handleRemove() {
        removeCartItem(coffee.id)
    }

        return (
            <SelectedCoffeeCardContainer>
                <img src={`/coffees/${coffee.image}`} alt="" />
                <div>
                    <h3>{coffee.name}</h3>
                    <CountAndTrashContainer>
                        <CountInput
                        quantity={coffee.quantity} 
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        />
                        <button>
                            <Trash size={16} color="#8047F8" />
                            <span onClick={handleRemove}>REMOVER</span>
                        </button>
                    </CountAndTrashContainer>
                </div>
                <span>R$ {formattedPrice}</span>
            </SelectedCoffeeCardContainer>
        )
    }

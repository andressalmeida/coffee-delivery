import { useContext, useState } from 'react';
import { ShoppingCartSimple } from 'phosphor-react'
import { CartButton, CardFooter, CoffeeCardContainer, Tags } from './styles'
import { CountInput } from '../../../../components/CountInput'
import { CartContext } from '../../../../contexts/CartContext';


export interface Coffee {
    id: number,
    image: string;
    tags: string[];
    name: string,
    description: string;
    price: number,

}

interface CoffeeProps {
    coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeProps){
    const { addCoffeeToCart } = useContext(CartContext)
    const formattedPrice = coffee.price.toLocaleString('pt-BR', {minimumFractionDigits: 2})

    const [quantity, setQuantity ] = useState(1);

    function handleAddCoffee() {
        const selectedCoffee = {
            ...coffee,
            quantity,
        }
        addCoffeeToCart(selectedCoffee)
    }


    function increaseOneByOne() {
            setQuantity(state => state + 1)      
    }

    function decreaseOneByOne() {
        if(quantity >= 2) {
            setQuantity(state => state - 1)   
        }  
}
    
    return (
        <CoffeeCardContainer>
            <img src={`/coffees/${coffee.image}`} alt="" />
            <Tags>
               {coffee.tags.map(tag => (
                <span key={`${coffee.id}${tag}`}>{tag}</span>
               ))}
            </Tags>

            <h2>{coffee.name}</h2>
            <p>{coffee.description}</p>
            <CardFooter>
                <div>
                    <span>R$</span>
                    <h3>{formattedPrice}</h3>
                </div>

                <CountInput 
                    quantity={quantity}
                    onIncrease={increaseOneByOne}
                    onDecrease={decreaseOneByOne}
                />
                
                <CartButton onClick={handleAddCoffee}>
                    <ShoppingCartSimple size={22} color="#fAfAfA" weight="fill" />
                </CartButton>
            </CardFooter>
        </CoffeeCardContainer>
    )
}



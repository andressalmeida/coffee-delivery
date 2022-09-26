import { ShoppingCartSimple } from 'phosphor-react'
import { CartButton, CardFooter, CoffeeCardContainer, Tags } from './styles'
import tradicional from '../../../../assets/tradicional.png' 
import { CountInput } from '../../../../components/CountInput'

export function CoffeeCard(){
    return (
        <CoffeeCardContainer>
            <img src={tradicional} alt="" />
            <Tags>
                <span>Tradicional</span>
                <span>Com leite</span>
            </Tags>

            <h2>Expresso Tradicional</h2>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <CardFooter>
                <div>
                    <span>R$</span>
                    <h3>9,90</h3>
                </div>

                <CountInput />
                
                <CartButton>
                    <ShoppingCartSimple size={22} color="#fAfAfA" weight="fill" />
                </CartButton>
            </CardFooter>
        </CoffeeCardContainer>
    )
}
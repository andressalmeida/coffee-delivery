import { Trash } from 'phosphor-react'
import tradicional from '../../../../assets/tradicional.png' 
import { CountInput } from '../../../../components/CountInput'
import { CountAndTrashContainer, SelectedCoffeeCardContainer } from './styles'

export function SelectedCoffeeCard() {
    return (
        <SelectedCoffeeCardContainer>
            <img src={tradicional} alt="" />
            <div>
                <h3>Expresso Tradicional</h3>
                <CountAndTrashContainer>
                    <CountInput />
                    <button>
                    <Trash size={16} color="#8047F8" />
                        <span>REMOVER</span>
                    </button>
                </CountAndTrashContainer>
            </div>
            <span>R$ 9,90</span>
        </SelectedCoffeeCardContainer>
    )
}
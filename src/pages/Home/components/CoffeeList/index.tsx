import { CoffeeListContainer, ListOfCoffee } from './styles'
import { CoffeeCard } from '../CoffeeCard'

export function CoffeeList() {
    return (
        <CoffeeListContainer className='container'>
            <h1>Nossos cafés</h1>
        
            <ListOfCoffee>
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
                <CoffeeCard />
            </ListOfCoffee>
        </CoffeeListContainer>
    )
}
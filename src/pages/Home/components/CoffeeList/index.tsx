import { CoffeeListContainer, ListOfCoffee } from './styles'
import { CoffeeCard } from '../CoffeeCard'
import { coffees } from '../../../../database/AllCoffees'

export function CoffeeList() {
    return (
        <CoffeeListContainer className='container'>
            <h1>Nossos cafés</h1>
        
            <ListOfCoffee>
                {coffees.map((coffee) =>  (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </ListOfCoffee>
        </CoffeeListContainer>
    )
}
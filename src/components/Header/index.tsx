import Logo from '/Logo.svg'
import { HeaderContainer } from './styled'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export function Header() {
    const {totalItems} = useContext(CartContext)

    return (
        <HeaderContainer>
            <div className='container'>
                <NavLink to='/'><img src={Logo} alt="" /></NavLink>
                <nav>
                    <span>
                        <MapPin size={22} color="#8047F8" weight="fill" />
                        São Paulo, SP
                    </span>
                   
                        <NavLink to='/checkout'>
                            <button>
                                <ShoppingCart size={22} color="#C47F17" weight="fill" />
                                {totalItems != 0 && <span className='countActive'>{totalItems}</span>}
                            </button>
                        </NavLink>
                 
                </nav>
            </div>
        </HeaderContainer>
    )
}
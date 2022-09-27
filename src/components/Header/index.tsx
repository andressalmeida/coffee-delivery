import Logo from '/Logo.svg'
import { HeaderContainer } from './styled'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
    return (
        <HeaderContainer>
            <div className='container'>
                <img src={Logo} alt="" />
                <nav>
                    <span>
                        <MapPin size={22} color="#8047F8" weight="fill" />
                        São Paulo, SP
                    </span>
                    <form action="/checkout">
                        <button type='submit'>
                            <ShoppingCart size={22} color="#C47F17" weight="fill" />
                            <span>3</span>
                        </button>
                    </form>
                </nav>
            </div>
        </HeaderContainer>
    )
}
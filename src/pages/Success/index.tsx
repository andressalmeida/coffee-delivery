import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import successIlustration from '../../assets/Illustration.png'
import { BorderGradient, DeliveryConfirmation, IconStyle, SuccessContainer } from './styles'

export function Success() {
    return (

        
        <SuccessContainer className='container'>
            <h1>Uhu! Pedido Confirmado</h1>
            <p>Agora é só aguardar que logo o café chegará até você</p>

            <main>
                <BorderGradient>
                    <DeliveryConfirmation>
                        <div>
                            <IconStyle backgroundColor='purple'>
                                <MapPin size={16} weight='fill'/>
                            </IconStyle>
                            <p>
                                Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br/>
                                Farrapos - Porto Alegre, RS
                            </p>
                        </div>

                        <div>
                            <IconStyle backgroundColor='yellow'>
                                <Timer size={16} weight='fill'/>
                            </IconStyle>
                            <p>
                                Previsão de entrega <br/> 
                                <strong>20 min - 30 min</strong> 
                            </p>
                        </div>
                    
                        <div>
                            <IconStyle backgroundColor='yellowD'>
                                <CurrencyDollar size={16} weight='fill'/>
                            </IconStyle>
                            <p>
                                Pagamento na entrega <br/> 
                                <strong>Cartão de Crédito</strong>
                            </p>
                        </div>
                    </DeliveryConfirmation>
                </BorderGradient>

                <img src={successIlustration} alt="" />
            </main>
        </SuccessContainer>
    )
}
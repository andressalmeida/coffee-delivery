import styled from "styled-components";


export const SuccessContainer = styled.div`
margin-top: 5rem;
width: 100%;

> h1 {
color: ${props => props.theme['yellow-dark']};
font-size: 2rem;
line-height: 2.6rem;
}

> main {
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
margin-top: 2rem;
}
`

export const DeliveryConfirmation = styled.div`
width: 100%;
max-width: 33rem;
background: ${props => props.theme['background']};
display: flex;
flex-direction: column;
border-radius: 6px 36px;
padding: 2.5rem;
gap: 2rem;

> div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.75rem;
}
`

export const BorderGradient = styled.div`
width: 100%;
max-width: 33rem;
position: relative;
background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
padding: 1px;
border-radius: 6px 36px;
`

const ICON_BACKGROUND = {
    yellowD: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple',  
} as const

interface IconProps {
    backgroundColor: keyof typeof ICON_BACKGROUND;
}

export const IconStyle = styled.i<IconProps>`
    padding: 0.5rem;
    border-radius: 1000px;
    display: flex;
    width: 2rem;
    color: ${props => props.theme['background']};
    background: ${(props) => props.theme[ICON_BACKGROUND[props.backgroundColor]]};
`
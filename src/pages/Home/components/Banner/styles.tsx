import styled from "styled-components";
import backgroundImage from "../../../../assets/Background.png"

export const BackgroundContainer = styled.div`
width: 100%;
height: 34rem;
background-image: url(${backgroundImage}) !important;
background-size: cover;
background-repeat: no-repeat;
display: flex;
align-items: center;
justify-content: center;
`

export const BannerContainer = styled.header`
display: flex;
align-items: center;
justify-content: center;


section {
    width: 100%;
    max-width: 36rem;
    margin-right: 3.5rem;
}

h1 {
    font-size: 3rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    line-height: 130%;
    color: ${props => props.theme['base-title']}
}

p {
    font-size: 1.25rem;
    color: ${props => props.theme['base-title']};
    line-height: 130%;
    margin-bottom: 2.9rem;
}

div {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    margin-bottom: 6rem;
}

span {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.5rem;
    font-size: 1rem;
}

`

const ICON_BACKGROUND = {
    yellowD: 'yellow-dark',
    yellow: 'yellow',
    purple: 'purple',  
    grayD: 'base-text'
} as const

interface IconProps {
    backgroundColor: keyof typeof ICON_BACKGROUND;
}

export const IconStyle = styled.i<IconProps>`
    padding: 0.5rem;
    border-radius: 1000px;
    display: flex;
    width: 2rem;
    background: ${(props) => props.theme[ICON_BACKGROUND[props.backgroundColor]]};
`

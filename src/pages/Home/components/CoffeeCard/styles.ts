import styled from "styled-components";


export const CoffeeCardContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
justify-content: center;
background: ${(props) => props.theme["base-card"]};
width: 16rem;
border-radius: 6px 36px;
padding: 1.25rem;
padding-top: 0;

img {
 margin-top: -1.25rem;
}

h2 {
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
}

p {
    font-size: 0.875rem;
    color: ${props => props.theme['base-label']}
}

`

export const Tags = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
gap: 4px;
margin-top: 1rem;
margin-bottom: 1.25rem;
flex-wrap: wrap;

span {
    background: ${props => props.theme['yellow-light']};
    color: ${props => props.theme['yellow-dark']};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
}
`

export const CardFooter = styled.div`

width: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 2rem;

 div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.20rem;

    h3 {
        font-size: 1.5rem;
        font-weight: 800;
        font-family: 'Baloo 2';
    }

    span {
        font-size: 0.875rem;
    }
 }
`

export const CartButton = styled.button`
background: ${props => props.theme['purple-dark']};
border: none;
padding: 0.5rem;
border-radius: 6px;
display: flex;
align-items: center;
justify-content: center;


:hover {
    background: ${props => props.theme['purple']};
}
`
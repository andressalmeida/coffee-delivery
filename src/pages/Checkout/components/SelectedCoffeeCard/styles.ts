import styled from "styled-components";

export const SelectedCoffeeCardContainer = styled.div`
width: 100%;
display: flex;
align-items: initial;
padding-bottom: 1.5rem;
padding-top: 1.5rem;
border-bottom: 1px solid ${props => props.theme['base-button']};

img {
    width: 4rem;
    height: 4rem;
    margin-right: 1.25rem;
  
}

h3 {
    font-size: 1rem;
    color: ${props => props.theme['base-subtitle']};
    font-weight: 400;
}

> span {
    font-size: 1rem;
    font-weight: 700;
    color: ${props => props.theme['base-text']};
    margin-left: 3.125rem;
    margin-top: 0;
    padding-top: 0;   
}
`

export const CountAndTrashContainer = styled.div`
display: flex;
height: 2rem;
margin-top: 0.5rem;

> button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    padding: 0.5rem;
    background: ${props => props.theme['base-button']};
    color: ${props => props.theme['base-text']};
    font-size: 0.75rem;
    border-radius: 6px;
    border: none;
    transition: 0.4s;

    :hover {
        background: ${props => props.theme['base-hover']};
    }
}

`
import styled from "styled-components";

export const CoffeeListContainer = styled.main`
display: flex;
justify-content: center;
flex-direction: column;
width: 100%;
margin-top: 2rem;

h1 {
    font-weight: 800;
    color: ${props => props.theme['base-subtitle']}
}
`

export const ListOfCoffee = styled.div`

display: flex;
gap: 2rem;
justify-content: flex-start;
flex-wrap: wrap;
align-items: center;
margin-top: 3.375rem;
`


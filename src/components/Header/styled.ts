import styled from 'styled-components'

export const HeaderContainer = styled.header`
width: 100%;
height: 6.5rem;
display: flex;
justify-content: center;
align-items: center;

div {
display: flex;
align-items: center;
justify-content: space-between;
}

nav {
    display: flex;
    gap: 0.5rem;
}

span {
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    padding: 0.5rem;
    border-radius: 6px;
    gap: 0.25rem;
    display: flex;
    align-items: center;
}

button {
    background: ${(props) => props.theme['yellow-light']};
    padding: 0.5rem;
    border-radius: 6px;
    border: none;
    cursor: pointer;
}
`

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
    max-height: 38px;
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
    max-height: 38px;
    border: none;
    cursor: pointer;

    > span {
        display: none;
    }

    .countActive {
        position: absolute;
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['background']};
        font-size: 0.75rem;
        font-weight: 700;
        border: none;
        border-radius: 50%;
        display: flex;
        justify-content: center;

        padding: 0;
        width: 1.25rem;
        height: 1.25rem;
        margin-top: -42px;
        margin-left: 15px;
    }
}
`

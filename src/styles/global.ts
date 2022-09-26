import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }


  body {
    background: ${(props) => props.theme['background']};
    color: ${(props) => props.theme['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, span, p {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;

    h1, h2 {
        font-family: 'Baloo 2', cursive;

        h2 {
          font-size: 1.25rem;
          color: ${props => props.theme['base-subtitle']}
        }
    }

  }

  button {
    cursor: pointer;
  }
`

import styled from "styled-components";

export const CountInputContainer = styled.div`
background: ${(props) => props.theme['base-button']};
display: flex;
padding: 0.5rem;
border-radius: 6px;
width: 4.5rem;
height: 100%;
gap: 4px;
margin-right: 0.5rem;


input {
    
    background: none;
    border: none;
    text-align: center;
    width: 100%;

    font-size: 1rem;
    color: ${(props) => props.theme['base-title']};
    -moz-appearance: textfield;
   appearance: textfield;
   
   &::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }
   
}

button {
    color: ${(props) => props.theme['purple']};
    border: none;
    background: none;
    width: 0.875rem;
    border: none;

    :hover {
        color: ${(props) => props.theme['purple-dark']};
    }
}

.minus {
        :hover {
            color: ${(props) => props.theme['white']};
        }
    }

`
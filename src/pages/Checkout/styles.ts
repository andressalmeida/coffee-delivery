import styled from "styled-components";

export const CheckoutContainer = styled.main`
display: flex;
justify-content: center;
gap: 2rem;

`
export const AddreesAndPaymentContainer = styled.div`
width: 100%;
max-width: 40rem;
`

export const OrderForm = styled.form`
background: ${props => props.theme['base-card']};
border-radius: 6px;
padding: 2.5rem;
display: flex;
flex-direction: column;

`

export const DeliveryContainer = styled.section`

    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;

    input {
        padding: 0.75rem;
        border: 1px solid ${props => props.theme['base-button']};
        background: ${props => props.theme['base-input']};
        color: ${props => props.theme['base-text']};
        border-radius: 4px;
        font-size: 0.875rem;
        width: 100%;
    }

    div {
        display: flex;
        flex: 1;
        width: 100%;
        gap: 0.75rem;
    }

    .mInput {
        width: 12.5rem;
    }

    .sInput {
        width: 3.75rem;
    }

    label {
        display: flex;
        align-items: center;
        font-size: 0.75rem;
        font-style: italic;
        color: ${props => props.theme['base-label']};
        top: 0.813rem;
    }

`

export const PaymentContainer = styled.section`
background: ${props => props.theme['base-card']};
border-radius: 6px;
padding: 2.5rem;
margin-top: 0.75rem;
`

export const TextWithIcon = styled.div`
display: flex;
gap: 0.5rem;
margin-bottom: 2rem;

h3 {
    font-size: 1rem;
    color: ${props => props.theme['base-subtitle']};
    font-weight: 400;
    line-height: 20px;
}

p {
    font-size: 0.875rem;
    color: ${props => props.theme['base-text']};
    line-height: 18px;
}
`

export const PaymentButtons = styled.div`
display: flex;
gap: 0.75rem;
align-items: center;
justify-content: space-between;

button {
    display: flex;
    height: 3.1rem;
    border-radius: 6px;
    background: ${props => props.theme['base-button']};
    border: none;
    padding: 1rem;
    flex: 1;
    text-align: start;
    align-items: center;
    color: ${props => props.theme['base-text']};

    :hover {
        background: ${props => props.theme['base-hover']};
    }
 
}

svg {
    margin-right: 0.75rem; 
    vertical-align: middle;
}

span {
    vertical-align: middle;
    font-size: 0.75rem;
}

`

export const SelectedCoffees = styled.section`

background: ${props => props.theme['base-card']};
border-radius: 6px 36px;
padding: 2.5rem;
gap: 24px;
display: flex;
flex-direction: column;
width: 100%;
max-width: 28rem;

ul {
    list-style: none;
}
`

export const ConfirmButton = styled.button`
    width: 100%;
    min-height: 46px;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;
    gap: 0.25rem;
    background: ${props => props.theme['yellow']};
    color: ${props => props.theme['white']};
    font-weight: 700;
    font-size: 0.875rem;
    border: none;
    margin-top: 1.5rem;
    
    :hover {
        background: ${props => props.theme['yellow-dark']};
    }
`

export const TableContainer = styled.table`
width: 100%;
line-height: 1.625rem;
th { 
    text-align: left;
    font-size: 0.875rem;
color: ${props => props.theme['base-text']};
font-weight: 400;
}

td {
    text-align: right;
    font-size: 0.875rem;
color: ${props => props.theme['base-text']};
font-weight: 400;
}

.total {
    font-size: 1.25rem;
    font-weight: 700;
}

`





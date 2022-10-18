import { Minus, Plus } from "phosphor-react";
import { useState } from "react";
import { CountInputContainer } from "./styles";


interface CountInputProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
}

export function CountInput({quantity, onIncrease, onDecrease}: CountInputProps) {

    return (
        <CountInputContainer>
            <button disabled={quantity <= 1} onClick={onDecrease}>
            <Minus size={14} weight="fill" />
            </button>
            <input type="number" readOnly value={quantity}/>
            <button onClick={onIncrease}>
            <Plus size={14} weight="fill" />
            </button>
        </CountInputContainer>
    )
}
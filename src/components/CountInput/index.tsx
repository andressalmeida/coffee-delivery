import { Minus, Plus } from "phosphor-react";
import { CountInputContainer } from "./styles";

export function CountInput() {
    return (
        <CountInputContainer>
            <button>
            <Minus size={14} color="#8047F8" weight="fill" />
            </button>
            <input type="number" readOnly value="1"/>
            <button>
            <Plus size={14} color="#8047F8" weight="fill" />
            </button>
        </CountInputContainer>
    )
}
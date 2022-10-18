import {createContext, ReactNode, useEffect, useState} from 'react'
import { Coffee } from '../pages/Home/components/CoffeeCard';
import { produce } from 'immer'


export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType {
    cartItems: CartItem[];
    addCoffeeToCart: (coffee: CartItem) => void;
    totalItems: number;
    changeItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void;
    removeCartItem: (cartItemId: number) => void;
    cartItemsTotal: number;
}

interface CartContextProviderProps {
    children: ReactNode
}

const COFFEE_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({
    children,
}: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_STORAGE_KEY)
        if (storedCartItems) {
            return JSON.parse(storedCartItems)
        }
        return []
    })

    const totalItems = cartItems.length

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addCoffeeToCart(coffee: CartItem) {
        const coffeeExistisInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

        const newCart = produce(cartItems, (draft => {
            if(coffeeExistisInCart < 0) {
                draft.push(coffee)
            } else {
                draft[coffeeExistisInCart].quantity += coffee.quantity
            }
        }))

        setCartItems(newCart)
    }

    function changeItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
        const newCart = produce(cartItems, (draft) => {
        const coffeeExistis = cartItems.findIndex(cartItem => cartItem.id === cartItemId);
        
        if(coffeeExistis >= 0) {
            const item = draft[coffeeExistis];
            draft[coffeeExistis].quantity = 
                type === 'increase' ? item.quantity +1 : item.quantity -1;
        }
        });

        setCartItems(newCart);
    }

    function removeCartItem(cartItemId: number) {
        const filteredCart = cartItems.filter(cartItem => cartItem.id !== cartItemId);

        setCartItems(filteredCart);
    }

    useEffect(() => {
        localStorage.setItem(COFFEE_STORAGE_KEY, JSON.stringify(cartItems));
    }, [cartItems])

    return (
        <CartContext.Provider value={{ cartItems, totalItems, addCoffeeToCart, changeItemQuantity, removeCartItem, cartItemsTotal }}>
            {children}
        </CartContext.Provider>
    );
}

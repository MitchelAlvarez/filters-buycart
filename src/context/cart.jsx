import React from "react";
import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            product
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))


    }

    const removeOneProduct = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)
        if (productInCartIndex >= 0) {
            product
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity -= 1
            return setCart(newCart)
        }

        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 0
            }
        ]))

    }

    const clearCart = () => {
        setCart([])
    }
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            removeOneProduct,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}
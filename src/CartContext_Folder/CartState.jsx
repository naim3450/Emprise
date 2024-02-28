import React from 'react'
import CartContext from './CartContext'

const CartState = ({ children }) => {
    const state = {
        name: "Naim"
    }
    return (
        <CartContext.Provider value={state}>
            {children}
        </CartContext.Provider>
    )
}

export default CartState
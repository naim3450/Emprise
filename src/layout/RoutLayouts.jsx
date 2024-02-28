import React from 'react'
import Navber from './Navber'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer'
import ProductContext from '../Context/ProductContext'
import ProductState from '../Context/ProductState'
import CartState from '../CartContext_Folder/CartState'

const RoutLayouts = () => {
    return (
        <ProductState>
            <CartState>
                <Navber />
                <Outlet />
                <Footer />
            </CartState>
        </ProductState>
    )
}

export default RoutLayouts
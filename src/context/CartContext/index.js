import React, { createContext, useState, useEffect } from 'react'
import { getCartUrl, nonceUrl } from '@/utils/urls'
import { handleServerSideProps } from '@/utils/handleServerSideData'

const CartContext = createContext()

export const CartDataProvider = ({ children }) => {
    const [cartData, setCartData] = useState({})

    useEffect(() => {
        const getCartData = async () => {
            const { data, error, headers } = await handleServerSideProps(getCartUrl);
            setCartData(data)
        }
        getCartData()
    }, [])

    return (
        <CartContext.Provider value={cartData}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
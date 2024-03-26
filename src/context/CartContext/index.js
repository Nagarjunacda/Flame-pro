import React, { createContext, useState, useEffect, useContext } from 'react'
import { getCartUrl, nonceUrl } from '@/utils/urls'
import { handleServerSideProps } from '@/utils/handleServerSideData'

const CartContext = createContext()

export const CartDataProvider = ({ children }) => {
    const [cartData, setCartData] = useState({})
    const [triggerUpdate, setTriggerUpdate] = useState(false)

    useEffect(() => {
        const getCartData = async () => {
            const { data, error, headers } = await handleServerSideProps(getCartUrl);
            setCartData(data)
        }
        getCartData();
        setTriggerUpdate(false)
    }, [triggerUpdate])

    return (
        <CartContext.Provider value={{ cartData, setTriggerUpdate }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCartData = () => {
    return useContext(CartContext);
}
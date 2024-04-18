import React, { createContext, useState, useEffect, useContext } from 'react'
import { getCartUrl, nonceUrl } from '@/utils/urls'
import { handleServerSideProps } from '@/utils/handleServerSideData'

const ProductCatContext = createContext()

export const ProductCatDataProvider = ({ children }) => {
    const [prductCatData, setProductCatData] = useState({})
    // const [triggerUpdate, setTriggerUpdate] = useState(false)

    // useEffect(() => {
    //     const getCartData = async () => {
    //         const { data, error, headers } = await handleServerSideProps(getCartUrl);
    //         setProductCatData(data)
    //     }
    //     getCartData();
    //     // setTriggerUpdate(false)
    // }, [])

    return (
        <ProductCatContext.Provider value={{ prductCatData, setProductCatData }}>
            {children}
        </ProductCatContext.Provider>
    )
}

export const useProductCatData = () => {
    return useContext(ProductCatContext);
}
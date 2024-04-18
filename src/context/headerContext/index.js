import React, { createContext, useState, useEffect, useContext } from 'react'
import { getCartUrl, nonceUrl } from '@/utils/urls'
import { handleServerSideProps } from '@/utils/handleServerSideData'
import { headerMenuUrl } from '@/utils/urls'

const HeaderContext = createContext()

export const HeaderDataProvider = ({ children }) => {
    const [headerConData, setHeaderConData] = useState({})
    // const [triggerUpdate, setTriggerUpdate] = useState(false)

    // useEffect(() => {
    //     // const getCartData = async () => {
    //     //     const { data, error, headers } = await handleServerSideProps(getCartUrl);
    //     //     setCartData(data)
    //     // }
    //     // getCartData();
    //     setHeaderConData({})
    // }, [])
    useEffect(() => {
        const getData = async () => {
            const { data, error } = await handleServerSideProps(headerMenuUrl);
            if (data) {
                setHeaderConData(data)
            }
        }
        getData()
    }, [])

    return (
        <HeaderContext.Provider value={{ headerConData, setHeaderConData }}>
            {children}
        </HeaderContext.Provider>
    )
}

export const useHeaderData = () => {
    return useContext(HeaderContext);
}
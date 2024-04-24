import React, { createContext, useState, useEffect, useContext } from 'react'
import { footerContextUrl } from '@/utils/urls'
import { handleServerSideProps } from '@/utils/handleServerSideData'

const FooterDataContext = createContext()

export const FooterContextDataProvider = ({ children }) => {
    const [footerContextData, setFooterContextData] = useState({})
    // const [triggerUpdate, setTriggerUpdate] = useState(false)

    useEffect(() => {
        const getCartData = async () => {
            const { data, error, headers } = await handleServerSideProps(footerContextUrl);
            setFooterContextData(data)
        }
        getCartData();
        // setTriggerUpdate(false)
    }, [])

    return (
        <FooterDataContext.Provider value={{ footerContextData, setFooterContextData }}>
            {children}
        </FooterDataContext.Provider>
    )
}

export const useFooterContextData = () => {
    return useContext(FooterDataContext);
}
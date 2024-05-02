import React, { createContext, useState, useEffect, useContext } from 'react'
import { getCartUrl, nonceUrl } from '@/utils/urls'
import { handleServerSideProps } from '@/utils/handleServerSideData'

const FireFightingContext = createContext()

export const FireFightingDataProvider = ({ children }) => {
    const [fireFightingProData, setFireFightingProData] = useState({})

    return (
        <FireFightingContext.Provider value={{ fireFightingProData, setFireFightingProData }}>
            {children}
        </FireFightingContext.Provider>
    )
}

export const useFireFightingData = () => {
    return useContext(FireFightingContext);
}
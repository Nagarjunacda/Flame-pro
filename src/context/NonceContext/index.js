import React, { createContext, useState, useEffect } from 'react'
import { nonceUrl } from '@/utils/urls'
import { handleServerSideProps } from '@/utils/handleServerSideData'

const NonceContext = createContext()

export const NonceProvider = ({ children }) => {
    const [nonce, setNonce] = useState('')

    useEffect(() => {
        const getNonce = async () => {
            const { data, error, headers } = await handleServerSideProps(nonceUrl);
            const nonce = data?.Nonce
            setNonce(nonce)
        }
        getNonce()
    }, [])

    return (
        <NonceContext.Provider value={nonce}>
            {children}
        </NonceContext.Provider>
    )
}

export default NonceContext
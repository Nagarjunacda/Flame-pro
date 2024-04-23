import React, { createContext, useState, useContext } from 'react'

const SpeakToPopupContext = createContext()

export const SpeakToPopupProvider = ({ children }) => {
    const [isSpeakPopupOpen, setIsSpeakPopupOpen] = useState(false);

    return (
        <SpeakToPopupContext.Provider value={{ isSpeakPopupOpen, setIsSpeakPopupOpen }}>
            {children}
        </SpeakToPopupContext.Provider>
    )
}

export const useSpeakToPopupState = () => {
    return useContext(SpeakToPopupContext);
}
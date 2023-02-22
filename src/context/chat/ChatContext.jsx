import React, { createContext } from "react";



export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    <ChatContext.Provider
    value={{
        meg:'hola mindo'
    }}
    >
        {children}
    </ChatContext.Provider>
}

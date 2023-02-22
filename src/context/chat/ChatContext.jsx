import React, { createContext } from "react";

const initialState = {
    uid:'',
    chatActivo:null,
    mensajes:[],
    users:[],
}


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

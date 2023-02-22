import React, { createContext, useReducer } from "react";
import { ChatReducer } from "./ChatReducer";

const initialState = {
    uid:'',
    chatActivo:null,
    mensajes:[],
    users:[],
}


export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {

const [chatState, dispatch] = useReducer(ChatReducer, initialState)

    return(<ChatContext.Provider
    value={{
        chatState,
        dispatch,
    }}
    >
        {children}
    </ChatContext.Provider>)
}

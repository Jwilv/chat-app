import React, { createContext, useContext, useEffect } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { useSocket } from '../hooks/useSocket';
import { ChatContext } from './chat/ChatContext';


export const SocketContext = createContext();


export const SocketProvider = ({ children }) => {

    const { socket, online, connectSocket, disconnectSocket } = useSocket('http://localhost:5050');

    const {dispatch} = useContext(ChatContext);

    const {auth} = useContext(AuthContext);

    useEffect( ()=>{
        if(auth.logged){
            connectSocket();
        }

    }, [auth]);

    useEffect( ()=>{
        if(!auth.logged){
            disconnectSocket();
        }

    }, [auth]);

    useEffect( ()=>{
        socket?.on('list-users', (users)=>{
            dispatch({
                type:'getUsers',
                payload:users,
            })
        })
    }, [socket]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            { children }
        </SocketContext.Provider>
    )
}
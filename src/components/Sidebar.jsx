import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext'
import { ChatContext } from '../context/chat/ChatContext'
import { SidebarChatItem } from './SidebarChatItem'

export const Sidebar = () => {

    const {auth} = useContext(AuthContext);
    const {uid} = auth;

    const {chatState} = useContext(ChatContext);
    const {users} = chatState

    return (
        <div className="inbox_chat">

            {
                users.filter( (user)=> user.id !== uid )
                .map( (user) => (
                    <SidebarChatItem 
                    key={ user.id }
                    user={user}
                    />
                ))
            }


            <div className="extra_space"></div>


        </div>

    )
}
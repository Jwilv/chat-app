import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'
import { SidebarChatItem } from './SidebarChatItem'

export const Sidebar = () => {

    const {chatState} = useContext(ChatContext);
    const {users} = chatState

    return (
        <div className="inbox_chat">

            {
                users.map( (user) => (
                    <SidebarChatItem 
                    key={ user.id }
                    user={user}
                    />
                ))
            }


            {/* <!-- Espacio extra para scroll --> */}
            <div className="extra_space"></div>


        </div>

    )
}
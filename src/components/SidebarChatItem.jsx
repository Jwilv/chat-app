import React, { useContext } from 'react'
import { ChatContext } from '../context/chat/ChatContext'

export const SidebarChatItem = ({user}) => {

    const { chatState, dispatch } = useContext(ChatContext);
    const {chatActivo} = chatState

    const setActive = ()=>{
        dispatch({
            type:'setActive',
            payload:user.id
        })
    }

    return (
        <div 
        className={`chat_list ${ (chatActivo === user.id) && 'active_chat' }`}
        onClick={setActive}
        
        >

            <div className="chat_people">
                <div className="chat_img"> 
                    <img src="https://p.kindpng.com/picc/s/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="sunil" />
                </div>
                <div className="chat_ib">
                    <h5>{user.name}</h5>
                    {
                        (user.online)
                        ? <span className="text-success">Online</span>
                        : <span className="text-danger">Offline</span>
                    }
                </div>
            </div>
        </div>
    )
}
import React from 'react'
import { hourMonth } from '../helpers/hourMonth'

export const IncomingMessage = ({message}) => {

    const date = hourMonth(message.createdAt)

    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                <img src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png" alt="sunil" />
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{message.message}</p>
                    <span className="time_date">{date}</span>
                </div>
            </div>
        </div>
    )
}
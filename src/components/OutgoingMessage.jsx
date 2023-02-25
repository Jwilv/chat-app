import React from 'react'
import { hourMonth } from '../helpers/hourMonth'

export const OutgoingMessage = ({message}) => {

    const date = hourMonth(message.createdAt)
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p>{message.message}</p>
                <span className="time_date">{date}</span>
            </div>
        </div>
    )
}
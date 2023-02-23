import React, { useContext } from 'react'
import { AuthContext } from '../auth/AuthContext';
import { SocketContext } from '../context/SocketContext';
import { useForm } from '../hooks/useForm'

export const SendMessage = () => {

    const {socket} = useContext(SocketContext);

    const {auth} = useContext(AuthContext);

    const { chatState, dispatch } = useContext(ChatContext);
    const {chatActivo} = chatState

    const initialState = {
        message:''
    }

    const [values, setValues, handleInputChanGet, reset] = useForm(initialState);

    const {message} = values;

    const handleSubmit = (event)=>{
        event.preventDefault();

        if(message.length === 0){ return; }

        socket.emit('personal-message',{
            de:auth.uid,
            para:chatActivo,
            message,
        })

        reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="type_msg row">
                <div className="input_msg_write col-sm-9">
                    <input 
                    type="text"
                    className="write_msg"
                    placeholder="Mensaje..."
                    name='message'
                    value={message}
                    onChange={handleInputChanGet}
                    />
                </div>
                <div className="col-sm-3 text-center">
                    <button className="msg_send_btn mt-3" type="submit">
                        enviar
                    </button>
                </div>
            </div>
        </form>
    )
}
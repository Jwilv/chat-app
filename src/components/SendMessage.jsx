import React from 'react'
import { useForm } from '../hooks/useForm'

export const SendMessage = () => {

    const initialState = {
        message:''
    }

    const [values, setValues, handleInputChanGet] = useForm(initialState);

    const {message} = values;

    const handleSubmit = (event)=>{
        event.preventDefault();
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
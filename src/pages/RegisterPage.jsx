import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';
import { useForm } from '../hooks/UseForm';


export const RegisterPage = () => {

    const { register } = useContext(AuthContext);

    const initialState = {
        name:'test4',
        email:'test4@gmail.com',
        password:'123456',
        confirmPassword:'123456',
    }

    const [values, setValues, handleInputChanGet] = useForm(initialState);

    const { name, email, password, confirmPassword} = values;

    const handleSubmit = async(event)=>{
        event.preventDefault();
        if(name.length < 4){
            return Swal.fire('Error','el nombre debe ser de 4 caracteres minimo','error');
        }
        if( password.length < 6 ){
            return Swal.fire('Error','la contraseña debe ser de 6 caracteres minimo','error');
        }
        if(password !== confirmPassword){
            return Swal.fire('Error','las contraseñas deben ser iguales','error');
        }

        const msg = await register(name, email, password)
        if( msg !== true){
            return Swal.fire('Error',msg,'error');
        }
    }

    return (
        <form 
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={ handleSubmit }
        >
            <span className="login100-form-title mb-3">
                Chat - Registro
            </span>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="text"
                    name="name"
                    placeholder="Nombre" 
                    value={name}
                    onChange={ handleInputChanGet}
                />
                <span className="focus-input100"></span>
            </div>

            
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email" 
                    value={email}
                    onChange={ handleInputChanGet}
                />
                <span className="focus-input100"></span>
            </div>
            
            
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={ handleInputChanGet} 
                    autoComplete='off'                />
                <span className="focus-input100"></span>
            </div>

            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="confirmPassword"
                    placeholder="confirm Password" 
                    value={confirmPassword}
                    onChange={ handleInputChanGet}
                    autoComplete='off'                />
                <span className="focus-input100"></span>
            </div>
            
            <div className="row mb-3">
                <div className="col text-right">
                    <Link to="/auth/login" className="txt1">
                        Ya tienes cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button
                    type="submit"
                    className="login100-form-btn"
                >
                    Crear cuenta
                </button>
            </div>

        </form>
    )
}
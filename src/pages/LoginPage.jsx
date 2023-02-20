import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../auth/AuthContext';
import { useForm } from '../hooks/UseForm';



export const LoginPage = () => {

    const { login } = useContext(AuthContext);

    const initialForm = {
        email: 'test2@test.com',
        password: '123456',
        rememberme: false
    }
    const [ values, setValues, handleInputChanGet] = useForm(initialForm);

    const { email, password, rememberme } = values;

    const handleCheck = ()=>{
        setValues({
            ...values,
            rememberme : !rememberme
        })
    }

    const validValues = ()=>{
        return (email.length > 0 && password.length >= 6)
    }

    useEffect(()=>{
        const email = localStorage.getItem('email')
        if( email ){
            setValues({
                ...values,
                rememberme: true,
                email
            })
        }
    }, [])

    const handleLogin = async(event)=>{
        event.preventDefault();
        (rememberme)
            ? localStorage.setItem('email', email)
            : localStorage.removeItem('email')
            
            const ok = await login(email,password);

            if(!ok){
                Swal.fire('Error', 'verifique el usuario y contraseña','error')
            }
    }

    return (
        <form 
            className="login100-form validate-form flex-sb flex-w"
            onSubmit={handleLogin}
        >
            <span className="login100-form-title mb-3">
                Chat - Ingreso
            </span>
            
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={ handleInputChanGet }
                />
                <span className="focus-input100"></span>
            </div>
            
            
            <div className="wrap-input100 validate-input mb-3">
                <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete='off'
                    value={password}
                    onChange={ handleInputChanGet }
                />
                <span className="focus-input100"></span>
            </div>
            
            <div className="row mb-3">
                <div 
                    className="col"
                    onClick={handleCheck}
                >
                    <input
                        className="input-checkbox100"
                        id="ckb1"
                        type="checkbox"
                        name="rememberme" 
                        checked={rememberme}
                        readOnly
                    />
                    <label className="label-checkbox100">
                        Recordarme
                    </label>
                </div>

                <div className="col text-right">
                    <Link to="/auth/register" className="txt1">
                        Nueva cuenta?
                    </Link>
                </div>
            </div>

            <div className="container-login100-form-btn m-t-17">
                <button 
                    type="submit"
                    className="login100-form-btn"
                >
                    Ingresar
                </button>
            </div>

        </form>
    )
}

import './login.scss';

import {signUp} from '../../firebase';
import { useRef, useState } from 'react';

const Login = () => {
    let [loading, setLoading] = useState(false);
    let emailRef = useRef();
    let passwordRef = useRef();

    async function handleSignUp() {
        setLoading(true);
        try {
            await signUp(emailRef.current.value,passwordRef.current.value);
        } catch {
            alert("Error !")
        };
        setLoading(false);
    }

    return (
        <div className='login__sign'>
            <div className="container">
                <form className='p-5' action="">
                    <div className="form__left">
                        <input ref={emailRef} type="email" placeholder='Enter Email' required/>
                        <input ref={passwordRef} type="password" placeholder='Enter Password' required/>
                        <button disabled={loading} className='main-button mt-4' name="login" onClick={handleSignUp}>Log in</button>
                    </div>
                    <div className="form__right">
                        <img className='img-fluid' src="assets/login2.svg" alt="login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
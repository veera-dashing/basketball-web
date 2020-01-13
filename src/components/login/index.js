import React from "react";
import './style.css';
import {useAuth} from "../../setup/use-auth";


export function Register() {
    const auth = useAuth();
    console.log('auth ------------', auth);
     const onLogin = ()=>{
        auth.social();
    }
    return (
        <div className="container">
            <h1>Register Here</h1>


                <div>
                    <button type="button" onClick={onLogin}>
                        Login
                    </button>

                </div>

        </div>
    );
}

import React from "react";
import useFormValidation from "../form/useFormValidation";
import validateAuth from "../form/validateAuth";
import './style.css';
import {useAuth} from "../../setup/use-auth";

const INITIAL_STATE = {
    email: "",
    password: ""
};

export function Register() {
    const auth = useAuth();
    console.log('auth ------------', auth);
    const onSubmit = (values) => {
        console.log('reached here -----------', values);
        auth.signup(values.email, values.password);
    }
    const onLogin = ()=>{
        auth.social();
    }
    const {
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        isSubmitting
    } = useFormValidation(INITIAL_STATE, validateAuth, onSubmit);
    return (
        <div className="container">
            <h1>Register Here</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="email"
                    value={values.email}
                    className={errors.email && "error-input"}
                    autoComplete="off"
                    placeholder="Your email address"
                />
                {errors.email && <p className="error-text">{errors.email}</p>}
                <input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    className={errors.password && "error-input"}
                    name="password"
                    type="password"
                    placeholder="Choose a safe password"
                />
                {errors.password && <p className="error-text">{errors.password}</p>}
                <div>
                    <button disabled={isSubmitting} type="button" onClick={onLogin}>
                        Login
                    </button>
                    <button disabled={isSubmitting} type="submit">
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

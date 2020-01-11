import React from 'react';
import {useAuth} from "../../setup/use-auth.js";

export const Contact = () => {
    const auth = useAuth();
    return (
        <h1>Contact Page {auth.user ? auth.user.displayName : ''}</h1>
    )
}

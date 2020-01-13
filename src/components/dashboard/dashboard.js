import React from 'react';
import {useAuth} from "../../setup/use-auth.js";

export const Dashboard = () => {
    const auth = useAuth();
    console.log('auth ------', auth);
    if (!auth.user) {
        return (<h1>No user</h1>)
    }
    return (
        <h1>Dashboard {auth.user.displayName}</h1>
    )
}

import React, {useState} from 'react';

export const GitUsersListHeader = ({user}) => {
    console.log('user----------', user);
    return (
        <>
            <tr>
                <td> Id</td>
                <td> Login</td>
            </tr>
        </>
    )
}

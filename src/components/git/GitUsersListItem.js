import React from 'react';

export const GitUsersListItem = ({user}) => {
    console.log('user----------', user);
    return (
        <>
            <tr>
                <td> {user.id}</td>
                <td> {user.login}</td>
            </tr>
        </>
    )
}

import React from 'react';

export const GitUsersListItem = ({user,onGetUserDetails}) => {
    return (
        <>
            <tr>
                <td><a href={""} onClick={() => onGetUserDetails(user.id)}>{user.id}</a></td>
                <td><a href={"#"} onClick={() => onGetUserDetails(user.id)}>{user.login}</a></td>
            </tr>
        </>
    )
}

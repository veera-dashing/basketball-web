import React from 'react';
import { useHistory } from 'react-router-dom';

export const SchoolUsersListItem = ({ schoolID, user }) => {

    let history = useHistory();

    const onEditSchoolUser = (schoolID, id) => {
        history.push(`/schools/${schoolID}/users/${id}/AddEdit`);
    }

    return (
        <>
            <tr>
                <td>
                    <a href={""} onClick={() => onEditSchoolUser(schoolID, user.id)}>{user.id}</a>
                </td>
                <td>
                    {user.name}
                </td>
                <td>
                    <button key='btnAddSchool' onClick={() => onEditSchoolUser(schoolID, user.id)} >
                        Edit User
                    </button>
                </td>
            </tr>
        </>
    )
}

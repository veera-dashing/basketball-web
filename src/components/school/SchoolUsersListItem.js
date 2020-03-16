import React from 'react';
import { useHistory } from 'react-router-dom';

export const SchoolUsersListItem = ({ schoolID, schoolUser }) => {

    let history = useHistory();

    const onEditSchoolUser = (schoolID, userID) => {
        history.push(`/schools/${schoolID}/users/${userID}/AddEdit`);
    }

    return (
        <>
            <tr>
                <td>
                    <a href={""} onClick={() => onEditSchoolUser(schoolID, schoolUser.id)}>{schoolUser.id}</a>
                </td>
                <td>
                    {schoolUser.firstName}
                </td>
                <td>
                    <button key='btnEditSchool' onClick={() => onEditSchoolUser(schoolID, schoolUser.id)} >
                        Edit
                    </button>
                </td>
            </tr>
        </>
    )
}

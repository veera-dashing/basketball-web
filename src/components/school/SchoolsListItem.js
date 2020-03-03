import React from 'react';
import { useHistory } from 'react-router-dom';

export const SchoolsListItem = ({ school }) => {

    let history = useHistory();

    const onManageSchool = (id) => {
        history.push(`/schools/${id}/Manage`);
    }

    const onEditSchool = (id) => {
        history.push(`/schools/${id}/CreateEdit`);
    }

    return (
        <>
            <tr>
                <td>
                    <a href={""} onClick={() => onEditSchool(school.id)}>{school.id}</a>
                </td>
                <td>
                    {school.name}
                </td>
                <td>
                    <button key='btnAddSchool' onClick={() => onEditSchool(school.id)} >
                        Edit School
                    </button>
                    <button key='btnAddSchool' onClick={() => onManageSchool(school.id)} >
                        Manage School
                    </button>
                </td>
            </tr>
        </>
    )
}

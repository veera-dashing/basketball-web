import React from 'react';
import { useHistory } from 'react-router-dom';

export const SchoolsListItem = ({ school }) => {

    const history = useHistory();

    const onManageSchoolClick = (id) => {
        history.push(`/schools/${id}/Manage`);
    }

    const onEditSchoolClick = (id) => {
        history.push(`/schools/${id}/AddEdit`);
    }

    return (
        <>
            <tr>
                <td>
                    <a href={""} onClick={() => onEditSchoolClick(school.id)}>{school.id}</a>
                </td>
                <td>
                    {school.name}
                </td>
                <td>
                    <button key='btnEditSchool' onClick={() => onEditSchoolClick(school.id)} >
                        Edit School
                    </button>
                    <button key='btnManageSchool' onClick={() => onManageSchoolClick(school.id)} >
                        Manage School
                    </button>
                </td>
            </tr>
        </>
    )
}

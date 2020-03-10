import React from 'react';
import { useHistory } from 'react-router-dom';

export const SchoolTeamsListItem = ({ schoolID, schoolTeam }) => {

    let history = useHistory();

    const onEditSchoolTeam = (teamID) => {
        history.push(`/schools/${schoolID}/teams/${teamID}/addEdit`);
    }

    return (
        <>
            <tr>
                <td>
                    <a href={""} onClick={() => onEditSchoolTeam(schoolTeam.id)}>{schoolTeam.id}</a>
                </td>
                <td>
                    {schoolTeam.name}
                </td>
                <td>
                    <button key='btnAddSchool' onClick={() => onEditSchoolTeam(schoolTeam.id)} >
                        Edit Team
                    </button>
                </td>
            </tr>
        </>
    )
}

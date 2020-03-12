import React from 'react';
import { useHistory } from 'react-router-dom';

export const SchoolSportTeamsListItem = ({ schoolID, schoolSportTeam }) => {

    let history = useHistory();

    const onEditSchoolSportTeam = (schoolSportTeamId) => {
        history.push(`/schools/${schoolID}/teams/${schoolSportTeamId}/addEdit`);
    }

    return (
        <>
            <tr>
                <td>
                    <a href={""} onClick={() => onEditSchoolSportTeam(schoolSportTeam.id)}>{schoolSportTeam.id}</a>
                </td>
                <td>
                    {schoolSportTeam.name}
                </td>
                <td>
                    <button key='btnEditSchoolSportTeam' onClick={() => onEditSchoolSportTeam(schoolSportTeam.id)} >
                        Edit Team
                    </button>
                </td>
            </tr>
        </>
    )
}

import React from 'react';
import { useHistory } from 'react-router-dom';

export const SchoolSportTeamsListItem = ({ schoolID, sportID, sportTeam }) => {

    let history = useHistory();

    const onEditSchoolSportTeam = (teamID) => {
        history.push(`/schools/${schoolID}/sports/${sportID}/teams/${teamID}/addEdit`);
    }

    return (
        <>
            <tr>
                <td>
                    <a href={""} onClick={() => onEditSchoolSportTeam(sportTeam.id)}>{sportTeam.id}</a>
                </td>
                <td>
                    {sportTeam.name}
                </td>
                <td>
                    <button key='btnEditSchoolSportTeam' onClick={() => onEditSchoolSportTeam(sportTeam.id)} >
                        Edit Team
                    </button>
                </td>
            </tr>
        </>
    )
}

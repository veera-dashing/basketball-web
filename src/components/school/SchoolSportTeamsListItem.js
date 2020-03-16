import React from 'react';
import { useHistory } from 'react-router-dom';

export const SchoolSportTeamsListItem = ({ schoolID, sportID, sportTeam }) => {

    let history = useHistory();

    const onEditSchoolSportTeam = (teamID) => {
        history.push(`/schools/${schoolID}/sports/${sportID}/teams/${teamID}/addEdit`);
    }

    const onManageSchoolSportTeam = (teamID) => {
        alert('Manage School Sport Team coming soon');
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
                        Edit
                    </button>
                    <button key='btnManageSchoolSportTeam' onClick={() => onManageSchoolSportTeam(sportTeam.id)} >
                        Manage
                    </button>
                </td>
            </tr>
        </>
    )
}

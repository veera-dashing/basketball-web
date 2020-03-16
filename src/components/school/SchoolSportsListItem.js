import React from 'react';

import { useHistory } from 'react-router-dom';

export const SchoolSportsListItem = ({ schoolID, schoolSport }) => {

    const history = useHistory();

    const onManageSchoolSportClick = (id) => {
        history.push(`/schools/${schoolID}/sports/${schoolSport.id}/manage`);
    }

    return (
        <>
            <tr key={schoolSport.id}>
                <td>
                    {schoolSport.id}
                </td>
                <td>
                    {schoolSport.name}
                </td>
                <td>
                    <button key='btnManageSchoolSport' onClick={() => onManageSchoolSportClick(schoolSport.id)} >
                        Manage Sport
                </button>
                </td>
            </tr>
        </>
    )
}

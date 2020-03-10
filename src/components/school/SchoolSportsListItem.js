import React from 'react';
import { useHistory } from 'react-router-dom';

export const SchoolSportsListItem = ({ schoolID, schoolSport }) => {

    return (
        <>
            <tr>
                <td>
                    {schoolSport.id}
                </td>
                <td>
                    {schoolSport.name}
                </td>
            </tr>
        </>
    )
}

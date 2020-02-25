import React from 'react';

export const SchoolsListItem = ({ school, onFetchSchoolDetails }) => {
    return (
        <>
            <tr>
                <td><a href={""} onClick={() => onFetchSchoolDetails(school.id)}>{school.id}</a></td>
            </tr>
        </>
    )
}

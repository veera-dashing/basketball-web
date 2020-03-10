import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolSportsListHeader } from './SchoolSportsListHeader';
import { SchoolSportsListItem } from './SchoolSportsListItem';

export const SchoolSportsList = ({ schoolID, schoolSports }) => {

    const { history } = useHistory();

    const onAddSchoolSportClick = () => {
        history.push();
    }

    const btnUpdateSportsTitle = (!schoolSports || schoolSports.length == 0) ? 'Add Sports' : 'Update Sports';

    return (
        <>
            <button key='btnAddSchoolSport' onClick={() => onAddSchoolSportClick()} >
                {btnUpdateSportsTitle}
            </button>
            {(!schoolSports || schoolSports.length == 0) &&
                <div>
                    No sports have been configured for this School
                </div>
            }
            {schoolSports &&
                <table width={'100%'} border={'1px'}>
                    <SchoolSportsListHeader />
                    {
                        schoolSports.map((schoolSport) => {
                            return (<SchoolSportsListItem schoolID={schoolID} schoolSport={schoolSport} />)
                        })
                    }
                </table>
            }
        </>
    )
}

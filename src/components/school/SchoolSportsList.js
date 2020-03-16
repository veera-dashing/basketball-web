import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolSportsListHeader } from './SchoolSportsListHeader';
import { SchoolSportsListItem } from './SchoolSportsListItem';
import { fetchSchoolSportsRequest } from "../../actions/schoolActions";

export const SchoolSportsList = ({ schoolID }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [schoolSports, setSchoolSports] = useState();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setSchoolSports(response.data)
        }
        const onError = (error) => {
            console.log('Error in fetchSchoolSports: ', error);
        }
        dispatch(fetchSchoolSportsRequest(schoolID, onSuccess, onError));
    }, []);

    const onUpdateSchoolSportClick = () => {
        history.push();
    }

    return (
        <>
            <button key='btnUpdateSchoolSport' onClick={() => onUpdateSchoolSportClick()} >
                Update Sports
            </button>
            {(!schoolSports || schoolSports.length == 0) &&
                <div>
                    No sports have been configured for this school
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

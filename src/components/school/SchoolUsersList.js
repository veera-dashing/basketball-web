import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { SchoolUsersListHeader } from './SchoolUsersListHeader';
import { SchoolUsersListItem } from './SchoolUsersListItem';
import { fetchSchoolUsersRequest } from "../../actions/schoolActions";
import { getQueryParams } from '../../utilities/helpers';

export const SchoolUsersList = () => {

    const dispatch = useDispatch();

    const schools = useSelector(state => state.schoolState.schools);
    console.log('schools: ', schools);

    //Executes on Page load
    useEffect(() => {
        if (!schools || schools.length == 0) {
            const onSuccess = (response) => {

            }
            const onError = (error) => {
                console.log('Error in fetchSchools: ', error);
            }
            const params = getQueryParams(window.location.href);
            dispatch(fetchSchoolUsersRequest(params, onSuccess, onError));
        }
    }, []);

    return (
        <>{schools &&
            <table width={'100%'} border={'1px'}>
                <SchoolUsersListHeader />
                {
                    schools.map((school) => {
                        return (<SchoolUsersListItem school={school} />)
                    })
                }
            </table>
        }
        </>
    )
}

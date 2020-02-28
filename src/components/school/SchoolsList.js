import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';

import { SchoolsListHeader } from './SchoolsListHeader';
import { SchoolsListItem } from './SchoolsListItem';
import { headers } from './constants';
import { fetchSchoolsRequest } from "../../actions/schoolActions";

export const SchoolsList = () => {

    const dispatch = useDispatch();
    let history = useHistory();

    const schools = useSelector(state => state.schoolState.schools);
    console.log('schools-------', schools);

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {

        }
        const onError = (error) => {

        }
        dispatch(fetchSchoolsRequest(onSuccess, onError));

    }, []);

    const onFetchSchoolDetails = (id) => {
        history.push(`/schools/${id}/CreateEdit`);
    }

    const onManageSchool = (id) => {
        history.push(`/schools/${id}/Manage`);
    }

    const onEditSchool = (id) => {
        history.push(`/schools/${id}/CreateEdit`);
    }

    const actionButtons = [
        {
            label: 'Edit',
            onClick: (val) => onEditSchool(val),
            icon: '',
            key: 'first'
        },
        {
            label: 'Manage',
            onClick: (val) => onManageSchool(val),
            icon: '',
            key: 'second'
        },
    ];

    return (
        <>{schools &&
            <table width={'100%'} border={'1px'}>
                <SchoolsListHeader list={headers} />
                {
                    schools.map((school) => {
                        return (<SchoolsListItem school={school} onFetchSchoolDetails={onFetchSchoolDetails} />)
                    })
                }                
            </table>
        }
        </>
    )
}

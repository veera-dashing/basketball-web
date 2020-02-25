import React, { useEffect, useState } from 'react';
import { SchoolsListItem } from "./SchoolsListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchoolsRequest } from "../../actions/schoolActions";
import { SchoolsListHeader } from "./SchoolsListHeader";
import { useHistory } from "react-router-dom";

export const SchoolsList = () => {
    // Step 7:  get data from store, this listens to store and gets updates automatically
    const schools = useSelector(state => state.schoolState.schools);
    console.log('schools-------', schools);
    // Step 8: Saga call to listen for action
    const dispatch = useDispatch();
    let history = useHistory();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {

        }
        const onError = (error) => {

        }
        // Step 8.1: Dispatch action -> means calling backend
        dispatch(fetchSchoolsRequest(onSuccess, onError));
    }, []);

    const onFetchSchoolDetails = (id) => {
        history.push(`/schools/${id}/CreateEdit`);
    }

    return (
        <>{schools &&
            <>
                <table width={'100%'} border={'1px'}>
                    <SchoolsListHeader />
                    {
                        schools.map((school) => {
                            return (<SchoolsListItem school={school} onFetchSchoolDetails={onFetchSchoolDetails} />)
                        })
                    }
                </table>
            </>
        }
        </>
    )
}

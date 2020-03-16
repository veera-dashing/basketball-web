import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { SchoolUsersListHeader } from './SchoolUsersListHeader';
import { SchoolUsersListItem } from './SchoolUsersListItem';
import { fetchSchoolUsersRequest } from "../../actions/schoolActions";
import { getQueryParams } from '../../utilities/helpers';

export const SchoolUsersList = ({ schoolID }) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const [schoolUsers, setSchoolUsers] = useState();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            setSchoolUsers(response.data)
        }
        const onError = (error) => {
            console.log('Error in fetchSchools: ', error);
        }
        const params = getQueryParams(window.location.href);
        dispatch(fetchSchoolUsersRequest(schoolID, params, onSuccess, onError));
    }, []);

    const onAddSchoolUserClick = () => {
        history.push(`/schools/${schoolID}/users/0/AddEdit`);
    }

    return (
        <>
            <button key='btnAddSchoolUser' onClick={() => onAddSchoolUserClick()} >
                Add User
            </button>
            {(!schoolUsers || schoolUsers.length == 0) &&
                <div>
                    No users have been configured for this school
                </div>
            }
            {schoolUsers && schoolUsers.length > 0 && 
                <table width={'100%'} border={'1px'}>
                    <SchoolUsersListHeader />
                    {
                        schoolUsers.map((schoolUser) => {
                            return (<SchoolUsersListItem schoolID={schoolID} schoolUser={schoolUser} />)
                        })
                    }
                </table>
            }
        </>
    )
}

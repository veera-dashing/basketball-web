import React, { useEffect, useState } from 'react';
import { GitUsersListItem } from "./GitUsersListItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchGitUsersRequest } from "../../actions/gitActions";
import { GitUsersListHeader } from "./GitUsersListHeader";
import { useHistory } from "react-router-dom";


export const GitUsersList = () => {
    // Step 7:  get data from store, this listens to store and gets updates automatically
    const users = useSelector(state => state.gitState.users);
    console.log('users-------', users);
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
        dispatch(fetchGitUsersRequest(onSuccess, onError));
    }, []);

    const onGetUserDetails = (id) => {
        history.push(`/git/${id}`);
    }

    return (
        <>{users && <>
            <table width={'100%'} border={'1px'}>
                <GitUsersListHeader />
                {
                    users.map((user) => {
                        return (<GitUsersListItem user={user} onGetUserDetails={onGetUserDetails} />)
                    })
                }
            </table>
        </>
        }
        </>
    )
}

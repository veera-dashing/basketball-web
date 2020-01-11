import React, {useState, useEffect} from 'react';
import {GitUsersListItem} from "./GitUsersListItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchGitUsersRequest} from "../../actions/gitActions";
import {GitUsersListHeader} from "./GitUsersListtHeader";

export const GitUsersList = () => {
    const users = useSelector(state => state.gitState.users);
    console.log('users-------', users);
    const dispatch = useDispatch();

    useEffect(() => {
        const onSuccess = (response) => {

        }
        const onError = (error) => {

        }
        dispatch(fetchGitUsersRequest(onSuccess, onError));

    }, [])
    return (
        <>{users && <>
            <table width={'100%'} border={'1px'}>
                <GitUsersListHeader/>
                {
                    users.map((user) => {
                        return (<GitUsersListItem user={user}/>)

                    })
                }
            </table>


        </>
        }
        </>
    )
}

import React, {useEffect, useState} from 'react';
import {useDispatch,} from "react-redux";
import { fetchGitUserDetailsRequest} from "../../actions/gitActions";
import {useParams, useHistory} from "react-router-dom";

export const GitUserDetails = () => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch();
    let {id} = useParams();
    let history = useHistory();

    //Executes on Page load
    useEffect(() => {
        const onSuccess = (response) => {
            console.log('onGetUserDetails', response);
            setUser(response.data);
        }
        const onError = (error) => {
            console.log('error is------', error);
        }

        // Step 8.1: Dispatch action -> means calling backend
        dispatch(fetchGitUserDetailsRequest(id, onSuccess, onError));
    }, []);
    const goBack = () => {
        history.push('/git');
    }

    return (
        <>{user && <>
            <div>
                {user.login}
                <button onClick={goBack}> Back</button>
            </div>
        </>
        }
        </>
    )
}

import React from 'react';
import {GitUsersList} from "../components/git/GitUsersList";

class GitUsers extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<>
                <h1> this is git users page</h1>
                <GitUsersList/>
            </>
        )
    }
}

export default GitUsers;

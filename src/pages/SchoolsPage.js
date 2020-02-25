import React from 'react';
import { SchoolsList } from "../components/school/SchoolsList";

class SchoolsPage extends React.Component {
    render() {
        return (<>
            <h1> This is schools listing page</h1>
            <SchoolsList />
        </>
        )
    }
}

export default SchoolsPage;

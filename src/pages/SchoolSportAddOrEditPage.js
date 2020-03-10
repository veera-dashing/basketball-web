import React from 'react';

import { SchoolSportForm } from "../components/school/SchoolSportForm";

class SchoolSportAddOrEditPage extends React.Component {

    render() {
        const { schoolID } = this.props.match.params;
        return (
            <>
                <h1>Add School Sports</h1>
                <SchoolSportForm schoolID={schoolID} />
            </>
        )
    }
}

export default SchoolSportAddOrEditPage;

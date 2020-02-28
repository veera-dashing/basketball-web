import React from 'react';
import { SampleForm, } from "../components/sample/sampleForm";
import { SampleList } from "../components/sample/sampleList";

class SchoolPage extends React.Component {


    handleSaveSchool = (values) => {
        console.log('values from form ', values);
    }

    render() {
        return (<>
            <h1> Sample Page</h1>
            {/*<SampleForm onSaveSchool={this.handleSaveSchool}/>*/}
            <SampleList />
        </>
        )
    }
}

export default SchoolPage;

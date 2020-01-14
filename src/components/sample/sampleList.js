import React from 'react';
import {ListHeader} from "../ui/ListHeader";
import {ListItem} from "../ui/ListItem";
import {data, actionButtons, additionalInfo, headers} from "./constants";


export const SampleList = () => {
    return <>
        <h1>Sample list is getting displayed below</h1>
        <table width={'100%'} border={'1px'}>
            <ListHeader list={headers}/>
            <ListItem data={data} additionalInfo={additionalInfo} actionButtons={actionButtons}/>
        </table>

    </>

}

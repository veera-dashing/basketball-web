import App from "../App";
import {Provider} from "react-redux";
import React from "react";
import {configureStore} from "./configureStore";


const store = configureStore()

export const Root = () => {
    return (<Provider store={store}><App/></Provider>)
}

export {store}

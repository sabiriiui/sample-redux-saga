import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from "./store/reducer";
import {
    Provider
} from "react-redux";
import {
    createStore,
    applyMiddleware
} from "redux";
import createSagaMiddleware from "redux-saga";
import {
    watchAddDonor,
    watchLoadDonors,
    watchUpdateDonor
} from "./saga";
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAddDonor);
sagaMiddleware.run(watchLoadDonors);
sagaMiddleware.run(watchUpdateDonor);


ReactDOM.render(<Provider store={
    store
}>
    <App />
</Provider>,
    document.getElementById("root")
);

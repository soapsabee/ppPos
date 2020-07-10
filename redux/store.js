import { createStore , applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();



const bindMiddleware = middleware => {
    const arrMiddleware = [middleware];


    return applyMiddleware(...arrMiddleware);
};


function configureStore() {
    const store = createStore(rootReducer, bindMiddleware(sagaMiddleware));


    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(sagas);
    };

    store.runSagaTask();

    return store;
}

export default configureStore();

import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducer";
import sagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

function configureAppStore() {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            }).concat(sagaMiddleware), // Add saga middleware
        devTools: process.env.NODE_ENV !== 'production', // Enable dev tools in non-production
    });

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(sagas);
    };

    store.runSagaTask();

    return store;
}

export default configureAppStore;
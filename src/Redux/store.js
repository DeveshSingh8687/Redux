// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import createSagaMiddleware from 'redux-saga';


// const Store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware()
const Store = configureStore({
    reducer:rootReducer,
    middleware: ()=>[sagaMiddleware]
})

sagaMiddleware.run(productSaga)

export default Store;
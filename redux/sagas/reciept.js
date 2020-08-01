import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'
import { FETCH_RECIEPT, SET_RECIEPT , INSERT_RECIEPT } from "../actions"

function* recieptFetch(actions) {
 

    let data = yield call(db.recieptFetch)
    yield put({ type: SET_RECIEPT, payload: { key: "reciept", value: data } });


}

function* insertNewReciept(actions) {
    yield call(db.productsInsert, actions)
    // yield recieptFetch()
    // yield put({ type: INSERT_NEW_PRODUCT, payload: { key: actions.key, value: actions.payload  } });

}




function* actionReciept() {

    yield takeLatest(FETCH_RECIEPT , recieptFetch)
    yield takeLatest(INSERT_RECIEPT , insertNewReciept)
}

export default actionReciept
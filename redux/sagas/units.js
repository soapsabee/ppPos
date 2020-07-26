import { SET_HANDLEINPUTUNIT , SET_HANDLEINPUT_UNIT , FETCH_UNITS , SET_UNITS , INSERT_NEW_UNIT , UPDATE_BASKET_CHECKED_UNITS , DELETE_BASKET_CHECKED_UNITS , SET_UPDATE_BASKET_CHECKED_UNITS , SET_DELETE_BASKET_CHECKED_UNITS } from "../actions"
import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'


function* unitsFetch(actions) {

    // yield call(db.productsInsert)
    const data = yield call(db.unitsFetch)
    console.log("data:",data)
    yield put({ type: SET_UNITS, payload: { key: "units", value: data  } });

}

function* setHandleInputUnit(actions) {

    yield put({ type: SET_HANDLEINPUT_UNIT, payload: { key: actions.key, value: actions.payload  } });

}


function* insertNewUnit(actions) {
    yield call(db.unitInsert, actions)
    yield unitsFetch()
    // yield put({ type: INSERT_NEW_PRODUCT, payload: { key: actions.key, value: actions.payload  } });

}

function* setUpdateBasketChecked(actions) {

    yield put({ type: SET_UPDATE_BASKET_CHECKED_UNITS, payload: { key: null, value: actions.payload } });


}

function* setDeleteBasketChecked(actions) {

    yield put({ type: SET_DELETE_BASKET_CHECKED_UNITS, payload: { key: null, value: actions.payload } });


}


function* actionUnits() {

    yield takeLatest(FETCH_UNITS, unitsFetch)
    yield takeLatest(SET_HANDLEINPUTUNIT, setHandleInputUnit)
    yield takeLatest(INSERT_NEW_UNIT, insertNewUnit)
    yield takeLatest(UPDATE_BASKET_CHECKED_UNITS, setUpdateBasketChecked)
    yield takeLatest(DELETE_BASKET_CHECKED_UNITS, setDeleteBasketChecked)
}


export default actionUnits
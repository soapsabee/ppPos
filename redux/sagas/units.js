import { SET_HANDLEINPUTUNIT , SET_HANDLEINPUT_UNIT , FETCH_UNITS , SET_UNITS , INSERT_NEW_UNIT  } from "../actions"
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

function* actionUnits() {

    yield takeLatest(FETCH_UNITS, unitsFetch)
    yield takeLatest(SET_HANDLEINPUTUNIT, setHandleInputUnit)
    yield takeLatest(INSERT_NEW_UNIT, insertNewUnit)

}


export default actionUnits
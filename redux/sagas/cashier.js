import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'
import { ADD_BASKET_CASHIER, SET_CASHIER , SET_UPDATE_BASKET_CASHIER } from "../actions"

function* setAddBasketCashier(actions) {
 

    // let data = yield call(db.productBarcodeSearch, actions.value)
    // yield put({ type: SET_UPDATE_BASKET_CASHIER, payload: { key: "cashier", value: data } });


}



function* actionCashier() {


}

export default actionCashier
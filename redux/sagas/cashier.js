import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'
import { ADD_BASKET_CASHIER, SET_CASHIER } from "../actions"

function* setAddBasketCashier(actions) {
    console.log("actions:", actions);
    yield put({ type: SET_CASHIER, payload: { key: actions.key, value: actions.payload.status } });
    // if (actions.key === "scanned" && actions.payload.status == true) {
    //     console.log("barcode:", actions.payload.barcode);

    // }

    // let data = yield call(db.productBarcodeSearch, actions.value)
    // yield put({ type: SET_UPDATE_BASKET_CASHIER, payload: { key: "cashier", value: data } });


}



function* actionCashier() {

    yield takeLatest(ADD_BASKET_CASHIER, setAddBasketCashier)

}

export default actionCashier
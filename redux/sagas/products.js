import { FETCH_PRODUCT , SET_PRODUCTS } from "../actions"
import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'

function* productFetch(actions) {

    // yield call(db.productsInsert)
    const data = yield call(db.productsFetch)
    console.log("data:",data)
    yield put({ type: SET_PRODUCTS, payload: { key: "products", value: data  } });

}

function* actionProducts() {

    yield takeLatest(FETCH_PRODUCT, productFetch)

}


export default actionProducts

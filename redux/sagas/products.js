import { FETCH_PRODUCT , SET_PRODUCTS , SET_HANDLEINPUTPRODUCTS } from "../actions"
import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'

function* productFetch(actions) {

    // yield call(db.productsInsert)
    const data = yield call(db.productsFetch)
    console.log("data:",data)
    yield put({ type: SET_PRODUCTS, payload: { key: "products", value: data  } });

}

function* setHandleInputProducts(actions) {


    yield put({ type: SET_HANDLEINPUTPRODUCTS, payload: { key: actions.payload.key, value: actions.payload.value  } });

}

function* actionProducts() {

    yield takeLatest(FETCH_PRODUCT, productFetch)
    yield takeLatest(SET_HANDLEINPUTPRODUCTS, setHandleInputProducts)

}


export default actionProducts

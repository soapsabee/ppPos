import { FETCH_PRODUCT , SET_PRODUCTS , SET_HANDLEINPUTPRODUCTS , SET_HANDLEINPUT_PRODUCTS , INSERT_NEW_PRODUCT} from "../actions"
import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'

function* productFetch(actions) {

    // yield call(db.productsInsert)
    const data = yield call(db.productsFetch)
    console.log("data:",data)
    yield put({ type: SET_PRODUCTS, payload: { key: "products", value: data  } });

}

function* setHandleInputProducts(actions) {

    yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { key: actions.key, value: actions.payload  } });

}

function* insertNewProduct(actions) {
    yield call(db.productsInsert, actions)
    yield productFetch()
    // yield put({ type: INSERT_NEW_PRODUCT, payload: { key: actions.key, value: actions.payload  } });

}


function* actionProducts() {

    yield takeLatest(FETCH_PRODUCT, productFetch)
    yield takeLatest(SET_HANDLEINPUTPRODUCTS, setHandleInputProducts)
    yield takeLatest(INSERT_NEW_PRODUCT, insertNewProduct)

}


export default actionProducts

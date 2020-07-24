import { FETCH_PRODUCT, SET_PRODUCTS, SET_HANDLEINPUTPRODUCTS, SET_HANDLEINPUT_PRODUCTS, INSERT_NEW_PRODUCT, SET_BARCODE_SCANNER, UPDATE_BASKET_CHECKED, SET_UPDATE_BASKET_CHECKED, DELETE_BASKET_CHECKED, SET_DELETE_BASKET_CHECKED, DELETE_PRODUCT , CLEAR_BASKET_CHECKED , SET_CLEAR_BASKET_CHECKED } from "../actions"
import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'

function* productFetch(actions) {

    // yield call(db.productsInsert)
    const data = yield call(db.productsFetch)
    console.log("data:", data)
    yield put({ type: SET_PRODUCTS, payload: { key: "products", value: data } });

}

function* setHandleInputProducts(actions) {

    yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { key: actions.key, value: actions.payload } });

}

function* insertNewProduct(actions) {
    yield call(db.productsInsert, actions)
    yield productFetch()
    // yield put({ type: INSERT_NEW_PRODUCT, payload: { key: actions.key, value: actions.payload  } });

}

function* setBarcodeScanner(actions) {

    yield put({ type: SET_PRODUCTS, payload: { key: actions.key, value: actions.payload.status } });
    if (actions.key === "scanned" && actions.payload.status == true) {
        yield setHandleInputProducts({ key: "barcode", payload: actions.payload.barcode })
    }

}

function* setUpdateBasketChecked(actions) {

    yield put({ type: SET_UPDATE_BASKET_CHECKED, payload: { key: null, value: actions.payload } });


}

function* setDeleteBasketChecked(actions) {

    yield put({ type: SET_DELETE_BASKET_CHECKED, payload: { key: null, value: actions.payload } });


}

function* deleteProduct(actions) {

    yield all(actions.payload.map(element => 

         call(db.productDelete, element )


    ))
    yield setClearBasketChecked()
    yield productFetch()
    /// ทุกครั้งที่ Delete จะต้อง ไปเคลียร์ basketChecked ด้วย
}

function* setClearBasketChecked() {

    yield put({ type: SET_CLEAR_BASKET_CHECKED, payload: { key: null, value: null } });
 

}



function* actionProducts() {

    yield takeLatest(FETCH_PRODUCT, productFetch)
    yield takeLatest(SET_HANDLEINPUTPRODUCTS, setHandleInputProducts)
    yield takeLatest(INSERT_NEW_PRODUCT, insertNewProduct)
    yield takeLatest(SET_BARCODE_SCANNER, setBarcodeScanner)
    yield takeLatest(UPDATE_BASKET_CHECKED, setUpdateBasketChecked)
    yield takeLatest(DELETE_BASKET_CHECKED, setDeleteBasketChecked)
    yield takeLatest(DELETE_PRODUCT, deleteProduct)
    yield takeLatest(CLEAR_BASKET_CHECKED, setClearBasketChecked)

}


export default actionProducts

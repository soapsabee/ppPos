import { FETCH_PRODUCT, SET_PRODUCTS, SET_HANDLEINPUTPRODUCTS, SET_HANDLEINPUT_PRODUCTS, INSERT_NEW_PRODUCT, SET_BARCODE_SCANNER, UPDATE_BASKET_CHECKED, 
    SET_UPDATE_BASKET_CHECKED, DELETE_BASKET_CHECKED, SET_DELETE_BASKET_CHECKED, DELETE_PRODUCT, CLEAR_BASKET_CHECKED, 
    SET_CLEAR_BASKET_PRODUCTS, SEARCH_PRODUCT, SET_SEARCH_PRODUCT, SORT_PRODUCT, SET_CATEGORYS, 
    ADD_BASKET_CASHIER, SET_UPDATE_CASHIER, 
    INCREASE_TOTAL_CASHIER, CLEAR_CASHIER ,
    DELETE_CASHIER, SET_DELETE_BASKET_CASHIER } from "../actions"
import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'
import { getProducts } from './selector'
import { categoriesFetch } from "../database";
import rootSaga from ".";

function* productFetch(actions) {

    const elementProducts = yield select(getProducts)
    let data
    if (elementProducts.searchInput != "") {

        data = yield call(db.productSearch, elementProducts.searchInput)


    } else {

        data = yield call(db.productsFetch, elementProducts.sortProducts)

    }

    yield put({ type: SET_PRODUCTS, payload: { key: "products", value: data } });
    const categoryData = yield call(db.categoriesFetch)
    yield put({ type: SET_CATEGORYS, payload: { key: "categories", value: categoryData } });

}

function* setHandleInputProducts(actions) {

    yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { headkey: "handleInputProducts" , key: actions.key, value: actions.payload } });
    if(actions.key == "name" || actions.key == "price" || actions.key == "quantity" || actions.key == "cost" || actions.key == "barcode"){
       
       actions.payload == "" ? 
       yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { headkey: "errorField" , key: actions.key, value: true } })
       :
       yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { headkey: "errorField" , key: actions.key, value: false } })

    }
}

function* insertNewProduct(actions) {

    const elementProducts = yield select(getProducts)
    let validInsert = false
    yield all(Object.keys(elementProducts.handleInputProducts).map(element =>{
        
        if(element == "name" || element == "price" || element == "quantity" || element == "cost" || element== "barcode"){
       
            if(elementProducts.handleInputProducts[element] == ""){
                validInsert = true
                console.log("validInsert: true");
            }
         }

    }))

    
     validInsert == true  ? console.log("Insert Not Pass") : console.log("Insert Pass")


    // yield call(db.productsInsert, actions)
    // yield productFetch()

}

function* setBarcodeScanner(actions) {

    yield put({ type: SET_PRODUCTS, payload: { key: actions.key, value: actions.payload.status } });
    if (actions.key === "scanned" && actions.payload.status == true) {
        yield setHandleInputProducts({ key: "barcode", payload: actions.payload.barcode })
    }

}

function* setUpdateBasketChecked(actions) {

    yield put({ type: SET_UPDATE_BASKET_CHECKED, payload: { key: actions.key, value: actions.payload } });


}

function* setDeleteBasketChecked(actions) {

    yield put({ type: SET_DELETE_BASKET_CHECKED, payload: { key: actions.key, value: actions.payload } });


}

function* deleteProduct(actions) {

    yield all(actions.payload.map(element =>

        call(db.productDelete, element)


    ))
    yield setClearProducts({ key: "basketChecked", value: null })
    yield productFetch()
    /// ทุกครั้งที่ Delete จะต้อง ไปเคลียร์ basketChecked ด้วย
}



function* setClearProducts(actions) {

    yield put({ type: SET_CLEAR_BASKET_PRODUCTS, payload: { key: actions.key, value: null } });


}

function* setClearCashier() {

    yield setClearProducts({ key: "cashier", value: "null" })
    yield setClearProducts({ key: "cashierChecked", value: "null" })
    yield setClearProducts({ key: "totalCashier", value: 0 })
}



function* setProduct(actions) {

    yield put({ type: SET_PRODUCTS, payload: { key: actions.key, value: actions.payload } });
    yield productFetch()

}

function* setAddBasketCashier(actions) {

    yield put({ type: SET_PRODUCTS, payload: { key: actions.key, value: actions.payload.status } });
    if (actions.key === "scanned" && actions.payload.status == true) {
        let data = yield call(db.productBarcodeSearch, actions.payload.barcode)
        if (data.length > 0) {
            yield put({ type: SET_UPDATE_CASHIER, payload: { key: "cashier", value: data } });
            yield put({ type: INCREASE_TOTAL_CASHIER, payload: { key: "null", value: data[0].price } })
        }

    }

}


function* deleteCashier(actions) { 
    yield all(actions.payload.map(element =>
           put({ type: SET_DELETE_BASKET_CASHIER, payload: { key: "null", value: element } })

    ))
    yield setClearProducts({ key: "cashierChecked", value: "null" })

}


function* actionProducts() {

    yield takeLatest(FETCH_PRODUCT, productFetch)
    yield takeLatest(SET_HANDLEINPUTPRODUCTS, setHandleInputProducts)
    yield takeLatest(INSERT_NEW_PRODUCT, insertNewProduct)
    yield takeLatest(SET_BARCODE_SCANNER, setBarcodeScanner)
    yield takeLatest(UPDATE_BASKET_CHECKED, setUpdateBasketChecked)
    yield takeLatest(DELETE_BASKET_CHECKED, setDeleteBasketChecked)
    yield takeLatest(DELETE_PRODUCT, deleteProduct)
    yield takeLatest(CLEAR_BASKET_CHECKED, setClearProducts)
    yield takeLatest(SEARCH_PRODUCT, setProduct)
    yield takeLatest(SORT_PRODUCT, setProduct)
    yield takeLatest(ADD_BASKET_CASHIER, setAddBasketCashier)
    yield takeLatest(CLEAR_CASHIER, setClearCashier)
    yield takeLatest(DELETE_CASHIER, deleteCashier)
}


export default actionProducts

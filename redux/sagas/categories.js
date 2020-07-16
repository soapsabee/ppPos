import { FETCH_CATEGORYS , SET_CATEGORYS , INSERT_NEW_CATEGORY , SET_HANDLEINPUTCATEGORY , SET_HANDLEINPUT_CATEGORY } from "../actions"
import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'


function* categoryFetch(actions) {

    // yield call(db.productsInsert)
    const data = yield call(db.categoriesFetch)
    console.log("data:",data)
    yield put({ type: SET_CATEGORYS, payload: { key: "categories", value: data  } });

}

function* setHandleInputCategory(actions) {

    yield put({ type: SET_HANDLEINPUT_CATEGORY, payload: { key: actions.key, value: actions.payload  } });

}

function* insertNewCategory(actions) {
    yield call(db.categoryInsert, actions)
    yield categoryFetch()
    // yield put({ type: INSERT_NEW_PRODUCT, payload: { key: actions.key, value: actions.payload  } });

}

function* actionCategories() {

    yield takeLatest(FETCH_CATEGORYS, categoryFetch)
    yield takeLatest(SET_HANDLEINPUTCATEGORY, setHandleInputCategory)
    yield takeLatest(INSERT_NEW_CATEGORY, insertNewCategory)
 
}


export default actionCategories
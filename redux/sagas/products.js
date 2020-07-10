import { FETCH_PRODUCT , SET_PRODUCTS } from "../actions"
import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';


function* productFetch(actions) {

    yield put({ type: SET_PRODUCTS, payload: { key: "products", value: [ { name:"ปลากระป๋อง", price:"xx", quantity:"2",cost:"2"  } , { name:"เนื้อหมู", price:"xx", quantity:"2",cost:"2"  }  ]} });

}

function* actionProducts() {

    yield takeLatest(FETCH_PRODUCT, productFetch)

}


export default actionProducts

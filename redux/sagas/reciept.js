import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'
import { FETCH_RECIEPT, SET_RECIEPT, INSERT_RECIEPT ,SET_RECIEPT_BYKEY , SORT_RECIEPT , RECIEPT_SALE_TODAY} from "../actions"
import { getReciept } from './selector'

function* recieptFetch(actions) {
    let sumReciept = yield call(db.recieptSUM)
    console.log(sumReciept);
    const elementReciept = yield select(getReciept)
    let year = elementReciept.date.getFullYear()
    let month = `${elementReciept.date.getMonth()+1}`.padStart(2, "0")
    let day = `${elementReciept.date.getDate()}`.padStart(2, "0")
    let date = `${year}-${month}-${day}`
    
    let data = yield call(db.recieptFetch , date)
   
    yield put({ type: SET_RECIEPT, payload: { key: "totalBalance", value: sumReciept[0].balance } });
    yield put({ type: SET_RECIEPT, payload: { key: "totalProfit", value: sumReciept[0].balance - sumReciept[0].totalcost  } });
    yield put({ type: SET_RECIEPT, payload: { key: "reciept", value: data } });


}

function* recieptSaleToday(actions) {
    let now = new Date()
    let year = now.getFullYear()
    let month = `${now.getMonth()+1}`.padStart(2, "0")
    let day = `${now.getDate()}`.padStart(2, "0")
    let date = `${year}-${month}-${day}`
    
    let sumReciept =  yield call(db.recieptSUM , date)
console.log(sumReciept);
     yield put({ type: SET_RECIEPT, payload: { key: "totalBalanceNow", value: sumReciept[0].balance } });
     yield put({ type: SET_RECIEPT, payload: { key: "totalProfitNow", value: sumReciept[0].balance - sumReciept[0].totalcost  } });

}

function* setReciept(actions) {

    yield put({ type: SET_RECIEPT, payload: { key: actions.key, value: actions.payload } });

}

function* sortReciept(actions) {

    yield setReciept(actions)
    yield recieptFetch()
}


function* confirmReciept(actions) {

    const data = yield call(db.recieptInsert, actions)
    yield recieptFetch()
 
    
}




function* actionReciept() {

    yield takeLatest(FETCH_RECIEPT, recieptFetch)
    yield takeLatest(INSERT_RECIEPT, confirmReciept)
    yield takeLatest(SET_RECIEPT_BYKEY, setReciept)
    yield takeLatest(SORT_RECIEPT, sortReciept)
    yield takeLatest(RECIEPT_SALE_TODAY ,recieptSaleToday)
}

export default actionReciept
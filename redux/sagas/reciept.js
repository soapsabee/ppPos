import { put, takeLatest, call, delay, select, all } from 'redux-saga/effects';
import * as db from '../database'
import { FETCH_RECIEPT, SET_RECIEPT, INSERT_RECIEPT, SET_RECIEPT_BYKEY, SORT_RECIEPT, RECIEPT_SALE_TODAY, EXPORT_REPORT  } from "../actions"
import { getReciept } from './selector'
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import moment from 'moment';

function* recieptFetch(actions) {
    let sumReciept = yield call(db.recieptSUM)
    console.log(sumReciept);
    const elementReciept = yield select(getReciept)
    let year = elementReciept.date.getFullYear()
    let month = `${elementReciept.date.getMonth() + 1}`.padStart(2, "0")
    let day = `${elementReciept.date.getDate()}`.padStart(2, "0")
    let date = `${year}-${month}-${day}`

    let data = yield call(db.recieptFetch, date)

    yield put({ type: SET_RECIEPT, payload: { key: "totalBalance", value: sumReciept[0].balance } });
    yield put({ type: SET_RECIEPT, payload: { key: "totalProfit", value: sumReciept[0].balance - sumReciept[0].totalcost } });
    yield put({ type: SET_RECIEPT, payload: { key: "reciept", value: data } });


}

function* recieptSaleToday(actions) {
    let now = new Date()
    let year = now.getFullYear()
    let month = `${now.getMonth() + 1}`.padStart(2, "0")
    let day = `${now.getDate()}`.padStart(2, "0")
    let date = `${year}-${month}-${day}`

    let sumReciept = yield call(db.recieptSUM, date)

    yield put({ type: SET_RECIEPT, payload: { key: "totalBalanceNow", value: sumReciept[0].balance } });
    yield put({ type: SET_RECIEPT, payload: { key: "totalProfitNow", value: sumReciept[0].balance - sumReciept[0].totalcost } });

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

function* exportFile(actions) {
    
    if (actions.payload.length > 0) {
        let fileName = "DailyReport" + String(moment(new Date()).add(0, 'days').format('YYYY-MM-DD'));

        let fileUri = FileSystem.documentDirectory + fileName + ".csv";

        let txtFile = yield convertToCSV(actions.payload);

        yield FileSystem.writeAsStringAsync(fileUri, txtFile, { encoding: FileSystem.EncodingType.UTF8 });

        yield Sharing.shareAsync(fileUri)

        yield FileSystem.deleteAsync(fileUri)
    }

}

function* convertToCSV(objArray) {

    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    let str = '';

    let headerLine = 'Date, Balance, TotalCost';

    str += headerLine + '\r\n';



    for (let i = 0; i < array.length; i++) {

        let line = '';

        for (let index in array[i]) {

      
            if (line != '') line += ','



            line += array[i][index];

        }



        str += line + '\r\n';

    }



    return str;


}






function* actionReciept() {

    yield takeLatest(FETCH_RECIEPT, recieptFetch)
    yield takeLatest(INSERT_RECIEPT, confirmReciept)
    yield takeLatest(SET_RECIEPT_BYKEY, setReciept)
    yield takeLatest(SORT_RECIEPT, sortReciept)
    yield takeLatest(RECIEPT_SALE_TODAY, recieptSaleToday)
    yield takeLatest(EXPORT_REPORT, exportFile)
}

export default actionReciept
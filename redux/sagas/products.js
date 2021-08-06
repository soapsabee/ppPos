import {
    FETCH_PRODUCT, SET_PRODUCTS, SET_HANDLEINPUTPRODUCTS, SET_HANDLEINPUT_PRODUCTS, INSERT_NEW_PRODUCT, SET_BARCODE_SCANNER, UPDATE_BASKET_CHECKED,
    SET_UPDATE_BASKET_CHECKED, DELETE_BASKET_CHECKED, SET_DELETE_BASKET_CHECKED, DELETE_PRODUCT, CLEAR_BASKET_CHECKED,
    SET_CLEAR_BASKET_PRODUCTS, SEARCH_PRODUCT, SET_SEARCH_PRODUCT, SORT_PRODUCT, SET_CATEGORYS,
    ADD_BASKET_CASHIER, SET_UPDATE_CASHIER,
    INCREASE_TOTAL_CASHIER, CLEAR_CASHIER,
    DELETE_CASHIER, SET_DELETE_BASKET_CASHIER, ADD_BASKET_CASHIER_MANUAL, SET_HANDLE_INPUT_CASHIER,
    INCREASE_ACCEPT_MONEY, ADD_ACCEPT_MONEY, BACKSPACE_ACCEPT_MONEY, DECREASE_ACCEPT_MONEY , CONFIRM_CASHIER , IMPORT_PRODUCT_CSV , EXPORT_PRODUCT_CSV,
    TABLE_CLEAR,EDIT_PROMPTPAY,FETCH_PROMPTPAY,SET_KEY
} from "../actions"
import { put, takeLatest, call, delay, select, all, take } from 'redux-saga/effects';
import * as db from '../database'
import { getProducts } from './selector'
import moment from 'moment';
import * as FileSystem from 'expo-file-system';

import * as Sharing from 'expo-sharing';

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

    yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { headkey: "handleInputProducts", key: actions.key, value: actions.payload } });
    if (actions.key == "name" || actions.key == "price" || actions.key == "quantity" || actions.key == "cost" || actions.key == "barcode") {

        actions.payload == "" ?
            yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { headkey: "errorField", key: actions.key, value: true } })
            :
            yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { headkey: "errorField", key: actions.key, value: false } })

    }

    if (actions.key == "name" || actions.key == "barcode") {
        let data = yield call(db.productDuplicate, { where: actions.key, value: actions.payload })
        if (data.length > 0) {
            yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { headkey: "errorField", key: actions.key, value: true } })
            yield put({ type: SET_PRODUCTS, payload: { key: actions.key == "name" ? "duplicateAddName" : "duplicateBarcode", value: true } });

        } else {
            yield put({ type: SET_PRODUCTS, payload: { key: actions.key == "name" ? "duplicateAddName" : "duplicateBarcode", value: false } });

        }
    }
}

function* setHandleInputCashier(actions) {
    yield put({ type: SET_HANDLEINPUT_PRODUCTS, payload: { headkey: "cashierInputProducts", key: actions.key, value: actions.payload } })

}

function* insertNewProduct(actions) {
    const elementProducts = yield select(getProducts)
    let validInsert = false
    yield all(Object.keys(elementProducts.handleInputProducts).map(element => {

        if (element == "name" || element == "price" || element == "quantity" || element == "cost" || element == "barcode") {

            if (elementProducts.handleInputProducts[element] == "") {
                validInsert = true

            }
        }

    }))

    if (elementProducts.duplicateAddName || elementProducts.duplicateBarcode) validInsert = true


    if (validInsert) {
        yield put({ type: SET_PRODUCTS, payload: { key: "dialogAlertAddProduct", value: true } })
    } else {
        yield call(db.productsInsert, actions)
        yield setClearProducts({ key: "handleInputProducts", value: null })
        yield productFetch()
    }
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

function* setByKey(actions) {
    yield put({ type: SET_PRODUCTS, payload: { key: actions.key, value: actions.payload } });

}


function* setAddBasketCashier(actions) {

    yield put({ type: SET_PRODUCTS, payload: { key: actions.key, value: actions.payload.status } });
    if (actions.key === "scanned" && actions.payload.status == true) {
        let data = yield call(db.productBarcodeSearch, actions.payload.barcode)
        if (data.length > 0) {
            yield put({ type: SET_UPDATE_CASHIER, payload: { key: "cashier", value: data } });
            yield put({ type: INCREASE_TOTAL_CASHIER, payload: { key: "totalCashier", value: data[0].price } })
            yield put({ type: INCREASE_TOTAL_CASHIER, payload: { key: "totalCost", value: data[0].cost } })

        }

    }

}

function* setAddBasketCashierManual(actions) {

    const { barcode, number } = actions.payload
    if (barcode != "") {
        let data = yield call(db.productBarcodeSearch, barcode)
        let i = 0
        if (data.length > 0) {
            while (i < parseInt(number)) {
                yield put({ type: SET_UPDATE_CASHIER, payload: { key: "cashier", value: data } });
                i++
            }
            yield put({ type: INCREASE_TOTAL_CASHIER, payload: { key: "totalCashier", value: (data[0].price * number) } })
        }

        yield setClearProducts({ key: "cashierInputProducts", value: "null" })

    }
}


function* deleteCashier(actions) {
    yield all(actions.payload.map(element =>
        put({ type: SET_DELETE_BASKET_CASHIER, payload: { key: "null", value: element } })

    ))
    yield setClearProducts({ key: "cashierChecked", value: "null" })

}


function* addAcceptMoney(actions) {
    const elementProducts = yield select(getProducts)
    if ((elementProducts.acceptMoney != "" || (actions.payload != "0" && elementProducts.acceptMoney == ""))) {


        if(elementProducts.acceptMoney.indexOf(".") == -1 && actions.payload == "."){
            yield put({ type: INCREASE_ACCEPT_MONEY, payload: { key: "null", value: "0"} })

        }

        if (actions.payload != "." || (elementProducts.acceptMoney.indexOf(".") == -1 && actions.payload == ".")) {
            
            yield put({ type: INCREASE_ACCEPT_MONEY, payload: { key: "null", value: actions.payload } })

        }

    }
}

function* backspaceAcceptMoney(actions) {
    const elementProducts = yield select(getProducts)

    yield put({ type: DECREASE_ACCEPT_MONEY, payload: { key: "null", value: actions.payload } })
    if(elementProducts.acceptMoney == "0."){
        yield setClearProducts({key: "acceptMoney" ,value:"null"}) 
    }
}

function* confirmCalculator(actions) {
    const { acceptMoney , totalCashier } = actions.payload
    let result = 0
    let date = moment()
    .utcOffset('+07:00')
    .format('YYYY-MM-DD-HH:mm:ss');

    result = parseFloat(acceptMoney) - parseFloat(totalCashier)


      yield setByKey({key: "billNumber" , payload: date})
      yield setByKey({key: "changeMoney" , payload: result})
      
}

function* importProductCSV(actions) {
  
   
    const productCSV = yield processDataImport(actions.payload)
  
//   console.log("productCSV: ",productCSV)

    yield all(productCSV.map(value => 
        call(db.productsInsert, { payload: value })

    ))

    yield productFetch()

    
}

function* processDataImport(allTextLines) {
  
    let array = allTextLines.split(",")
    array.splice(0,11)
    // let headers = all[0].split(',');

    // let array = all.splice(0,)

    let data =  []
    let c = 0
    let lastC = 11
    let length = 0
    array.forEach(e => {
        c++
        if(c == lastC){
            lastC += lastC
            length++
        }
    })

    console.log(lastC)

    
    let result = []
    for(let i = 0;i<length ;i ++) {
      let objCol = {
        id:"",
        name:"",
        price:"",
        quantity:"", 
        cost:"", 
        barcode:"", 
        detail:"", 
        imageURI:"", 
        status:"", 
        unitID:"", 
        categoryID:"",
      }
      
    //   let splitArray = ele.split(",")
      let index = 0
      let lastindex = 11
    //   if(splitArray[0] === ""){
    //       return
    //   }

      for (var key in objCol){
    
        objCol[key] = array[index]
        index++
        if(index == lastindex){
            lastindex += lastindex
        }
      }
        
      result.push(objCol)
      
    }
    console.log("result: ",result)
    
    return result
}


function* exportFile(actions) {

    let data = yield call(db.productsFetch, "export")
    if (data.length > 0) {
        let fileName = "Products" + String(moment(new Date()).add(0, 'days').format('YYYY-MM-DD'));

        let fileUri = FileSystem.documentDirectory + fileName + ".csv";

        let txtFile = yield convertToCSV(data);

        yield FileSystem.writeAsStringAsync(fileUri, txtFile, { encoding: FileSystem.EncodingType.UTF8 });

        yield Sharing.shareAsync(fileUri)

        yield FileSystem.deleteAsync(fileUri)
    }

}



function* convertToCSV(objArray) {

    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    let str = '';

    let headerLine = 'id,name,price,quantity,cost,barcode,detail,imageURI,status,unitID,categoryID,';

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


function* clearAllTable() {

    yield call(db.deleteProductsTable)
    yield call(db.deleteRecieptsTable)
    yield call(db.deleteCategoriesTable)
    yield call(db.deleteUnitsTable)

    yield productFetch()
}

function* promptPayFetch(actions){
  let data = yield call(db.promptPayFetch)
  yield setByKey({key: "promptpayNumber" , payload: data[0].promptpayNumber})
}

function* editPromptPay(actions) {
    const elementProducts = yield select(getProducts)

    yield call(db.promptPayUpdate, elementProducts.handleInputPromptPay)
    yield promptPayFetch()
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
    yield takeLatest(SET_KEY, setByKey)
    yield takeLatest(ADD_BASKET_CASHIER_MANUAL, setAddBasketCashierManual)
    yield takeLatest(SET_HANDLE_INPUT_CASHIER, setHandleInputCashier)
    yield takeLatest(ADD_ACCEPT_MONEY, addAcceptMoney)
    yield takeLatest(BACKSPACE_ACCEPT_MONEY, backspaceAcceptMoney)
    yield takeLatest(CONFIRM_CASHIER , confirmCalculator )
    yield takeLatest(IMPORT_PRODUCT_CSV , importProductCSV)
    yield takeLatest(EXPORT_PRODUCT_CSV , exportFile)
    yield takeLatest(TABLE_CLEAR, clearAllTable)
    yield takeLatest(EDIT_PROMPTPAY , editPromptPay )
    yield takeLatest(FETCH_PROMPTPAY, promptPayFetch)
}


export default actionProducts

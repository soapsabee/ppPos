import { all } from "redux-saga/effects";
import products from "./products";
import categories from "./categories"
import units from "./units"
import cashier from "./cashier"
import reciept from "./reciept"

export default function* rootSaga() {
  yield all([
    products(),
    categories(),
    units(),
    cashier(),
    reciept()
 ]
  );
}
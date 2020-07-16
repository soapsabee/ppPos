import { all } from "redux-saga/effects";
import products from "./products";
import categories from "./categories"
export default function* rootSaga() {
  yield all([
    products(),
    categories()
  ]
  );
}
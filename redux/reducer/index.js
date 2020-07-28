import { combineReducers } from 'redux';
import products from './products'
import categories from './categories'
import units from './units'
import cashier from './cashier'

const rootReducer = combineReducers({
    products,
    categories,
    units,
    cashier
    
});

export default rootReducer;

export * from "./products"
export * from "./categories"
export * from "./units"
export * from "./cashier"
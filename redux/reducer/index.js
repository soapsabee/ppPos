import { combineReducers } from 'redux';
import products from './products'
import categories from './categories'
import units from './units'

const rootReducer = combineReducers({
    products,
    categories,
    units
    
});

export default rootReducer;

export * from "./products"
export * from "./categories"
export * from "./units"
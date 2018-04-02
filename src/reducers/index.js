import {combineReducers} from 'redux';
import products  from './products/product_reducer';
import isEditting from './products/isEditting';
const Reducer  = combineReducers({
    products,
    isEditting
});

export default Reducer;
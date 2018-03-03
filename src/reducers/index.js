import {combineReducers} from 'redux';
import products  from './products/product_reducer';

const Reducer  = combineReducers({
    products
});

export default Reducer;
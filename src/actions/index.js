import * as Actions from '../constants/action_type';
import {callApi} from '../utils/call_api';



export const fetchProductRequest = ()=>{
    return (dispatch)=>{
        return callApi('products','GET',null).then(res=>{
            dispatch(fetchProduct(res.data));
        });
    }
}


export const fetchProduct = (products)=>{
    return {
        type:Actions.FETCH_PRODUCTS,
        products
    }
}


/////////--delete
export const deleteProductRequest = (id) =>{
    return dispatch =>{
        return callApi(`products/${id}`,'DELETE',null).then(res =>{
            dispatch(deleteProduct(id));
        });
    }
    
}

export const deleteProduct = (id) =>{
    return {
        type:Actions.PRODUCT_DELETE,
        id
    }
}


/////---createProduct
export const createProductRequest = (product)=>{
    return dispatch =>{
        return callApi(`products`,'POST',product).then(res=>{
            dispatch(createProduct(res.data))
        });
    }
}

export const createProduct = (product) =>{
    return {
        type:Actions.PRODUCT_ADD,
        product
    }
}

////--------getProductById

export const getProductRequest = (id)=>{
    return dispatch =>{
        return callApi(`products/${id}`).then(res=>{
          
            dispatch(getProduct(res.data));
        });
    }
}

export const getProduct = (product)=>{
    return {
        type:Actions.FETCH_ONE,
        product
    }
}
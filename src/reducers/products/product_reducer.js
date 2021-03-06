import * as types from  '../../constants/action_type';

var initialDefault = [];

var findIndex = (data,id)=>{
    var position = -1,
    result=data.forEach((item,index)=>{
          if(item.id === id){
            position=index;
          }
      });
    return position;
}

const myReducer = (state=initialDefault,action)=>{
    switch(action.type){
        case types.FETCH_PRODUCTS:
            state = action.products
            return state;
        case types.PRODUCT_DELETE:
               var index = findIndex(state,action.id);
               state.splice(index,1);
            return [...state]
        case types.PRODUCT_ADD:
            state.push(action.product);
            return [...state];

    
        default:
        return [...state];
    }
}

export default myReducer;
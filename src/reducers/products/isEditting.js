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
        case types.FETCH_ONE:
  
            state = action.product
            return action.product;
        default:
        return [...state];
    }
}

export default myReducer;
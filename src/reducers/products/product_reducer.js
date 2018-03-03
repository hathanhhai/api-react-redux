
var initialDefault = [
    {
        id:1,
        name:'Iphone',
        price:30000,
        status:true
    },
    {
        id:2,
        name:'Sam Sung',
        price:60000,
        status:false
    },
    {
        id:3,
        name:'HTC',
        price:20000,
        status:true
    }
];

const myReducer = (state=initialDefault,action)=>{
    switch(action.type){
        default:
        return [...state];
    }
}

export default myReducer;
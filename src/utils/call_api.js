import axios from 'axios';
import * as config from '../constants/config';




export const  callApi=(url,method='GET',body)=>{
   return  axios({
        method:method,
        url:`${config.Config}/${url}`,
        data:body
    }).catch(err=>console.log(err))
}

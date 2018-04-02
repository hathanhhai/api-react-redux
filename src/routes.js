import React from 'react';
import HomePage from './pages/home_page/home_page';
import NotFoundPage from './pages/not_found_page/not_found_page';
import ProductListPage from './pages/product_page/product_list_page';
import ProductActionPage from './pages/product_action_page/product_action_page';
import SimpleReactFileUpload from './compenents/uploadfile'
const routes = [
    {
        path:'/',
        exact:true,
        main:()=> <HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main:()=><ProductListPage />
    },
    {
        path:'/product/add',
        exact:false,
        main:({history})=><ProductActionPage history={history} />
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main:({history,match})=><ProductActionPage match={match} history={history} />
    },
    {
        path:'/upload',
        exact:false,
        main:()=><SimpleReactFileUpload  />
    },
    {
        path:'',
        exact:false,
        main:()=> <NotFoundPage/>
    },
   
];

export default routes;
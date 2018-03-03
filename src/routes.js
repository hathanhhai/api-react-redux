import React, { Component } from 'react';
import HomePage from './pages/home_page/home_page';
import NotFoundPage from './pages/not_found_page/not_found_page';
import ProductListPage from './pages/product_page/product_list_page';
import ProductActionPage from './pages/product_action_page/product_action_page';
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
        main:()=><ProductActionPage />
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main:({match})=><ProductActionPage match={match} />
    },
    {
        path:'',
        exact:false,
        main:()=> <NotFoundPage/>
    },
   
];

export default routes;
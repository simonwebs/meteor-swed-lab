import React from 'react';
import { Header } from './common/header/Header.jsx';
import { Footer } from './common/footer/Footer.jsx';
import { MainRoutes } from './common/main/MainRoutes.jsx';
import { BrowserRouter, Outlet } from 'react-router-dom';

export const App = () => { 
   
    return( 
    <>
   
    <div>
    <BrowserRouter>
    <Header/>
    <div className="dark:bg-slate-800 bg-white ring-slate-900/5  dark:text-white">
    <MainRoutes />
    </div>

    <Footer/>
        <Outlet />
    </BrowserRouter>
    </div>
    </>
);
 }
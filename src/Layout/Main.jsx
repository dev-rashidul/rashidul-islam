import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/pages/shared/Footer/Footer';
import Header from '../components/pages/shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
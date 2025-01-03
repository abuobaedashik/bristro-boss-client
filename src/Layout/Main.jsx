import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import Navbar from '../Pages/Shared/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
              <div className="my-20">
                <Outlet></Outlet>
              </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;
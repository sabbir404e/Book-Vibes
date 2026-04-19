import React from 'react';
import Navbar from '../components/shared/navbar/Navbar';
import { Outlet } from 'react-router';
import Homepage from '../pages/hompage/Homepage';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Homepage></Homepage>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
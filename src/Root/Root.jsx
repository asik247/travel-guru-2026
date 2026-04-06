import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import bgImage from '../assest/images/Rectangle 1.png'

const Root = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="min-h-screen bg-black/40">
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
};

export default Root;
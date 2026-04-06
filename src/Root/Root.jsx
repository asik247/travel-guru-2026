import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import bgImage from '../assest/images/Rectangle 1.png'

const Root = () => {
    return (
        <div  style={{backgroundImage:`url(${bgImage})`}} >
          
           <div>
             <Navbar></Navbar>
            <Outlet></Outlet>
           </div>
        </div>
    );
};

export default Root;
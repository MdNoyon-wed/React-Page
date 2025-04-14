import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import SideBer from '../sideber/SideBer';
import'./Root.css'
import Header from '../header/Header';


 
 
 

const Root = () => {
  return (
    <div>
      <Header></Header>
      <div className="root-main">
       <SideBer></SideBer>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;
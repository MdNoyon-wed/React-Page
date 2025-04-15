import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../footer/Footer';
import SideBer from '../sideber/SideBer';
import'./Root.css'
import Header from '../header/Header';





const Root = () => {

  const navigation = useNavigation();
  const isNavigation =Boolean(navigation.location)
  return (
    <div>
      <Header></Header>
      <div className="root-main">
       <SideBer></SideBer>
       {isNavigation && <span>Loding...</span>}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      
    </div>
  );
};

export default Root;
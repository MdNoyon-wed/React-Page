import React from 'react';
import { Link } from 'react-router';
import'./Header.css'

const Header = () => {
  return (
    <div>
      <h3>Header</h3>
      <nav>
      {/* <a href="/">Home</a>
        <a href="mobiles">Mobiles</a>
        <a href="laptops">Laptops</a>
        <a href=""></a> */}

        <Link to="/home">Home</Link>
        <Link to="/mobiles">Mobiles</Link>
        <Link to="/laptops">Laptops</Link>
        <Link to="/users">Users</Link>
        <Link to="/users2">Users2</Link>
         
      </nav>
    </div>
  );
};

export default Header;
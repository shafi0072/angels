import React from 'react';
import Products from '../../Products/Products';
import Navbar from '../../Shared/Navbar/Navbar';
import Carosel from '../Carosel/Carosel';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Carosel/>
            <Products/>
        </div>
    );
};

export default Home;
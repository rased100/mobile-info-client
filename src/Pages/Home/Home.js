import React from 'react';
import AddProduct from '../Admin/AddProduct/AddProduct';
import Header from '../Header/Header';
import Products from '../Products/Products';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <AddProduct></AddProduct>

        </div>
    );
};

export default Home;
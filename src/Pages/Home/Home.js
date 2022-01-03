import React from 'react';
import AddProduct from '../Admin/AddProduct/AddProduct';
import Header from '../Header/Header';
import Products from '../Products/Products';
import AddReview from '../Review/AddReview';
import Reviews from '../Review/Reviews';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <AddProduct></AddProduct>
            <Reviews></Reviews>
            {/* <AddReview></AddReview> */}

        </div>
    );
};

export default Home;
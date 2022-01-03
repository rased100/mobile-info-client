import React from 'react';
import AddProduct from '../Admin/AddProduct/AddProduct';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import AddReview from '../Review/AddReview';
import Reviews from '../Review/Reviews';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <AddProduct></AddProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;
import React from 'react';
import AddProduct from '../Admin/AddProduct/AddProduct';
import Banner from '../Banner/Banner';
import Bestsellingproducts from '../Bestsellingproducts/Bestsellingproducts';
import Filter from '../filter/Filter';
import Filtering from '../Filtering/Filtering/Filtering';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Products from '../Products/Products';
import AddReview from '../Review/AddReview';
import Reviews from '../Review/Reviews';
import Topproducts from '../Topproducts/Topproducts';



const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <Topproducts></Topproducts>
            <Bestsellingproducts></Bestsellingproducts>
            <AddProduct></AddProduct>
            <Footer></Footer>
        </div>
    );
};

export default Home;
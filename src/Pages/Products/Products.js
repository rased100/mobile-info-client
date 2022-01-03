import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../hooks/useAuth';
import Product from './Product';
import './Product.css'

const Products = () => {
    const [users, setusers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setusers(data));
    }, [])
    console.log(users);
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="secondary" />
    };
    return (
        <div className='container mt-5 my-5  rounded-3 shadow-color' >

            <div className="row">
                <h1 className="mt-5 mb-4 hover product-size">Our Exclusive Collection</h1>
                {
                    users.map(user => <Product key={user._id} user={user}></Product>)
                }

            </div>

        </div>
    );
};

export default Products;
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import useAuth from '../hooks/useAuth';
import MoreProduct from './MoreProduct';

const MoreProducts = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/moreitems')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])
    console.log(users);
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner animation="border" variant="success" />
    };
    return (

        <div>
            <Header></Header>
            <div className='container mt-5 my-5 rounded-3' >
                <div className="row">
                    <h1 className="mt-5 mb-3 hover product-size">Our More Phones</h1>
                    {
                        users.map(user => <MoreProduct key={user._id} user={user}></MoreProduct>)
                    }

                </div>

            </div>
        </div>
    );
};

export default MoreProducts;
import React, { useEffect, useState } from 'react';
import Bestsellingproduct from './Bestsellingproduct';

const Bestsellingproducts = () => {
    const [bestsellingproducts, setBestsellingproducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/bestsellingproducts?bsp=yes`
        fetch(url)
            .then(res => res.json())
            .then(data => setBestsellingproducts(data));
    }, [])
    return (
        <div className='container mt-5 my-5  rounded-3 shadow-color' >

            <div className="row">
                <h1 className="mt-5 mb-4 hover product-size">Best Selling Products</h1>
                {
                    bestsellingproducts.map(bestsellingproduct => <Bestsellingproduct key={bestsellingproduct._id} bestsellingproduct={bestsellingproduct}></Bestsellingproduct>)
                }

            </div>

        </div>
    );
};

export default Bestsellingproducts;
import React, { useEffect, useState } from 'react';
import Topproduct from '../Topproduct/Topproduct';

const Topproducts = () => {
    const [topProducts, setTopProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/topproducts?top=yes`
        fetch(url)
            .then(res => res.json())
            .then(data => setTopProducts(data));
    }, [])
    return (
        <div className='container mt-5 my-5  rounded-3 shadow-color' >

            <div className="row">
                <h1 className="mt-5 mb-4 hover product-size">Top Products</h1>
                {
                    topProducts.map(topproduct => <Topproduct key={topproduct._id} topproduct={topproduct}></Topproduct>)
                }

            </div>

        </div>
    );
};

export default Topproducts;
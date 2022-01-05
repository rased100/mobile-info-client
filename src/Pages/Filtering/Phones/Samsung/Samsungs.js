import React, { useEffect, useState } from 'react';
import Samsung from './Samsung';

const Samsungs = () => {
    const [samsungs, setSamsungs] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/filterphone?category=samsung`
        fetch(url)
            .then(res => res.json())
            .then(data => setSamsungs(data));
    }, [])
    return (
        <div className='container mt-5 my-5  rounded-3 shadow-color' >

            <div className="row">
                <h1 className="mt-5 mb-4 hover product-size">Samsung</h1>
                {
                    samsungs.map(samsung => <Samsung key={samsung._id} samsung={samsung}></Samsung>)
                }

            </div>

        </div>
    );
};

export default Samsungs;
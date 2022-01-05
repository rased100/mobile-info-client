import React, { useEffect, useState } from 'react';
import Iphone from './Iphone';

const Iphones = () => {
    const [iphones, setIphones] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/filterphone?category=iphone`
        fetch(url)
            .then(res => res.json())
            .then(data => setIphones(data));
    }, [])
    return (
        <div className='container mt-5 my-5  rounded-3 shadow-color' >

            <div className="row">
                <h1 className="mt-5 mb-4 hover product-size">iphone</h1>
                {
                    iphones.map(iphone => <Iphone key={iphone._id} iphone={iphone}></Iphone>)
                }

            </div>

        </div>
    );
};

export default Iphones;
import React from 'react';
import { Link } from 'react-router-dom';

const MoreProduct = (props) => {
    //distructuring
    const { _id, img, name, price } = props.user
    return (
        <div className="col-md-2">
            <div className="text-center">
                <div>
                    <img src={img} alt="" />
                </div>
                <div className=" text-dark">
                    <h5>{name}</h5>
                    <h5>$ {price}</h5>
                </div>
                <Link to={`/ordernow/${_id} `}>
                    Add To Cart
                </Link>

            </div>
        </div >
    );
};

export default MoreProduct;
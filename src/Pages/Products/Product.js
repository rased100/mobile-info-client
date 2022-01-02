import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //distructuring
    const { _id, img, name, price } = props.user
    return (
        <div className="col-md-3" >
            <div className="text-center">
                <div className="">
                    <img src={img} alt="" className='' />
                </div>
                <div className="text-dark">
                    <h5 className="">{name}</h5>
                    <h5 className=''>$ {price}</h5>
                </div>
                <Link to={`/ordernow/${_id} `} className='' >
                    Add To Cart
                </Link>

            </div>
        </div >
    )
};

export default Product;
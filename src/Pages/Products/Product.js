import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    //distructuring
    const { _id, img, name, price } = props.user
    return (
        <div className="col-md-3" >
            <div className="card text-center">
                <div className="">
                    <img src={img} alt="" className='' />
                </div>
                <div className="card-body text-dark">
                    <h5 className="card-title hover">{name}</h5>
                    <h5 className='price'>$ {price}</h5>
                    <Link to={`/ordernow/${_id} `} className='cart' >
                        Add To Cart
                    </Link>
                </div>


            </div>
        </div >
    )
};

export default Product;
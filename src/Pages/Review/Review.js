import React from 'react';
import RatingIcon from './RatingIcon';
import './Reveiw.css'

const Review = (props) => {
    const { email, comments, rating } = props.review
    return (
        <div className="col-md-4 my-2">
            <div className="mx-2 my-1 p-2 border border-2 cart-1">
                <p>{email}</p>
                <div>
                    <h3 className="rating-size hover">  <RatingIcon ratings={rating}></RatingIcon>
                    </h3>
                    <p className='spacing'><small>{comments}</small></p>
                </div>


            </div>

        </div >
    );
};

export default Review;
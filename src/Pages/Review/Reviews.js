import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])


    useEffect(() => {
        fetch(`https://mobile-info-node.herokuapp.com/review`)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    console.log(reviews);
    return (
        <div>
            <div className='line'></div>
            <div className='review-bg'>
                <div className='container'>
                    <div className="row ">
                        <h1 className=" hover mb-1 mt-5">Customers Reviews</h1>

                        {
                            reviews.map(review => <Review key={review._id} review={review}></Review>)
                        }

                    </div>
                </div>
            </div>
            <div className='line'></div>
        </div>
    );
};

export default Reviews;
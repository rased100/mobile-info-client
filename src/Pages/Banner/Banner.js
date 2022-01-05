import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Particles from 'react-tsparticles';
import './Banner.css';

const Banner = () => {

    return (



        <Carousel className="Carousel">

            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100 height"
                    src="https://i.ibb.co/d5QDkNM/vivo-2.jpg
                       "
                    alt="First slide"
                />
                <Carousel.Caption className='Carousel-2'>
                    <h3 className='text-dark'>Vivo and OPPO Day 2021</h3>
                    <h6 className='text-dark'>Triple Camera Real Quality</h6>
                    <h6 className='text-dark'>Reimaging the Future</h6>
                    <Link to='/moreproduct' className="items" >Exclusive Phones <FontAwesomeIcon icon={faSignInAlt} /></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 height"
                    src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/innoday-2021/topbanner/innoday-topbanner-pc-v1202.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption className='Carousel-1'>
                    <h2 className='text-dark'>Iphone & Samsung & Xiaomi Day 2021</h2>
                    <h5 className='text-dark'>Photography Redefined</h5>
                    <h6 className='text-dark'>Reimaging the Future</h6>
                    <Link to='/moreproduct' className="items" >Exclusive Phones <FontAwesomeIcon icon={faSignInAlt} /></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100 height"
                    src="https://image.oppo.com/content/dam/oppo/common/mkt/v2-2/a16/topbanner/A16-topbanner-blue-v2-pc.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className='Carousel-2'>
                    <h3 className='text-dark'>OPPO and Realme Day 2021</h3>
                    <h6 className='text-dark'>Triple Camera Real Quality</h6>
                    <h6 className='text-dark'>Reimaging the Future</h6>
                    <Link to='/moreproduct' className="items" >Exclusive Phones <FontAwesomeIcon icon={faSignInAlt} /></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>


    );
};

export default Banner;


// https://i.ibb.co/ZgD8wTS/oppo-3.jpg
// https://i.ibb.co/ZKZmQ6L/realme-2.jpg


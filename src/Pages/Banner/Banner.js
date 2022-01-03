import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ZKZmQ6L/realme-2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Realme</h3>
                        <p>Triple Camera Real Quality</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/d5QDkNM/vivo-2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>vivo</h3>
                        <p>Photography Redefined</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ZgD8wTS/oppo-3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>oppo</h3>
                        <p>Every Emotion In Portratit</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
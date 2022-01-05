import React, { Component } from "react";
import Slider from "react-slick";
import { Card } from 'react-bootstrap';
import './Best.css'



export default class AutoPlay extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2500,
            autoplaySpeed: 200,
            cssEase: "linear"
        };
        return (
            <div className="">

                <div className="container p-4">
                    <h2 className=" p-5">Best Product</h2>
                    <Slider {...settings}>

                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f22.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Phone Corners</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f22.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Phone Corners</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f22.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Phone Corners</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f22.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Phone Corners</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-f22.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Phone Corners</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>




                    </Slider>


                </div>

            </div>
        );
    }
}


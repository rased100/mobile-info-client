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
                    <h2 className=" p-5">Best Selling Products</h2>
                    <Slider {...settings}>

                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Iphone-12-pro-max</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a03-core.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Samsung Galaxy A03</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-12x-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Xiaomi 12X</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/realme/realme-q3s-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Realme Q3s</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/vivo/vivo-iqoo-neo-5se-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">vivo iq00-ne9-5se</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno7-5g-2.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">oppo reno-7</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p50-pocket-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Huawei P50 Pocket</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-6t-thunder-purple-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">OnePlus 6T</Card.Title>

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


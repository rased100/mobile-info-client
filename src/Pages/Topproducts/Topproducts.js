import React, { Component } from "react";
import Slider from "react-slick";
import { Card } from 'react-bootstrap';
import '../Bestsellingproducts/Best.css'



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
                    <h2 className=" p-5">Top Products</h2>
                    <Slider {...settings}>

                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">IPhone 13 mini</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-9-rt-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">OnePlus 9RT 5G</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/huawei/huawei-nova-8-se-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Huawei nova 8 SE</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-m32-5g-new.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Samsung Galaxy M32</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/xiaomi/xiaomi-12-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Xiaomi 12 Pro</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/realme/realme-q3s-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">Realme Q3t</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/vivo/vivo-iqoo-u5-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">vivo iq00 u5</Card.Title>

                                    </Card.Body>
                                </div>
                            </div>
                        </Card>
                        <Card className='border border-dark border-top-0 border-bottom-0'>
                            <div className="center">
                                <div>
                                    <Card.Img variant="top" className="img-height-1 center" src="https://fdn2.gsmarena.com/vv/pics/oppo/oppo-a11s-1.jpg" />
                                    <Card.Body className='back-ground'>
                                        <Card.Title className="">oppo a11s</Card.Title>

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


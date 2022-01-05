import React from 'react';
import { Card } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div className=''>
            <Header></Header>
            <div className=''>
                <h1 className='p-5 hover product-size'>About Us</h1>
                <h4 className='pb-5 items'>MobileHut is one of the most comprehensive and up-to-date mobile phone information website. Our mission is to keep our readers informed about latest phone specifications, news and reviews. If you would like to share a thought with us which you feel would add to the relevance of the site for you, do email us at info@mobilehut.com.bd</h4>
            </div>
            <div className="row mb-5 d-flex justify-content-center align-items-center">
                <div className="col-md-3">
                    <Card className='background  border-dark'>
                        <Card.Body className="back-ground">
                            <Card.Title className="text-light">Email</Card.Title>
                            <a className="text-light"> <small>mobilehut@gmail.com</small></a>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-3">
                    <Card className='background border-dark'>
                        <Card.Body className="back-ground">
                            <Card.Title className="text-light">Address</Card.Title>
                            <Card.Text className="text-light">
                                123 Main Street, New York, NY 10030
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>

                <div className="col-md-3">
                    <Card className='background border-dark'>
                        <Card.Body className="back-ground">
                            <Card.Title className="text-light">Phone Number</Card.Title>
                            <Card.Text className="text-light">
                                +880177000000
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
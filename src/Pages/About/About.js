import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css';

const About = () => {
    return (
        <div className='aboutbg'>
            <Header></Header>
            <div className='p-5'>
                <h1 className='p-5'>About Us</h1>
                <h4 className='p-5'>MobileHut is one of the most comprehensive and up-to-date mobile phone information website. Our mission is to keep our readers informed about latest phone specifications, news and reviews. If you would like to share a thought with us which you feel would add to the relevance of the site for you, do email us at info@mobilehut.com.bd</h4>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
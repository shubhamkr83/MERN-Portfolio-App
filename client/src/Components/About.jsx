import React from 'react';
import web from '../images/cat.jpg'
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <div className="about_section" id="about">
                <h1 data-aos='zoom-in' className="about_title">About me</h1>
                <div className="about_center">
                    <figure data-aos='fade-right' className="about_left">
                        <img src={web} alt="img" />
                    </figure>

                    <div data-aos='fade-left' className="about_right">
                        <h2>Welcome to my Portfolio Website </h2>
                        <p>Hi... My name is Shubham Kumar. I belong to Aurangabad district in Bihar. I am Pursuing my Bachelor of Engineering Degree from Priyadarshini College of Engineering Nagpur, Maharashtra. I am a Full Stack Web Developer & Android Developer. </p>
                        <div className="download">
                            <a href="#" target="_blank"> Download CV</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};


export default About;
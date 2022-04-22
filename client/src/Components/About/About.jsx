import React from 'react';
import web1 from '../../images/cat-webp.webp';
import web2 from '../../images/cat-jpg.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./about.css";

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
            <section className="about_section" id="about">
                <h1 data-aos='zoom-in' className="about_title">About me</h1>
                <div className="about_center">
                    <picture data-aos='fade-right' className="about_left">
                        <source srcset={web1} type='image/webp' />
                        <source srcset={web2} type='image/jpg' />
                        <img src={web2} alt="img" />
                    </picture>

                    <div data-aos='fade-left' className="about_right">
                        <h2>Welcome to my Portfolio Website </h2>
                        <p>Hi... My name is Shubham Kumar. I belong to Aurangabad district in Bihar. I am Pursuing my Bachelor of Engineering Degree from Priyadarshini College of Engineering Nagpur, Maharashtra. I am a Full Stack Web Developer & Android Developer. </p>
                        <div className="download">
                            <a href="https://drive.google.com/file/d/15yuxTWIae_pKkgUzwP1NZ2S3g90nb7Jk/view?usp=sharing" target="_blank" rel="noreferrer"> Download CV</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
};


export default About;
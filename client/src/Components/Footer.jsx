import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Footer = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 80,
            easing: 'ease-in-sine',
            // delay: 100,
        });
    }, []);

    return (
        <>
            <div className="footer_section">
                <div className="footer_center">
                    <div className="footer_top">
                        <h2 data-aos='zoom-in'>Shubham</h2>
                    </div>
                    <div className="footer_middle">
                        <div data-aos='fade-right' className="left_section">
                            <h2>Explore</h2>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div data-aos='fade-left' className="right_section">
                            <h2>Contact</h2>
                            <h3>shubham.krsaw836@gmail.com</h3>
                            <h2>Follow</h2>
                            <div className="social_icons">
                                <a href="#" className="face"><FacebookIcon /></a>
                                <a href="https://twitter.com/KrShubhamDev" className="twit"><TwitterIcon /></a>
                                <a href="https://www.instagram.com/shubhamkrdev/" target="_blank" className="inst"><InstagramIcon /></a>
                                <a href="https://www.linkedin.com/in/shubham-kumar836" target="_blank" className="link"><LinkedInIcon /></a>
                                <a href="https://github.com/shubhamkr83" target="_blank" className="link"><GitHubIcon /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer_bottom">
                    <h2>©Copyright 2021 by Shubham Kr | All rights reserved</h2>
                </div>
            </div>
        </>
    )
};


export default Footer;
import React from 'react';
import web1 from '../../../images/img32.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./home.css";


const Home = () => {

    useEffect(() => {

        Aos.init({
            duration: 2000,
            offset: 100,
        });

    }, []);

    return (
        <>
            <section className="home_section" id="home">
                <div className="center_home">
                    <div data-aos='fade-right' className="left_sec">
                        <h1> <span className="span" > Shubham </span> Kumar</h1>
                        <h2>Web & Android Developer</h2>
                        <div className="icons">
                            <a href="#" target="_blank" rel="noreferrer"><FacebookIcon /></a>
                            <a href="https://twitter.com/KrShubhamDev" target="_blank" rel="noreferrer"><TwitterIcon /></a>
                            <a href="https://www.instagram.com/shubhamkrdev/" target="_blank" rel="noreferrer"><InstagramIcon /></a>
                            <a href="https://www.linkedin.com/in/shubham-kumar836" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                            <a href="https://github.com/shubhamkr83" target="_blank" rel="noreferrer"><GitHubIcon /></a>
                        </div>
                    </div>
                    <div data-aos='fade-left' className="right_sec">
                        <img src={web1} alt="img" className="shubham" />
                    </div>
                </div>
            </section>
        </>
    )
};


export default Home;
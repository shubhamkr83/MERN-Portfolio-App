import React from 'react';
import web1 from '../images/front.jpg';
import web2 from '../images/back.jpg';
import web3 from '../images/and.png';
import web4 from '../images/powerbi.png';
import web5 from '../images/database.png';
import web6 from '../images/data.png';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Skill = () => {

    useEffect(() => {
        Aos.init({
            duration: 5000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <section className="skill_section">
                <h1 data-aos='zoom-in' className="skill_title">Skills</h1>
                <div className="center_section">
                    <div data-aos='flip-left' className="card">
                        <h2>Front-End Development</h2>
                        <img src={web1} alt="img1" />
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>Back-End Development</h2>
                        <img src={web2} alt="img2" />
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>Android Development</h2>
                        <img src={web3} alt="img3" />
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>DBMS</h2>
                        <img src={web5} alt="img3" />
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>DSA</h2>
                        <img src={web6} alt="img3" />
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>Power BI</h2>
                        <img src={web4} alt="img3" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;
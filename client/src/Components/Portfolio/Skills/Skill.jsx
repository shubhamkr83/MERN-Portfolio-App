import React from 'react';
import webp1 from '../../../images/front-webp.webp';
import webj1 from '../../../images/front-jpg.jpg';
import webp2 from '../../../images/back-webp.webp';
import webj2 from '../../../images/back-jpg.jpg';
import webp3 from '../../../images/java-webp.webp';
import webj3 from '../../../images/java-jpg.jpg';
import webp4 from '../../../images/powerbi-webp.webp';
import webj4 from '../../../images/powerbi-jpg.jpg';
import webp5 from '../../../images/database-webp.webp';
import webj5 from '../../../images/database-jpg.jpg';
import webp6 from '../../../images/data-webp.webp';
import webj6 from '../../../images/data-jpg.jpg';
import webp7 from '../../../images/os-webp.webp';
import webj7 from '../../../images/os-jpg.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./skill.css";


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
                        <picture>
                            <source srcset={webp1} type='image/webp' />
                            <source srcset={webj1} type='image/jpg' />
                            <img src={webj1} alt="img" />
                        </picture>
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>Back-End Development</h2>
                        <picture>
                            <source srcset={webp2} type='image/webp' />
                            <source srcset={webj2} type='image/jpg' />
                            <img src={webj2} alt="img" />
                        </picture>
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>JAVA</h2>
                        <picture>
                            <source srcset={webp3} type='image/webp' />
                            <source srcset={webj3} type='image/jpg' />
                            <img src={webj3} alt="img" />
                        </picture>
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>DBMS</h2>
                        <picture>
                            <source srcset={webp5} type='image/webp' />
                            <source srcset={webj5} type='image/jpg' />
                            <img src={webj5} alt="img" />
                        </picture>
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>DSA</h2>
                        <picture>
                            <source srcset={webp6} type='image/webp' />
                            <source srcset={webj6} type='image/jpg' />
                            <img src={webj6} alt="img" />
                        </picture>
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>OS</h2>
                        <picture>
                            <source srcset={webp7} type='image/webp' />
                            <source srcset={webj7} type='image/jpg' />
                            <img src={webj7} alt="img" />
                        </picture>
                    </div>
                    <div data-aos='flip-left' className="card">
                        <h2>Power BI</h2>
                        <picture>
                            <source srcset={webp4} type='image/webp' />
                            <source srcset={webj4} type='image/jpg' />
                            <img src={webj4} alt="img" />
                        </picture>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;
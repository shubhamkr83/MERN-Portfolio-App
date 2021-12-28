import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import FrontEnd from './TechData';
import { BackEnd, Others } from './TechData';

const Technology = () => {

    const [Front, setFront] = useState(FrontEnd);
    const [Back, setBack] = useState(BackEnd);
    const [Other, setOther] = useState(Others);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <div className="tech_section">
                <div className="tech_center">

                    <h2 data-aos='zoom-in' className="tech_title">Front-End Skill</h2>
                    <div className="tech_front">
                        {
                            Front.map((elem) => {
                                const { id, image, name } = elem;

                                return (
                                    <div data-aos='fade-right' className="tech" key={id}>
                                        <img src={image} alt={name} />
                                        <h2>{name}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <h2 data-aos='zoom-in' className="tech_title">Back-End & Database Skill</h2>
                    <div className="tech_back">
                        {
                            Back.map((elem) => {
                                const { id, image, name } = elem;

                                return (
                                    <div data-aos='fade-right' className="tech" key={id}>
                                        <img src={image} alt={name} />
                                        <h2>{name}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <h2 data-aos='zoom-in' className="tech_title">Others Skill</h2>
                    <div className="others">
                        {
                            Other.map((elem) => {
                                const { id, image, name } = elem;

                                return (
                                    <div data-aos='fade-right' className="tech" key={id}>
                                        <img src={image} alt={name} />
                                        <h2>{name}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </>
    );
};

export default Technology;
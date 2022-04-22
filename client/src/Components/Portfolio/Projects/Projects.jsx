import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';
import ProjectData from "./ProjectData";
import "./project.css";


const allCategory = [...new Set(ProjectData.map((curElem) => curElem.category)), "All"];

const Projects = () => {

    const [items, setItems] = useState(ProjectData);
    const [catItems, setCatItems] = useState(allCategory);

    const filterItem = (category) => {

        if (category === "All") {
            setItems(ProjectData);
            return;
        }
        const updatedItems = ProjectData.filter((curElem) => {
            return curElem.category === category;
        });

        setItems(updatedItems);
    }

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 100,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <>
            <section className="project_section" id="projects">
                <h2 data-aos='zoom-in' className="project_title">Projects Preview</h2>
                <div data-aos='fade-left' className="project_nav">
                    {
                        catItems.map((curElem, index) => {
                            return <button key={index} onClick={() => filterItem(curElem)}>{curElem}</button>
                        })
                    }

                </div>
                <div className="project_center">

                    {
                        items.map((elem) => {
                            const { id, name, image1, image2, link } = elem;

                            return (
                                <div data-aos='fade-left' className="project" key={id}>
                                    <a href={link} target="_blank" rel="noreferrer">
                                        <picture>
                                            <source srcset={image1} type='image/webp' />
                                            <source srcset={image2} type='image/jpg' />
                                            <img src={image1} alt="img" />
                                        </picture>
                                        <h2>{name}</h2>
                                    </a>
                                </div>
                            )
                        })
                    }

                </div>
            </section>

        </>
    );
};

export default Projects;
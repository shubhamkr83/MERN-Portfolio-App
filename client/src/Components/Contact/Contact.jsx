import React from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
// import { Zoom } from '@material-ui/core';
import "./contact.css";

const Contact = () => {

    const customId = "custom-id-yes";

    // const history = useHistory();

    const [user, setUser] = useState({
        name: "", email: "", phone: "", message: "",
    });

    let name, value;

    const handleInputs = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    }


    // const PostData = async (e) => {
    //     e.preventDefault();

    //     const { name, email, phone, message } = user;

    //     const res = await fetch("/contact", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ name, email, phone, message })
    //     });

    //     const data = await res.json();
    //     if (data.status === 422 || !data) {
    //         window.alert("Invalid Registration");
    //         console.log("Invalid Registration");
    //     } else {
    //         window.alert("Registration Successful");
    //         console.log("Registration Successful");

    //         history.push("#home");
    //     }
    // }

    function sendEmail(e) {
        e.preventDefault();
        const { name, email, phone, message } = user;

        if (!name || !email || !phone || !message) {

            toast.warn("Plz fill all the fields", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
                pauseOnHover: false,
                toastId: customId,
                draggable: false,
            })

        } else {
            emailjs.sendForm(
                'service_1lmgnfb',
                'template_7fwj6nv',
                e.target,
                'user_drrUOLk9Cjm6u5uvfMEGQ'
            ).then(res => {
                // alert(res);
                toast.success("Thanks For Contacting Us", {
                    position: "top-center",
                    autoClose: 3000,
                    theme: "colored",
                    pauseOnHover: false,
                    toastId: customId,
                    draggable: false,
                })
            }).catch(err => console.log(err));
        }
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
            <form className="contact_section" id="contact" method="POST" onSubmit={sendEmail}>
                <h2 data-aos='zoom-in'>Contact Us</h2>
                <div className="center_contact">
                    <div data-aos='fade-up' className="input_section">
                        <label>FullName</label>
                        <input type="text"
                            name="name"
                            placeholder="Enter your fullname"
                            value={user.name}
                            onChange={handleInputs}
                        />
                    </div>
                    <div data-aos='fade-up' className="input_section">
                        <label>Email Id</label>
                        <input type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={user.email}
                            onChange={handleInputs}
                        />
                    </div>
                    <div data-aos='fade-up' className="input_section">
                        <label>Phone No.</label>
                        <input type="number"
                            name="phone"
                            placeholder="Enter your phone"
                            value={user.phone}
                            onChange={handleInputs}
                        />
                    </div>
                    <div data-aos='fade-up' className="input_text">
                        <label>Message</label>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={user.message}
                            onChange={handleInputs}
                        >
                        </textarea>
                    </div>

                    <input type="submit" value="Send" data-aos='fade-up' className="submit_button" />
                    {/* <button onClick={PostData}>
                        Submit
                    </button> */}
                </div>
            </form>
            <ToastContainer />
        </>
    )
};


export default Contact;
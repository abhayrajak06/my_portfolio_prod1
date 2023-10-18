import React, { useRef, useState } from "react";
import "./Contact.css";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
import { useTheme } from "../../context/ThemeContext";
import { toast } from "react-toastify";

const Contact = () => {
  const [theme] = useTheme();
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const serviceId = import.meta.env.VITE_REACT_APP_YOUR_SERVICE_ID;
  console.log(serviceId);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_dqf5qel",
  //       "template_47rj40p",
  //       form.current,
  //       "cVS65uSZeidHxtO4H"
  //     )
  //     .then(
  //       (result) => {
  //         setUsername("");
  //         setUseremail("");
  //         setMessage("");
  //         toast.success("Your message was sent successfully");
  //       },
  //       (error) => {
  //         // console.log(error.text);
  //         toast.error(error.text);
  //       }
  //     );
  // };

  return (
    <div id={theme}>
      <div className="contact">
        <div className="container mt-2" style={{ marginBottom: "8rem" }}>
          <div
            className="row contact-section mt-5"
            style={{
              borderRadius: "1rem",
              // border: "5px solid red",
              boxShadow: "1px 1px 3px 3px rgba(0, 0, 0, 0.22)",
            }}
          >
            <div
              className="col-md-6 d-flex flex-wrap justify-content-center align-items-center mb-1"
              style={{ borderRight: "0.01px solid rgba(0,0,0,0.15)" }}
            >
              <div className="img" style={{ padding: "0.2rem" }}>
                <img src="assets/contact.jpg" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex contact-card card border-0 px-4 py-5">
                <h6>
                  Contact With
                  <a
                    href="https://www.linkedin.com/in/abhay-rajak-5b2b61202/"
                    target="blank"
                    className="p-2"
                  >
                    <BsLinkedin color="blue" size={25} className="ms-2" />
                  </a>
                  <a target="blank" href="https://github.com/abhayrajak06">
                    <BsGithub color="black" size={25} className="ms-2" />
                  </a>
                </h6>

                <div className="row or-design px-3 mb-4">
                  <div className="line" />
                  <h6 className="or">OR</h6>
                  <div className="line" />
                </div>

                <form>
                  <div className="row px-3">
                    <input
                      type="text"
                      name="user_name"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      placeholder="Enter your Name"
                      className="mb-3"
                      required
                    />
                  </div>
                  <div className="row px-3">
                    <input
                      type="email"
                      name="user_email"
                      onChange={(e) => setUseremail(e.target.value)}
                      value={useremail}
                      placeholder="Enter Your Email Address"
                      className="mb-3"
                      required
                    />
                  </div>
                  <div className="row px-3">
                    <textarea
                      type="text"
                      name="message"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      placeholder="Write your message"
                      className="mb-3"
                      required
                    />
                  </div>
                  <div className="row px-3">
                    <button className="button" type="submit" value="Send">
                      SEND MESSAGE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

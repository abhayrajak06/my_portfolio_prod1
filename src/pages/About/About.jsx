import React from "react";
import "./About.css";
import { useTheme } from "../../context/ThemeContext";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Fade right>
          <div className="about">
            <div className="container">
              <div
                className="row"
                style={{
                  borderRadius: "1rem",
                  boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.35)",
                }}
              >
                <div className="col-md-6 about-pic">
                  <img src="assets/avatar.jpg" alt="profile" />
                </div>
                <div className="col-md-6 mt-2 about-content">
                  <h1 className="text-center">About Me</h1>
                  <p>
                    I am Abhay Rajak, a dedicated and passionate front-end
                    developer, specializing in React JS technology. My
                    enthusiasm for creating dynamic and user-friendly web
                    applications is evident in my work. Currently, I am actively
                    seeking job opportunities in React JS and front-end
                    development, eager to contribute my skills and expertise to
                    innovative projects. My commitment to staying updated with
                    the latest web development trends and technologies makes me
                    a promising addition to any development team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default About;

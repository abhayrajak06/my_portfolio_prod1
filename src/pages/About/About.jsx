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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, et! Itaque eligendi quidem ab veniam veritatis
                    tempora odit voluptas quis vero ipsa non, laborum
                    exercitationem quam vel nobis maxime sint inventore,
                    suscipit, nihil velit ex corporis! Delectus quasi dicta id
                    accusamus minima error dolorum aperiam. Necessitatibus
                    provident ipsa suscipit consequatur facere cum magnam eaque
                    minima quod excepturi quos vel cupiditate harum esse, nam
                    saepe reiciendis tenetur nemo possimus, ratione quibusdam.
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

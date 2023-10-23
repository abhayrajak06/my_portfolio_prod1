import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../components/assets/docs/Abhay_Rajak_Resume.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { useTheme } from "../../context/ThemeContext";
import { Slide } from "react-awesome-reveal";

const Home = () => {
  const [theme, setTheme] = useTheme();

  //handle theme
  const handleTheme = () => {
    setTheme((pState) => (pState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="home-container bg-dark">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={20} />
          ) : (
            <BsFillSunFill size={22} />
          )}
        </div>

        <div className="container home-content">
          <Slide direction="right">
            <h4>Hi I'm a .....</h4>
            <h3>
              <Typewriter
                options={{
                  strings: [
                    "Front-end Developer",
                    "React JS Developer!",
                    "Web Developer!",
                    "MERN stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>

            <div className="home-buttons">
              <a
                href="mailto:abhayrajak1006@gmail.com"
                className="btn btn-hire"
              >
                Hire Me
              </a>
              <a
                href="https://github.com/abhayrajak06"
                className="btn btn-git"
                target={"blank"}
                title="GitHub"
              >
                <AiFillGithub size={25} />
              </a>
              <a
                href={Resume}
                download={"Abhay_Rajak.pdf"}
                className="btn btn-cv"
              >
                My Resume
              </a>
            </div>
          </Slide>
        </div>
      </div>
    </>
  );
};

export default Home;

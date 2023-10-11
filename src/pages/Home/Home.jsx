import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import Resume from "../../components/assets/docs/abhay.pdf";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
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
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>

        <div className="container home-content">
          <Slide direction="right">
            <h2>Hi I'm a .....</h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Web Developer!",
                    "React JS Developer!",
                    "MERN stack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <div className="home-buttons">
              <button className="btn btn-hire">Hire Me</button>
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

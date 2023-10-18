import React from "react";
import Footer from "../Footer/Footer";
import Menu from "../Menu/Menu";
import Home from "../../pages/Home/Home";
import "./Layout.css";
import About from "../../pages/About/About";
import Education from "../../pages/Education/Education";
import Techstack from "../../pages/Techstack/Techstack";
import Projects from "../../pages/Projects/Projects";
import WorkExp from "../../pages/WorkExp/WorkExp";
import Contact from "../../pages/Contact/Contact";
import { useTheme } from "../../context/ThemeContext";

const Layout = () => {
  const [theme] = useTheme();
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col-md-2 col-sm-2 col-2"
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
            backgroundColor: "#1e1e2c",
          }}
        >
          <Menu />
        </div>
        <div
          className="col-sm-10  col-md-10 col-10 p-0"
          id={theme}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div className="" id="home">
            <Home />
          </div>
          <div className="" id="about">
            <About />
          </div>
          <div className="" id="education">
            <Education />
          </div>
          <div className="" id="techstack">
            <Techstack />
          </div>
          {/* <hr /> */}
          <div className="" id="projects">
            <Projects />
          </div>
          <div className="" id="workexp">
            <WorkExp />
          </div>
          <div className="" id="contact" style={{ height: "100vh" }}>
            <Contact />
          </div>
          <div className="mb-2 mt-2" style={{ height: "10vh" }}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;

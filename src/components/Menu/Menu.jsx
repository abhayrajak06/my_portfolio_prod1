import React from "react";
import "./Menu.css";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
} from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { Link } from "react-scroll";

const Menu = () => {
  return (
    <>
      <div>
        <div className="navbar-profile-pic">
          <img
            // src="https://th.bing.com/th/id/OIP.dYWvYkXgj1jP66ZZ6PzY0QHaGc?pid=ImgDet&rs=1"
            src="assets/avatar.jpg"
            alt="profile"
          />
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link active">
              <Link to="home" smooth={true} spy={true} duration={100}>
                <FcHome />
                Home
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link to="about" smooth={true} spy={true} duration={100}>
                <FcAbout />
                About
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link to="education" smooth={true} spy={true} duration={100}>
                <FcReadingEbook />
                Education
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link to="techstack" smooth={true} spy={true} duration={100}>
                <FcBiotech />
                Tech Stack
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link to="projects" smooth={true} spy={true} duration={100}>
                <GrProjects style={{ backgroundColor: "#f5e3cd" }} />
                Projects
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link to="workexp" smooth={true} spy={true} duration={100}>
                <FcPortraitMode />
                Work Experience
              </Link>
            </div>
          </div>
          <div className="nav-item">
            <div className="nav-link">
              <Link to="contact" smooth={true} spy={true} duration={100}>
                <FcBusinessContact />
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;

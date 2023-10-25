import React from "react";
import "./Projects.css";
import { projectList } from "../../utils/ProjectList";
import { useTheme } from "../../context/ThemeContext";

const Projects = () => {
  const [theme] = useTheme();
  return (
    <div id={theme}>
      <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="mt-4 text-center" style={{ fontWeight: "bold" }}>
                <u style={{ color: "#136211" }}>Top Recent Projects</u>
              </h2>
              <p className="text-center mt-4" style={{ fontWeight: "bold" }}>
                👉 Here are some of my latest exciting projects, showcasing my
                skills and dedication to creating impactful solutions.
              </p>
            </div>
          </div>
          <div className="row m-1">
            <div className="projectsec col-md-12 d-flex flex-wrap gap-5 m-2 mt-3 justify-content-between mb-5">
              {projectList.map((p) => (
                <div
                  key={p.id}
                  className="card p-card"
                  style={{ width: "23.9rem" }}
                >
                  <img
                    src={p.image}
                    className="card-img-top"
                    style={{
                      borderBottom: "1.2px solid gray",
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                      height: "12rem",
                    }}
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p
                      className="card-text"
                      style={{
                        height: "9rem",
                        overflow: "auto",
                        fontSize: "0.84rem",
                        fontWeight: "bold",
                      }}
                    >
                      {p.description}
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <a
                        href={p.liveDemo}
                        className="btn ad-btn"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                      <a
                        href={p.sourceCode}
                        className="btn ad-btn"
                        target="blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

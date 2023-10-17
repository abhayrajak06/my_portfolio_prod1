import React from "react";
import "./WorkExp.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { AiFillHtml5 } from "react-icons/ai";
import { useTheme } from "../../context/ThemeContext";

const WorkExp = () => {
  const [theme] = useTheme();
  return (
    <div className="workexp" id={theme}>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-4">
            <h2
              className="mt-4 text-center mb-4"
              style={{ fontWeight: "bold" }}
            >
              <u style={{ color: "#136211" }}>Work Experience</u>
            </h2>

            <VerticalTimeline lineColor="#1e1e2c">
              <VerticalTimelineElement
                className="vertical-timeline-element--work edu-card"
                contentStyle={{ background: "white", color: "black" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date="Sep 2022 - Nov 2022"
                iconStyle={{ background: "#138781", color: "#fff" }}
                icon={<AiFillHtml5 />}
              >
                <h3 className="vertical-timeline-element-title text-success">
                  Web Designing
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  Ardent Computech Pvt. Ltd.
                </h5>
                <p>
                  I've learnt web designing using HTML, CSS, and Bootstrap. Made
                  a major project "Gaming Website" .
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work edu-card"
                contentStyle={{ background: "white", color: "black" }}
                contentArrowStyle={{ borderRight: "7px solid  white" }}
                date="2023 - Present"
                iconStyle={{ background: "#138781", color: "#fff" }}
                icon={<AiFillHtml5 />}
              >
                <h3 className="vertical-timeline-element-title text-success">
                  Frontend Developer
                </h3>
                <h5 className="vertical-timeline-element-subtitle">Codesoft</h5>
                <p>Working as a frontend developer Intern.</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExp;

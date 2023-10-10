import React from "react";
import "./Education.css";
import { MdSchool, MdEngineering } from "react-icons/md";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useTheme } from "../../context/ThemeContext";

const Education = () => {
  const [theme] = useTheme();
  return (
    <div id={theme}>
      <div className="education edu">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mb-4">
              <h2
                className="mt-4 text-center mb-4"
                style={{ fontWeight: "bold" }}
              >
                <u style={{ color: "#136211" }}>Education Details</u>
              </h2>

              <VerticalTimeline lineColor="#1e1e2c">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work edu-card"
                  contentStyle={{ background: "white", color: "black" }}
                  contentArrowStyle={{ borderRight: "7px solid  white" }}
                  date="2019 - 2023"
                  iconStyle={{ background: "#138781", color: "#fff" }}
                  icon={<MdEngineering />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Bachelor of Engineering
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    University Institute of Technology, Burdwan University
                  </h5>
                  <p>Computer Science and Engineering : 8.8 CGPA</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work edu-card"
                  contentStyle={{ background: "white", color: "black" }}
                  contentArrowStyle={{ borderRight: "7px solid  white" }}
                  date="2017 - 2019"
                  iconStyle={{ background: "#138781", color: "#fff" }}
                  icon={<MdSchool />}
                >
                  <h3 className="vertical-timeline-element-title">
                    Higher Secondary
                  </h3>
                  <h5 className="vertical-timeline-element-subtitle">
                    Beliatore High School (H.S)
                  </h5>
                  <p>Science : 81%</p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

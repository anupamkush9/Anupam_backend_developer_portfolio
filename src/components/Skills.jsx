import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAws, FaPython, FaDocker, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { SiDjango, SiMysql, SiPostgresql } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "HTML",
      icon: <FaHtml5 className="cert-icon" />
    },
    {
      id: 2,
      title: "CSS",
      icon: <FaCss3Alt className="cert-icon" />
    },
    {
      id: 3,
      title: "JavaScript",
      icon: <FaJs className="cert-icon" />
    },
    // {
    //   id: 4,
    //   title: "React",
    //   icon: <FaReact className="cert-icon" />
    // },
    {
      id: 5,
      title: "Django Rest Framework",
      icon: <SiDjango className="cert-icon" />
    },
    {
      id: 6,
      title: "MySQL",
      icon: <SiMysql className="cert-icon" />
    },
    {
      id: 7,
      title: "AWS",
      icon: <FaAws className="cert-icon" />
    },
    {
      id: 8,
      title: "Python",
      icon: <FaPython className="cert-icon" />
    },
    {
      id: 9,
      title: "Django",
      icon: <SiDjango className="cert-icon" />
    },
    {
      id: 10,
      title: "Docker",
      icon: <FaDocker className="cert-icon" />
    },
    {
      id: 11,
      title: "PostgreSQL",
      icon: <SiPostgresql className="cert-icon" />
    },
    {
      id: 12,
      title: "Bootstrap",
      icon: <FaBootstrap className="cert-icon" />
    },
    {
      id: 13,
      title: "Git",
      icon: <FaGitAlt className="cert-icon" />
    },
  ];

  return (
    <div className="container skills" id="skills">
      <h1 data-aos="fade-right" className="mb-4 os-font">Skills</h1>
      <div className="items row">
        {skills.map((skill) => (
          <div 
            key={skill.id}
            className="item col-5 col-sm-4 col-md-3 col-lg-2 mb-4"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <div>
              {skill.icon}
              <h4 className="text-break text-orange">{skill.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

import React from "react";
import { FaPython, FaCode, FaGraduationCap, FaGitAlt, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiDocker, SiDjango } from "react-icons/si";
import { FiFileText } from "react-icons/fi";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Python",
      issuer: "Coursera",
      link: "https://www.coursera.org/account/accomplishments/records/KKZPGRWRWQMZ",
      icon: <FaPython className="cert-icon" />
    },
    {
      id: 2,
      title: "Web Dev",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-8e30945e-adbb-48e7-8497-58c395e32bdb/",
      icon: <FaCode className="cert-icon" />
    },
    {
      id: 3,
      title: "Docker",
      issuer: "Udemy",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-a190d331-068c-49dd-8f83-f161a06e06aa.pdf",
      icon: <SiDocker className="cert-icon" />
    },
    {
      id: 4,
      title: "Git and GitHub",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-G3EIGTSB/",
      icon: <FaGitAlt className="cert-icon" />
    },
    {
      id: 5,
      title: "Django",
      issuer: "Eduonix",
      link: "https://www.eduonix.com/certificate/56a94f3a15",
      icon: <SiDjango className="cert-icon" />
    },
    {
      id: 6,
      title: "Microsoft Excel",
      issuer: "Udemy",
      link: "https://www.udemy.com/certificate/UC-7E1T56VZ/",
      icon: <FiFileText className="cert-icon" />
    },
    {
      id: 7,
      title: "Bootstrap",
      issuer: "Coursera",
      link: "https://www.udemy.com/certificate/UC-85ERN4ZM/",
      icon: <FaBootstrap className="cert-icon" />
    },
    {
      id: 8,
      title: "SQL",
      issuer: "Cognitive Classes",
      link: "https://courses.cognitiveclass.ai/certificates/e5bc782e244f48abacd5a766a46e8af8",
      icon: <FaDatabase className="cert-icon" />
    },
    // {
    //   id: 9,
    //   title: "Python for Data Science",
    //   issuer: "Upgrad",
    //   link: "https://www.credential.net/3084d165-5754-49e9-94aa-b33437c4da12",
    //   icon: <FaPython className="cert-icon" />
    // }
  ];

  return (
    <div className="container certifications section-wrapper" id="certifications">
      <h1 data-aos="fade-right" className="st-font mb-4">Certifications</h1>
      <div className="items row">
        {certifications.map((cert) => (
          <div 
            key={cert.id}
            className="item col-5 col-sm-4 col-md-3 col-lg-2 mb-4"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <a 
              href={cert.link} 
              target="_blank"
              rel="noreferrer"
              className="cert-link"
            >
              {cert.icon}
              <h4 className="text-break text-orange">{cert.title}</h4>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
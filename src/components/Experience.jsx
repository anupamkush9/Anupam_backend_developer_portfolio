import experience from './data/experience';

const Experience = () => {
  return (
    <div className="container section-wrapper" id="experience">
      <h1 data-aos="fade-right" className="mb-4 st-font">Experience</h1>
      <div className="row justify-content-center">
        {experience.map((data) => (
          <div
            key={data.id}
            className="col-12 mb-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <a 
              href={data.link}
              target="_blank" 
            >
              <div className="ex-items flex-column flex-md-row text-center"
                    data-aos="zoom-in"
                    data-aos-duration="1000">
                <div className="w-100">
                  <h4 className="mb-2 text-orange">{data.organisation}</h4>
                  <h5 className="mb-2" style={{ color: "white" }}>{data.role}</h5>
                  <div className="mb-2">
                    <span style={{ color: "white", fontWeight: 500 }}>
                      {data.startDate} - {data.endDate}
                    </span>
                    <span style={{ color: "white", marginLeft: 16 }}>
                      {data.location}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

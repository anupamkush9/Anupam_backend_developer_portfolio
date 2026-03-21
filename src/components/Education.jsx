import education from './data/education';

const Education = () => {
  return (
    <div className="container" id="education">
      <h1 data-aos="fade-right" className="mb-4 st-font">Education</h1>
      <div className="row justify-content-center">
        {education.map((data) => (
          <div
            key={data.id}
            className="col-12 col-md-10 mb-4"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <a 
              href={data.link} 
              target="_blank" 
            >
              <div className="ed-items flex-column flex-md-row text-center"
                    data-aos="zoom-in"
                    data-aos-duration="1000">
                <div className="w-100">
                  <h4 className="mb-2 text-orange">{data.college}</h4>
                  <h5 className="mb-2 text-white">{data.branch}</h5>
                  <div className="mb-2">
                    <span style={{ color:"white", fontWeight: 500 }}>
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

export default Education;

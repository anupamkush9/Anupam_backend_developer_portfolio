// src/components/About.jsx


const About = () => {
    return (
        <>
            <div className="container about mt-5" id="about">
                <h1 data-aos="fade-right" className="mb-4 os-font">About</h1>
                <div className="d-flex justify-content-evenly align-items-center row">
                    <div
                        className="col-12 col-md-10 mb-4 text-center"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div className="item">
                            <div className="greeting st-font me-2">Hello, </div> I'm <span className="letter-spc os-font">Anupam Kushwaha</span>, a self-taught Python Backend Developer with 5 years of experience across GRC, FinTech, IoT and Healthcare
                            domains. Skilled in delivering end-to-end scalable SaaS applications in fast-paced environments,
                            with expertise in Python, Django, deployment, and team leadership.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;

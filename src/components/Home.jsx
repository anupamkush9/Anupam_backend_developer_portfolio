import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Python Backend Developer",
        "Django Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      smartBackspace: false,
      startDelay: 1000,
      backDelay: 1500,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="top">
      <div className="top-container">
        <div className="container text-center name">
          <p>Anupam Kushwaha</p>
          <h2><span className="type" ref={typedRef}></span></h2>
        </div>

        <div className="container text-center">
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
    </section>
  );
};

export default Home;

import React from "react";
import anwar from "../../assets/anwar.jpeg";
import arisfi from "../../assets/arisfi.jpeg";
import ipul from "../../assets/ipul.png";

const About = () => {
  return (
    <div className="container home">
      <h1 className="text-center py-5 text-bold">Kelompok 2</h1>
      <div className="row justify-content-evenly">
        <center className="col col-sm-3 mt-5">
          <img
            src={anwar}
            alt="gambar"
            width={250}
            height={250}
            className="about"
          />
          <div className="text-center mt-3">
            <h4>Muhammad Anwar Firdaus</h4>
            <h6>RCTN-KS05-010</h6>
          </div>
        </center>
        <center className="col col-sm-3 mt-5">
          <img
            src={arisfi}
            alt="gambar"
            width={250}
            height={250}
            className="about"
          />
          <div className="text-center mt-3">
            <h4>Arizfi Agustina</h4>
            <h6>RCTN-KS05-007</h6>
          </div>
        </center>
        <center className="col col-sm-3 mt-5">
          <img
            src={ipul}
            alt="gambar"
            width={250}
            height={250}
            className="about"
          />
          <div className="text-center mt-3">
            <h4 className="text-center">Ahmad Saifullah</h4>
            <h6>RCTN-KS05-008</h6>
          </div>
        </center>
      </div>
    </div>
  );
};

export default About;

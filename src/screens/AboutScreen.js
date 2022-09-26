// import Header from '../components/Header'

// const AboutScreen = (props) => {
//   return (
//     <div>
//       <Header title="About" />
//     </div>
//   )
// }

// export default AboutScreen


import React from "react";
import Ayush from "../images/anmol.JPG";
import Aditya from "../images/sattu.jpg";
import Kavish from "../images/aniket.jpg";
import sss from "../images/sssjpg.jpg";
import Tejas from "../images/Tejas.jpeg";
import "./AboutUs.css";

const AboutScreen = () => {
  return (
    <>
      <div class="container1 aboutus">
        <div class="row">
          <div class="col-md-12">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>

              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Ayush} alt="Ayush" />
                        </div>
                        <div className="img-text">
                          <h2>Anmol Mahendra Jadhav</h2>
                          <p>
                            Hi I'm Anmol Mahendra Jadhav and Team lead of this
                            project. I'm currently pursuing Diploma in CDAC
                            Infoway, and my role in the project is Backend
                            developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Aditya} alt="Aditya" />
                        </div>
                        <div className="img-text">
                          <h2>Satyajeet Yadav</h2>
                          <p>
                            Hi I'm Satyajeet Yadav. I'm currently pursuing
                            Diploma in CDAC Infoway, and my role in the project
                            is backendend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={Kavish} alt="Kavish" />
                        </div>
                        <div className="img-text">
                          <h2>Aniket Patil</h2>
                          <p>
                            Hi I'm Aniket Patil. I'm currently pursuing Diploma
                            in CDAC Infoway, and my role in the project is
                            frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={sss} alt="Pranjal" />
                        </div>
                        <div className="img-text">
                          <h2>Shrikant Patange</h2>
                          <p>
                            Hi I'm Shrikant Patange. I'm currently pursuing
                            Diploma in CDAC Infoway, and my role in the project
                            is frontend developer.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="single-box">
                        <div className="img-area">
                          <img src={sss} alt="Tejas" />
                        </div>
                        <div className="img-text">
                          <h2>Harshita Maheshwari</h2>
                          <p>
                            Project Guide
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutScreen;

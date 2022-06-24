import React from "react";

const Specialists = () => {
  return (
    <section id="ts-service-area" class="ts-service-area pb-0">
      <div class="container">
        <div class="row text-center">
          <div class="col-12">
            <h2 class="section-title" style={{color:"#BC4B26"}}>We Are Specialists In</h2>
            <h3 class="section-sub-title" style={{color:"#BC4B26"}}>What We Do</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon1.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{color:"#BC4B26"}}>Home Construction</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>

            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon2.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{color:"#BC4B26"}}>Building Remodels</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>

            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon3.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{color:"#BC4B26"}}>Interior Design</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 text-center">
            <img  
              loading="lazy"
              class="img-fluid"
              src="images/services/service-center.jpg"
              alt="service-avater-image"
            />
          </div>

          <div class="col-lg-4 mt-5 mt-lg-0 mb-4 mb-lg-0">
            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon4.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{color:"#BC4B26"}}>Exterior Design</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>

            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon5.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{color:"#BC4B26"}}>Renovation</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>

            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                  loading="lazy"
                  src="images/icon-image/service-icon6.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{color:"#BC4B26"}}>Safety Management</a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialists;

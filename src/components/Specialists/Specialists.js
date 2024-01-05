import React from "react";
import "./Specialists.css"
import landing from "../../assets/landlord.png"
const Specialists = () => {
  return (
    <section id="ts-service-area" class="ts-service-area pb-0">
      <div class="container">
        <div class="row text-center">
          <div class="col-12">
            <h2 class="section-title" style={{ color: "#BC4B26" }}>
              We Are Specialists In
            </h2>
            <h3 class="section-sub-title" style={{ color: "#BC4B26" }}>
              What We Do
            </h3>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="ts-service-box d-flex">
              <div class="ts-service-box-img">
                <img
                className="  "
                  loading="lazy"
                  src="images/icon-image/service-icon1.png"
                  alt="service-icon"
                />
              </div>
              <div class="ts-service-box-info">
                <h3 class="service-box-title">
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Landlord Services
                  </a>
                </h3>
                <p className="text-justify word-spaced-text " >
                  We represent our clients and execute all the demanding tenant
                  management and property handover on the landlord's behalf.
                  This is the most consolidated option for landlords to purchase
                  while saving precious time and immediately enjoying the
                  rental's profit, whilst being released from any management
                  stress.
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
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Building Remodels
                  </a>
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
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Interior Design
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Integer
                  adipiscing erat
                </p>
              </div>
            </div>
          </div>

          <div class="col-lg-4 text-center"
          data-aos="flip-right"
          data-aos-offset="2000"
          data-aos-delay="50"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          >
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
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Exterior Design
                  </a>
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
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Renovation
                  </a>
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
                  <a href="#" style={{ color: "#BC4B26" }}>
                    Safety Management
                  </a>
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

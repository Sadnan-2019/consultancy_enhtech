import React from "react";

const Banner = () => {
  return (
    <div>
     <div class="banner-carousel banner-carousel-1 mb-0">
      <div
        class="banner-carousel-item"
        style={{ backgroundImage: `url("images/slider-main/bg1.jpg")` }}
      >
        <div class="slider-content">
          <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-md-12 text-center">
                <h2 class="slide-title" data-animation-in="slideInLeft">
                  17 Years of excellence in
                </h2>
                <h3 class="slide-sub-title" data-animation-in="slideInRight">
                  Construction Industry
                </h3>
                <p data-animation-in="slideInLeft" data-duration-in="1.2">
                  <a href="/services" class="slider btn btn-primary" style={{backgroundColor:"#BC4B26"}}>
                    Our Services
                  </a>
                  <a href="/contact" class="slider btn  btn-primary"style={{backgroundColor:"#BC4B26"}}>
                    Contact Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="banner-carousel-item"
        style={{ backgroundImage: `url("images/slider-main/bg2.jpg")` }}
      >
        <div class="slider-content text-left">
          <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-md-12">
                <h2 class="slide-title-box" data-animation-in="slideInDown">
                  World Class Service
                </h2>
                <h3 class="slide-title" data-animation-in="fadeIn">
                  When Service Matters
                </h3>
                <h3 class="slide-sub-title" data-animation-in="slideInLeft">
                  Your Choice is Simple
                </h3>
                <p data-animation-in="slideInRight">
                  <a href="/services" class="slider btn btn-primary "style={{backgroundColor:"#BC4B26"}}>
                    Our Services
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="banner-carousel-item"
        style={{ backgroundImage: `url("images/slider-main/bg3.jpg")` }}
      >
        <div class="slider-content text-right">
          <div class="container h-100">
            <div class="row align-items-center h-100">
              <div class="col-md-12">
                <h2 class="slide-title" data-animation-in="slideInDown">
                  Meet Our Engineers
                </h2>
                <h3 class="slide-sub-title" data-animation-in="fadeIn">
                  We believe sustainability
                </h3>
                <p
                  class="slider-description lead"
                  data-animation-in="slideInRight"
                >
                  We will deal with your failure that determines how you achieve
                  success.
                </p>
                <div data-animation-in="slideInLeft">
                  {/* <a
                    href="contact.html"
                    class="slider btn btn-primary"
                    aria-label="contact-with-us"
                  >
                    Get Free Quote
                  </a> */}
                  {/* <a
                    href="about.html"
                    class="slider btn btn-primary border"
                    aria-label="learn-more-about-us"
                  >
                    Learn more
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>

    <section class="call-to-action-box no-padding">
  <div class="container">
    <div class="action-style-box   rounded-3" style={{background:"#BC4B26"}}>
        <div class="row align-items-center">
          <div class="col-md-8 text-center text-md-left">
              <div class="call-to-action-text">
                <h3 class="action-title">We understand your needs on construction</h3>
              </div>
          </div> 
          <div class="col-md-4 text-center text-md-right mt-3 mt-md-0">
              <div class="call-to-action-btn">
                <a class="btn btn-dark" href="#">Free Dial +88017120000000</a>
              </div>
          </div> 
        </div> 
    </div> 
  </div> 
</section> 
    </div>
  );
};

export default Banner;

import React from "react";
import Business from "../Business/Business";

const AboutHeader = () => {
  return (
    <div>
      <div
        id="banner-area"
        class="banner-area"
        style={{ backgroundImage: `url("images/banner/banner1.jpg")` }}
      >
        <div class="banner-text">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <div class="banner-heading">
                  <h1 class="banner-title">About</h1>
                  {/* <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item"><a href="#">company</a></li>
                      <li class="breadcrumb-item active" aria-current="page">About Us</li>
                    </ol>
                </nav> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="main-container" class="main-container">
        <div class="container ">
          <div class="row ">
            <div class="col-12 col-sm-12 col-md-6 col-lg-6  align-items-center justify-content-center d-flex  ">
              <div class="p-3  ">
                <img
                  src="images/news/news2.jpg"
                  alt=""
                  className="img-fluid rounded-2 border"
                />
              </div>
            </div>

            <div class="col-12 col-sm-12 col-md-6 col-lg-6  ">
              <h3 class="column-title mt-2" style={{ color: "#BC4B26" }}>
                Who We Are
              </h3>
              <p>
                when Gregor Samsa woke from troubled dreams, he found himself
                transformed in his bed into a horrible vermin.
              </p>
              <blockquote>
                <p>
                  Semporibus autem quibusdam et aut officiis debitis aut rerum
                  est aut optio cumque nihil necessitatibus autemn ec tincidunt
                  nunc posuere ut
                </p>
              </blockquote>
              <p>
                He lay on his armour-like back, and if he lifted. ultrices
                ultrices sapien, nec tincidunt nunc posuere ut. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit. If you are going to
                use a passage of Lorem Ipsum, you need to be sure there isn’t
                anything embarrassing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Business></Business>

      <section id="ts-team" class="ts-team">
        <div class="container">
          <div class="row text-center">
            <div class="col-lg-12">
              <h2 class="section-title" style={{ color: "#BC4B26" }}>
                Quality Service
              </h2>
              <h3 class="section-sub-title" style={{ color: "#BC4B26" }}>
                Professional Team
              </h3>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <div id="team-slide" class="team-slide">
                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team1.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Nats Stenman</h3>
                      <p class="ts-designation">Chief Operating Officer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team2.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Angela Lyouer</h3>
                      <p class="ts-designation">Innovation Officer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team3.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Mark Conter</h3>
                      <p class="ts-designation">Safety Officer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team4.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Ayesha Stewart</h3>
                      <p class="ts-designation">Finance Officer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team5.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Dave Clarkte</h3>
                      <p class="ts-designation">Civil Engineer</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="item">
                  <div class="ts-team-wrapper">
                    <div class="team-img-wrapper">
                      <img
                        loading="lazy"
                        class="w-100"
                        src="images/team/team6.jpg"
                        alt="team-img"
                      />
                    </div>
                    <div class="ts-team-content">
                      <h3 class="ts-name">Elton Joe</h3>
                      <p class="ts-designation">Site Supervisor</p>
                      <p class="ts-description">
                        Nats Stenman began his career in construction with boots
                        on the ground
                      </p>
                      <div class="team-social-icons">
                        <a
                          target="blank"
                          href="https://www.facebook.com/ce.engtech"
                        >
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a target="blank" href="https://twitter.com/">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a
                          target="blank"
                          href="https://www.linkedin.com/?trk=seo-authwall-base_nav-header-logo"
                        >
                          <i class="fab fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutHeader;

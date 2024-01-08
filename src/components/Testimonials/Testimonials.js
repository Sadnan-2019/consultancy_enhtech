import React from "react";
import video from "../../assets/rbrealestae1.mp4";
const Testimonials = () => {
  return (
    <section class="content  "style={{ background: "#252525" }}>
      <div class="container">
        <div class="row text-center">
          <div class="col-12">
            <h2 class="section-title" style={{ color: "white" }}>
              Work of Excellence
            </h2>
            <h3 class="section-sub-title" style={{ color: "white" }}>
              Recent Projects
            </h3>
          </div>
        </div>
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-lg-6">
            <h3 class="column-title" style={{ color: "white" }}>
              New Launch JLT
            </h3>

            {/* <div
              id="testimonial-slide"
              class="testimonial-slide"
              data-bs-ride="testimonial-slide"
            >
              <div class="item">
                <div class="quote-item ">
                  <span class="quote-text">
                    Your Place Real Estate is a dynamic company, attentive to
                    the needs of the customer, whether it is the owner or the
                    tenant. The owner, Marcello Arcangeli, has competence and
                    professionalism, as well as a deep knowledge of the laws of
                    the country: he is therefore an excellent consultant capable
                    of giving the right advice to customers.
                  </span>

                  <div class="quote-item-footer">
                    <img
                      loading="lazy"
                      class="testimonial-thumb"
                      src="images/clients/testimonial1.png"
                      alt="testimonial"
                    />
                    <div class="quote-item-info">
                      <h3 class="quote-author">Gabriel Denis</h3>
                      <span class="quote-subtext">Chairman, OKT</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="quote-item ">
                  <span class="quote-text">
                    Your Place Real Estate is one of the best agency of Dubai.
                    They offer great solution for all over the budget. I rent a
                    studio with them and the service and the process was all
                    excellent. I really recommend it. The owner Mr Marcello a
                    serous professional with a great experience in Dubai. Italy
                  </span>

                  <div class="quote-item-footer">
                    <img
                      loading="lazy"
                      class="testimonial-thumb"
                      src="images/clients/testimonial2.png"
                      alt="testimonial"
                    />
                    <div class="quote-item-info">
                      <h3 class="quote-author">Weldon Cash</h3>
                      <span class="quote-subtext">CFO, First Choice</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="item">
                <div class="quote-item ">
                  <span class="quote-text">
                    Excellent and top professional service Really easy to deal
                    with them and their team is always ready to clarify any
                    doubt.
                  </span>

                  <div class="quote-item-footer">
                    <img
                      loading="lazy"
                      class="testimonial-thumb"
                      src="images/clients/testimonial3.png"
                      alt="testimonial"
                    />
                    <div class="quote-item-info">
                      <h3 class="quote-author">Minter Puchan</h3>
                      <span class="quote-subtext">Director, AKT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div class="row">
              <div className=" ">
                {/* <iframe src={video} title="Vimeo video" allowfullscreen></iframe> */}
                <div class="embed-responsive embed-responsive-16by9 border border-1">
                  {/* <iframe class="embed-responsive-item" src={video} allowfullscreen  controls muted loop autoplay ></iframe> */}
                  <video src={video} controls muted loop autoplay></video>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0">
            {/* <h3 class="column-title">Happy Clients</h3> */}
            <h3 class="column-title">
              <a href="#" style={{ color: "white" }}>
                The North Tower of Mercer House will feature an impressive 41
                residential floors offering a total of *325 signature apartments
                ranging from studios to contemporary 1, 2, 3, and 4-bedroom
                penthouses.
              </a>
            </h3>
            {/* <div class="row all-clients">
              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                  <a href="#!">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="images/clients/client1.png"
                      alt="clients-logo"
                    />
                  </a>
                </figure>
              </div>

              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                  <a href="#!">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="images/clients/client2.png"
                      alt="clients-logo"
                    />
                  </a>
                </figure>
              </div>

              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                  <a href="#!">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="images/clients/client3.png"
                      alt="clients-logo"
                    />
                  </a>
                </figure>
              </div>

              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                  <a href="#!">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="images/clients/client4.png"
                      alt="clients-logo"
                    />
                  </a>
                </figure>
              </div>

              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                  <a href="#!">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="images/clients/client5.png"
                      alt="clients-logo"
                    />
                  </a>
                </figure>
              </div>

              <div class="col-sm-4 col-6">
                <figure class="clients-logo">
                  <a href="#!">
                    <img
                      loading="lazy"
                      class="img-fluid"
                      src="images/clients/client6.png"
                      alt="clients-logo"
                    />
                  </a>
                </figure>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";

const Testimonials = () => {
  return (
    <section class="content">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h3 class="column-title">Testimonials</h3>

            <div
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
            </div>
          </div>

          <div class="col-lg-6 mt-5 mt-lg-0">
            <h3 class="column-title">Happy Clients</h3>

            <div class="row all-clients">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

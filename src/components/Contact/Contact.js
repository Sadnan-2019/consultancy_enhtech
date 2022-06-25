import React from 'react';

const Contact = () => {
     return (
          <div>
               <div id="banner-area" class="banner-area" style={{backgroundImage:`url("images/banner/banner1.jpg")`}}>
  <div class="banner-text">
    <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <div class="banner-heading">
                <h1 class="banner-title">Contact</h1>
                {/* <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center">
                      <li class="breadcrumb-item"><a href="#">Home</a></li>
                      <li class="breadcrumb-item"><a href="#">Company</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
                    </ol>
                </nav> */}
              </div>
          </div> 
        </div> 
    </div> 
  </div> 
</div> 



<section id="main-container" class="main-container">
  <div class="container">

    {/* <div class="row text-center">
      <div class="col-12">
        <h2 class="section-title" style={{color:"#BC4B26"}}>Reaching our Office</h2>
        <h3 class="section-sub-title" style={{color:"#BC4B26"}}>Find Our Location</h3>
      </div>
    </div> */}
   

    <div class="row">
      <div class="col-md-4">
        <div class="ts-service-box-bg text-center h-100">
          <span class="ts-service-icon icon-round">
            <i class="fas fa-map-marker-alt mr-0"></i>
          </span>
          <div class="ts-service-box-content">
            <h4>Visit Our Office</h4>
            <p>9051 Constra Incorporate, USA</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="ts-service-box-bg text-center h-100">
          <span class="ts-service-icon icon-round">
            <i class="fa fa-envelope mr-0"></i>
          </span>
          <div class="ts-service-box-content">
            <h4>Email Us</h4>
            <p>office@Constra.com</p>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="ts-service-box-bg text-center h-100">
          <span class="ts-service-icon icon-round">
            <i class="fa fa-phone-square mr-0"></i>
          </span>
          <div class="ts-service-box-content">
            <h4>Call Us</h4>
            <p>(+9) 847-291-4353</p>
          </div>
        </div>
      </div>

    </div>

    {/* <div class="gap-60"></div>

    <div class="google-map">
      <div id="map" class="map" data-latitude="40.712776" data-longitude="-74.005974" data-marker="images/marker.png" data-marker-name="Constra"></div>
    </div> */}

    {/* <div class="gap-40"></div> */}

    <div class="row">
      <div class="col-md-12 ">
        <h3 class="column-title mt-5"style={{color:"#BC4B26"}}>We love to hear</h3>
     
        <form id="contact-form" action="#" method="post" role="form">
          <div class="error-container"></div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-group">
                <label>Name</label>
                <input class="form-control form-control-name" name="name" id="name" placeholder="" type="text" required />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Email</label>
                <input class="form-control form-control-email" name="email" id="email" placeholder="" type="email"
                  required />
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-group">
                <label>Subject</label>
                <input class="form-control form-control-subject" name="subject" id="subject" placeholder="" required />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea class="form-control form-control-message" name="message" id="message" placeholder="" rows="10"
              required></textarea>
          </div>
          <div class="text-right"><br></br>
            <button class="btn btn-primary solid blank" type="submit" style={{background:"#BC4B26"}}>Send Message</button>
          </div>
        </form>
      </div>

    </div> 
  </div> 
</section> 
          </div>
     );
};

export default Contact;
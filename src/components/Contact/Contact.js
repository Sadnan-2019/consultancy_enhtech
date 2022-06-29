import React from 'react';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css'; 
import { toast } from 'react-toastify';
import "./Contact.css";


const Contact = () => {


  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pskgdpw', 'template_kyal10i', e.target, '6RHmK6EVFEtu1sjQQ')
      .then((result) => {
          // console.log(result.text);
          toast("SEND SUCCESSFULLY")
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
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



<section id="main-container" class="main-container contact    ">
 
 <div class="container-fluid ">

  <h3 class="column-title text-center mt-2" style={{color:"white"}}>We love to hear</h3>


    <div class="row ">
      <div class="col-md-12 justify-content-center align-items-center d-flex p-4  ">
        
     
        <form id="contact-form"  method="post"   onSubmit={sendEmail} className=" p-4 mx-auto   border rounded-4  contactform" >
           
          <div class="row">
            <div class=" ">
              <div class="form-group">
                <label  >Name</label>
                <input class="form-control   "   name="name" id="name" placeholder=" " type="text" required />
              </div>
            </div>
            <div class="  ">
              <div class="form-group">
                <label  >Email</label>
                <input class="form-control   form-control-email" name="email" id="email" placeholder="" type="email"
                  required />
              </div>
            </div>
            <div class=" ">
              <div class="form-group">
                <label  >Subject</label>
                <input class="form-control   form-control-subject" name="subject" id="subject" placeholder="" type="text"   />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label  >Message</label> 
            <textarea class="form-control form-control-message   " type="text" name="message" id="message" placeholder="" rows="10"
              required></textarea>
          </div>
          <div class="text-right"><br></br>
            {/* <button class="btn btn-primary solid blank" type="submit" style={{background:"#BC4B26"}}>Send Message</button> */}
            <input class="btn btn-primary solid blank" type="submit" value="Send Message" style={{background:"#BC4B26"}}/>
          </div>
        </form>
      </div>

    </div> 
  </div> 
  <div className='align-items-center justify-content-center d-flex p-4'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.1529895842637!2d90.37355931434828!3d23.74192319501847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b95463d9cc49%3A0x26f7bc45c034c899!2sDhanmondi!5e0!3m2!1sen!2sbd!4v1656438858353!5m2!1sen!2sbd" style={{width:"100%",height:"450px",border:"0"}}   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 </div>


 
</section>



{/* <div class="gap-60"></div>

<div class="google-map">
  <div id="map" class="map" data-latitude="40.712776" data-longitude="-74.005974" data-marker="image
  s/marker.png" data-marker-name="Constra"></div>
</div>

<div class="gap-40"></div> */}

          </div>
     );
};

export default Contact;
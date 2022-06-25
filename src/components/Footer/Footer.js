import React from 'react';
import { Link, NavLink } from "react-router-dom";


const Footer = () => {
     return (
          <footer id="footer" class="footer bg-overlay"  >
    <div class="footer-main" >
      <div class="container">
        <div class="row justify-content-between">
          <div class=" col-md-6 col-lg-4 footer-widget footer-about ">
            {/* <h3 class="widget-title">About Us</h3> */}
            <img loading="lazy" width="150px" class="footer-logo" src="https://i.ibb.co/Zmsbx6F/rubel.png" alt="Constra"/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci done idunt ut
              labore et dolore magna aliqua.</p>
            <div class="footer-social">
              <ul>
                <li><a href="https://www.facebook.com/ce.engtech" aria-label="Facebook"><i
                      class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://twitter.com/" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </li>
                <li><a href="https://www.instagram.com/" aria-label="Instagram"><i
                      class="fab fa-instagram"></i></a></li>
                <li><a href="https://www.linkedin.com/" aria-label="Github"><i class="fab fa-linkedin"></i></a></li>
              </ul>
            </div> 
          </div> 

          <div class=" col-md-6 col-lg-4 footer-widget mt-5  ">
            {/* <h3 class="widget-title" >Working Hours</h3> */}
            <div class="working-hours">
              We work 7 days a week, every day excluding major holidays. Contact us if you have an emergency, with our
              Hotline and Contact form.
              <br></br> Monday - Friday: <span class="text-right">10:00 - 16:00 </span>
              <br></br> Saturday: <span class="text-right">12:00 - 15:00</span>
              <br></br> Sunday and holidays: <span class="text-right">09:00 - 12:00</span>
            </div>
          </div> 

          

          
        </div> 
      </div> 
    </div> 

    <div class="copyright"  >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-12">
            <div class="copyright-info text-center">

          
              <span>Copyright &copy; <script>
                  document.write(new Date().getFullYear())
                </script>, Designed &amp; Developed by <a href="https://galaxydigitalbd.com/" className='galaxy'>Galaxy Digital</a></span>
            </div>
          </div>

           
        </div> 

        <div id="back-to-top" data-spy="affix" data-offset-top="10" class="back-to-top position-fixed">
          <button class="btn btn-primary" title="Back to Top">
            <i class="fa fa-angle-double-up"></i>
          </button>
        </div>

      </div> 
    </div> 
  </footer> 
     );
};

export default Footer;
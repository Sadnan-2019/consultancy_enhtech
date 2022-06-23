import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
     return (
          <header id="header" class="header-one">
  <div class="bg-white">
    <div class="container">
      <div class="logo-area">
          <div class="row align-items-center">
            <div class="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                <a class="d-block" href="index.html">
                  <img loading="lazy" src="images/logo.png" alt="Constra"/>
                </a>
            </div>
  
            <div class="col-lg-9 header-right">
                <ul class="top-info-box">
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title">Call Us</p>
                          <p class="info-box-subtitle">(+9) 847-291-4353</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="info-box">
                      <div class="info-box-content">
                          <p class="info-box-title">Email Us</p>
                          <p class="info-box-subtitle">office@Constra.com</p>
                      </div>
                    </div>
                  </li>
                  <li class="last">
                    <div class="info-box last">
                      <div class="info-box-content">
                          <p class="info-box-title">Global Certificate</p>
                          <p class="info-box-subtitle">ISO 9001:2017</p>
                      </div>
                    </div>
                  </li>
                  <li class="header-get-a-quote">
                    <a class="btn btn-primary" href="contact.html">Get A Quote</a>
                  </li>
                </ul>
            </div>
          </div>
  
      </div>
    </div>
  </div>

  <div class="site-navigation">
    <div class="container">
        <div class="row">
          <div class="col-lg-12">
              <nav class="navbar navbar-expand-lg navbar-dark p-0">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div id="navbar-collapse" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav mr-auto">
                      <li class="nav-item dropdown active">
                   
                          <a href="/" class="nav-link dropdown-toggle" data-toggle="">Home </a>
                         
                      </li>

                    
              
                      <li class="nav-item dropdown">

                          <Link to="/projects" class="nav-link dropdown-toggle" data-toggle="">Projects </Link>
                         
                      </li>
              
                      <li class="nav-item dropdown">
                          <a href="/services" class="nav-link dropdown-toggle" data-toggle="">Services </a>
                        
                      </li>
              
                     
              
                      <li class="nav-item"><a class="nav-link" href="/contact">Contact</a></li>
                      <li class="nav-item"><a class="nav-link" href="/about">About us</a></li>
                    </ul>
                </div>
              </nav>
          </div>
           
        </div>
       
        <div class="nav-search">
          <span id="search"><i class="fa fa-search"></i></span>
        </div> 

        <div class="search-block" style={{display:"none"}}>
          <label for="search-field" class="w-100 mb-0">
            <input type="text" class="form-control" id="search-field" placeholder="Type what you want and enter"/>
          </label>
          <span class="search-close">&times;</span>
        </div> 
    </div>
  

  </div>
  </header>
 
     );
};

export default Header;
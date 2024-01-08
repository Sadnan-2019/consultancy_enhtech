import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
import logo from "../../assets/logo.jpg";
import "./Header.css";
import Popup from "../Popup/Popup";
import banner from "../../assets/topbanner.jpg";
const Header = () => {
  return (
    <div>
      {/* <div className="container">
<div class="row   ">
  <img className="banner" src={banner} alt=""/>
</div>

</div> */}

      <header id="header" class="header-one navbar-fixed"
       data-aos="fade-down"
       data-aos-offset="200"
       data-aos-delay="50"
       data-aos-duration="1000"
       data-aos-easing="linear"
    
      //  data-aos-mirror="true"
      //  data-aos-once="false"
      >
        <div class="site-navigation">
          <div class="container  ">
            <div class="  flex-row sm:flex-column d-flex justify-content-between align-items-center ">
              {/* <div className="col-lg-3  ">
                <div>
                  <a class=" " href="/">
                    <img
                      className="mylogo"
                      loading="lazy"
                      src={logo}
                      style={{ width: "150px", height: "110px" }}
                      alt="Constra"
                    />
                  </a>
                </div>
              </div> */}
              <div class="col-lg-6   ">
                <nav
                  class="navbar navbar-expand-lg navbar-dark p-0 sticky top-0 navbar-fixed mt-3 "
                  id="navbar"
                >
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target=".navbar-collapse"
                    aria-controls="navbar-collapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon" id="nav-bar"></span>
                  </button>

                  <div id="navbar-collapse" class="collapse navbar-collapse ">
                    <ul class="nav navbar-nav mr-auto Header p-2 ">
                      <li
                        class="nav-item Header"
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                        // aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        {/* <a href="/" class="nav-link dropdown-toggle" data-toggle="">Home </a> */}
                        <NavLink
                          to="/"
                          class="dropdown-toggle    "
                          aria-current="page"
                          // onClick={()=>setSpinner(true)}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                        // aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        {/* <a class="nav-link" href="/about">About us</a> */}
                        <NavLink
                          to="/about"
                          class="  dropdown-toggle"
                          data-toggle=""
                          aria-current="page"
                        >
                          About us
                        </NavLink>
                      </li>
                      <li
                        class="nav-item Header   "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                        // aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        {/* <a href="/" class="nav-link dropdown-toggle" data-toggle="">Home </a> */}
                        {/* <NavLink to="/" class="nav-link dropdown-toggle     " data-toggle="">Home </NavLink> */}

                        <NavLink
                          to="/projects"
                          class="dropdown-toggle"
                          aria-current="page"
                          // onClick={()=>setSpinner(true)}
                        >
                          Project
                        </NavLink>
                      </li>

                      {/* <li class="nav-item dropdown   Header ">

                         <NavLink to="/projects" class="nav-link dropdown-toggle" data-toggle="">Projects </NavLink>
                        
                     </li> */}

                      <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                        // aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        {/* <a href="/services" class="nav-link dropdown-toggle" data-toggle="">Services </a> */}
                        <NavLink
                          to="/services"
                          class="  dropdown-toggle"
                          aria-current="page"
                        >
                          Services
                        </NavLink>
                      </li>

                      <li
                        class="nav-item Header "
                        type="button"
                        data-toggle="collapse"
                        data-target=".navbar-collapse"
                        aria-controls="navbar-collapse"
                        // aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        {/* <a class="nav-link" href="/contact">Contact</a> */}
                        <NavLink
                          to="/contact"
                          class="  dropdown-toggle"
                          data-toggle=""
                          aria-current="page"
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
 
                </nav>
              </div>

              <div class="col-md-6 hotcontact " style={{ lineHeight: "18px" }}>
              <div className="d-flex justify-content-between align-items-center ">
              <div className="">
              <img className="banner rounded my-1 " src={banner} alt="" style={{width:"300px",height:"70px", }}/>
              </div>

               <div className="col-md-6 ">
               <small style={{ color: "white", fontWeight: "bolder" }}>
                  Email : info@royalbengalrealestate.com
                </small>{" "}
                 
                <small style={{ color: "white ", fontWeight: "bolder" }}>
                  Mobile : +8801700000000
                </small>
               </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

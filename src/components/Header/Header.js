import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Loading from "../Loading/Loading";
import "./Header.css";

const Header = () => {
  //   const [ spinner, setSpinner ] = useState(false);

  //   // It will be executed before rendering

  //   useEffect(() => {
  //     setTimeout(() => setSpinner(false), 2000)
  //   }, [spinner]);
  //   if(spinner){
  //     return <Loading></Loading>
  //   }

  //   const menuItem = document.querySelectorAll('.navbar-links a');

  // menuItem.forEach(el => {
  //   if (el.getAttribute('href') === (Location.path || '/')) {
  //     el.classList.add("active")
  //   }
  // })

  // const header = document.getElementById("header").value;
  // const toggle = document.getElementById("toggle").value;
  // const navbar = document.getElementById("navbar").value;
  // document.onclick = function (e) {
  //   if (
  //     e.target.id !== header &&
  //     e.target.id !== toggle &&
  //     e.target.id !== navbar
  //   ) {
  //     toggle.classList.remove("active");
  //     navbar.classList.remove("active");
  //   }
  // };
 
 

  return (
    <header id="header" class="header-one navbar-fixed">
      <div class="site-navigation">
        <div class="container  ">
          <div class="row d-flex justify-content-evenly align-items-center ">
            <div className="col-lg-6  ">
              <div>
                <a class="d-block" href="/">
                  <img
                    className="mylogo"
                    loading="lazy"
                    src="https://i.ibb.co/Zmsbx6F/rubel.png"
                    style={{ width: "150px", height: "100px" }}
                    alt="Constra"
                  />
                </a>
              </div>
            </div>
            <div class="col-lg-6   ">
              <nav class="navbar navbar-expand-lg navbar-dark p-0 sticky top-0 navbar-fixed mt-3 " id="navbar">
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
                  <ul class="nav navbar-nav mr-auto Header p-2 dropdownMenu" id = "menu">
                    <li class="nav-item dropdown  Header   ">
                      {/* <a href="/" class="nav-link dropdown-toggle" data-toggle="">Home </a> */}
                      <NavLink
                        to="/"
                        class="dropdown-toggle dropdown   urunler "
                        aria-current="page"
                        id="home"
                  
                      
                        // onClick={()=>setSpinner(true)}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li class="nav-item dropdown  Header   ">
                      {/* <a href="/" class="nav-link dropdown-toggle" data-toggle="">Home </a> */}
                      {/* <NavLink to="/" class="nav-link dropdown-toggle     " data-toggle="">Home </NavLink> */}

                      <NavLink
                        to="/projects"
                        class="dropdown-toggle urunler"
                        aria-current="page"
                        // onClick={()=>setSpinner(true)}
                     
                      >
                        Projects
                      </NavLink>
                    </li>

                    <li class="nav-item dropdown Header ">
                      {/* <a href="/services" class="nav-link dropdown-toggle" data-toggle="">Services </a> */}
                      <NavLink
                        to="/services"
                        class="dropdown-toggle urunler"
                        aria-current="page"
                    
                      >
                        Services
                      </NavLink>
                    </li>

                    <li class="nav-item dropdown Header ">
                      {/* <a class="nav-link" href="/contact">Contact</a> */}
                      <NavLink
                        to="/contact"
                        class="  dropdown-toggle urunler"
                        data-toggle=""
                        aria-current="page"
                        // onClick={reloadPage} 
                      >
                        Contact{" "}
                      </NavLink>
                    </li>
                    <li class="nav-item Header ">
                      {/* <a class="nav-link" href="/about">About us</a> */}
                      <NavLink
                        to="/about"
                        class="  dropdown-toggle urunler"
                        data-toggle=""
                        aria-current="page"
          
                      >
                        About us{" "}
                      </NavLink>
                    </li>
                  </ul>
                </div>
         
              </nav>
            </div>
          </div>

          {/* <div class="nav-search">
            <span id="search">
              <i class="fa fa-search"></i>
            </span>
          </div> */}

          {/* <div class="search-block" style={{ display: "none" }}>
            <label for="search-field" class="w-100 mb-0">
              <input
                type="text"
                class="form-control"
                id="search-field"
                placeholder="Type what you want and enter"
              />
            </label>
            <span class="search-close">&times;</span>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;

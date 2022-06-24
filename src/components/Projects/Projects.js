import React from "react";

const Projects = () => {
  return (
     <section id="project-area" class="project-area solid-bg">
     <div class="container">
       <div class="row text-center">
         <div class="col-lg-12">
           <h2 class="section-title" style={{color:"#BC4B26"}}>Work of Excellence</h2>
           <h3 class="section-sub-title" style={{color:"#BC4B26"}}>Our Projects</h3>
         </div>
       </div>
      
   
       <div class="row">
         <div class="col-12">
        
   
   
           <div class="row shuffle-wrapper">
             <div class="col-1 shuffle-sizer"></div>
   
             <div class="col-lg-4 col-md-6 p-2 shuffle-item" data-groups="[&quot;government&quot;,&quot;healthcare&quot;]">
               <div class="project-img-container">
                 <a class="gallery-popup" href="images/projects/project1.jpg" aria-label="project-img">
                   <img class="img-fluid" src="images/projects/project1.jpg" alt="project-img"/>
                   <span class="gallery-icon"><i class="fa fa-plus"></i></span>
                 </a>
                 <div class="project-item-info">
                   <div class="project-item-info-content">
                     <h3 class="project-item-title">
                       <a href="projects-single.html">Capital Teltway Building</a>
                     </h3>
                     <p class="project-cat">Commercial, Interiors</p>
                   </div>
                 </div>
               </div>
             </div>
   
             <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;healthcare&quot;]">
               <div class="project-img-container">
                 <a class="gallery-popup" href="images/projects/project2.jpg" aria-label="project-img">
                   <img class="img-fluid" src="images/projects/project2.jpg" alt="project-img"/>
                   <span class="gallery-icon"><i class="fa fa-plus"></i></span>
                 </a>
                 <div class="project-item-info">
                   <div class="project-item-info-content">
                     <h3 class="project-item-title">
                       <a href="projects-single.html">Ghum Touch Hospital</a>
                     </h3>
                     <p class="project-cat">Healthcare</p>
                   </div>
                 </div>
               </div>
             </div>
   
             <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;commercial&quot;]">
               <div class="project-img-container">
                 <a class="gallery-popup" href="images/projects/project3.jpg" aria-label="project-img">
                   <img class="img-fluid" src="images/projects/project3.jpg" alt="project-img"/>
                   <span class="gallery-icon"><i class="fa fa-plus"></i></span>
                 </a>
                 <div class="project-item-info">
                   <div class="project-item-info-content">
                     <h3 class="project-item-title">
                       <a href="projects-single.html">TNT East Facility</a>
                     </h3>
                     <p class="project-cat">Government</p>
                   </div>
                 </div>
               </div>
             </div>
   
             <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;education&quot;,&quot;infrastructure&quot;]">
               <div class="project-img-container">
                 <a class="gallery-popup" href="images/projects/project4.jpg" aria-label="project-img">
                   <img class="img-fluid" src="images/projects/project4.jpg" alt="project-img"/>
                   <span class="gallery-icon"><i class="fa fa-plus"></i></span>
                 </a>
                 <div class="project-item-info">
                   <div class="project-item-info-content">
                     <h3 class="project-item-title">
                       <a href="projects-single.html">Narriot Headquarters</a>
                     </h3>
                     <p class="project-cat">Infrastructure</p>
                   </div>
                 </div>
               </div>
             </div>
   
             <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;infrastructure&quot;,&quot;education&quot;]">
               <div class="project-img-container">
                 <a class="gallery-popup" href="images/projects/project5.jpg" aria-label="project-img">
                   <img class="img-fluid" src="images/projects/project5.jpg" alt="project-img"/>
                   <span class="gallery-icon"><i class="fa fa-plus"></i></span>
                 </a>
                 <div class="project-item-info">
                   <div class="project-item-info-content">
                     <h3 class="project-item-title">
                       <a href="projects-single.html">Kalas Metrorail</a>
                     </h3>
                     <p class="project-cat">Infrastructure</p>
                   </div>
                 </div>
               </div>
             </div>
   
             <div class="col-lg-4 col-md-6 p-2  shuffle-item" data-groups="[&quot;residential&quot;]">
               <div class="project-img-container">
                 <a class="gallery-popup" href="images/projects/project6.jpg" aria-label="project-img">
                   <img class="img-fluid" src="images/projects/project6.jpg" alt="project-img"/>
                   <span class="gallery-icon"><i class="fa fa-plus"></i></span>
                 </a>
                 <div class="project-item-info">
                   <div class="project-item-info-content">
                     <h3 class="project-item-title">
                       <a href="projects-single.html">Ancraft Avenue House</a>
                     </h3>
                     <p class="project-cat">Residential</p>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
   
         <div class="col-12">
           <div class="general-btn text-center">
             <a class="btn btn-primary" href="/projects" style={{background:"#BC4B26"}}>View All Projects</a>
           </div>
         </div>
   
       </div> 
     </div>
   
   </section> 
  );
};

export default Projects;

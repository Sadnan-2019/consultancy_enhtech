import React from 'react';
import Projects from '../Projects/Projects';

const ProjectHeader = () => {
     return (
         <div>

<div id="banner-area" class="banner-area" style={{backgroundImage:`url("images/banner/banner1.jpg")`}}>
          <div class="banner-text">
            <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                      <div class="banner-heading">
                        <h1 class="banner-title">Project</h1>
                        {/* <nav aria-label="breadcrumb">
                            <ol class="breadcrumb justify-content-center">
                              <li class="breadcrumb-item"><a href="#">Home</a></li>
                              <li class="breadcrumb-item"><a href="#">Project</a></li>
                              <li class="breadcrumb-item active" aria-current="page">All Projects</li>
                            </ol>
                        </nav> */}
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        <Projects></Projects>
         </div>
        
     );
};

export default ProjectHeader;
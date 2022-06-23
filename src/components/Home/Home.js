import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Business from '../Business/Business';
import Projects from '../Projects/Projects';
import RecentProjects from '../Projects/RecentProjects';
import Specialists from '../Specialists/Specialists';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
     return (
          <div>
            <Banner></Banner>
      <About></About>
      <Business></Business>
      <Specialists></Specialists>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <RecentProjects></RecentProjects>  
          </div>
     );
};

export default Home;
import logo from './logo.svg';
import './App.css';
import Headerone from './components/Headerone/Headerone';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import About from './components/About/About';
import Business from './components/Business/Business';
import Specialists from './components/Specialists/Specialists';
import Projects from './components/Projects/Projects';
import Testimonials from './components/Testimonials/Testimonials';
import RecentProjects from './components/Projects/RecentProjects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className=" ">
      <Headerone></Headerone>
       <Header></Header>
       <Banner></Banner>
       <About></About>
       <Business></Business>
       <Specialists></Specialists>
       <Projects></Projects>
       <Testimonials></Testimonials>
       <RecentProjects></RecentProjects>
       <Footer></Footer>
   
    </div>
  );
}

export default App;

import "./home.css";
import "./header/header.css";
import "./about/about.css";
import "./contact/contact.css";
import "./footer/footer.css";
import "./Portfolio/work.css";
import "./qualification/qualification.css";
import "./Portfolio/work.css";
import "./scrollup/scrollup.css";
import "./services/services.css";
import "./skills/skills.css";
import Main from "./Main"


import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import Header from './header/Header';
import About from './about/About';
import Skills from './skills/Skills';
import Services from './services/Services';
import Qualification from './qualification/Qualification';
import Work from './Portfolio/Works';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import ScrollUp from './scrollup/ScrollUp';




import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';


const Home = () => {

  const [person,setPerson] = useState({});
  const [loaded,setLoaded]=useState(false);
  var data = JSON.parse(sessionStorage.getItem('user'))
  const {portfolioId} = useParams()
  console.log(data.user.name)
  const navigate = useNavigate();

  useEffect(() => {

      axios.get('http://localhost:8000/api/portfolio/'+portfolioId)
          .then(res => {
              setPerson(res.data);
              setLoaded(true);
          })
          .catch(err => console.log(err));
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        
        
        <div className="home__content grid">
          <Social />
        <div className="home__img"><img src={`http://localhost:8000/${person.photo}`} alt="" height="400px" width="200px"></img></div>
          <Data portfolioId={portfolioId}/>
        </div>
          <ScrollDown />
        </div>

        <div>
          <Header/>
        </div>
     
        <div>
          <About portfolioId={portfolioId}/>
          <Skills portfolioId={portfolioId}/>
          <Services />
          <Qualification />
          <Work />
          <Contact />
        
        </div>

        <Footer/>
        <ScrollUp />
        <Main />
        {/* <Link to={"/api/portfolio/" + portfolioId}>Edit</Link>  */}


    </section>
  );
};

export default Home;

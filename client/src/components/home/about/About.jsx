import "./about.css";
import AboutImg from "../../assets/about.jpg";
import Info from "./Info";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
const About = () => {

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



    const deletePortfolio = portfolioId => {
        axios.delete('http://localhost:8000/api/portfolio/' + portfolioId)
            .then(res=> navigate("/PortfolioLists"))
            .catch(err => console.error(err))
    }



  
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle"></span>

      <div className="about__container container grid" style={{margin:"auto", width:"35%"}} >
        {/* <img src={AboutImg} alt="" className="about__img" /> */}


        <div className="about__data" >
          <Info />

          <h5 className="about__description" style={{textAlign:"center", marginTop:"20px"}}><br></br>
           {person.summary}

          </h5>


        </div>
      </div>
    </section>
  );
};

export default About;

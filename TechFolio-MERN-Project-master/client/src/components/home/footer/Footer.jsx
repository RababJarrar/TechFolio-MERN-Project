import "./footer.css";

import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';


const Footer = () => {


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
    <footer className="footer" style={{height:"300px"}}>
      <div className="footer__container container">
        <h1 className="footer__title"><p style={{ color:"white"}}>{data.user.name}</p></h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link" style={{ color:"white"}}>
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link" style={{ color:"white"}}>
              Projects
            </a>
          </li>


        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.instagram.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://twitter.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-twitter"></i>
          </a>
        </div>


        <span className="footer__copy" style={{ color:"white"}}>
          &#169; TechFolio. All rigths reserved

      </span>
      <div style={{width:"100%", height:"35px", display:"flex", justifyContent:"flex-end"}}><button style={{width:"250px", padding:"5px", border:"2px solid red"}} onClick={e => {deletePortfolio(person._id)}}>Delete your portfolio</button></div>
      </div>
      
    </footer>
  );
};

export default Footer;

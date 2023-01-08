import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import "./work.css";
// import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Works = () => {

  const [person,setPerson] = useState({});
  const [loaded,setLoaded]=useState(false);
  var data = JSON.parse(sessionStorage.getItem('user'))
  const {portfolioId} = useParams()
  console.log(data.user.name)
  console.log(portfolioId)
  const navigate = useNavigate();

  useEffect(() => {

      axios.get('http://localhost:8000/api/portfolio/'+portfolioId)
          .then(res => {
              setPerson(res.data);
              setLoaded(true);
              console.log(res.data)
          })
          .catch(err => console.log(err));
  }, []);



  const deletePortfolio = portfolioId => {
      axios.delete('http://localhost:8000/api/portfolio/' + portfolioId)
          .then(res=> navigate("/PortfolioLists"))
          .catch(err => console.error(err))
  }

  return (
    <section className="testimonial container section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle"></span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
<div style={{display: "flex", justifyContent:"space-between", alignItems:"center", height:"300px", width:"700px"}}>
          <div style={{ padding:"10px", width:"200px",boxShadow: "5px 10px #e8eaed", border:"2px solid black", height:"280px", overflowWrap:"break-word", borderRadius: "25px"}}><h5 style={{fontWeight:"lighter"}} > {person.project1}</h5></div>
          <div style={{padding:"10px",width:"200px",boxShadow: "5px 10px #e8eaed", border:"2px solid black", height:"280px", overflowWrap:"break-word", borderRadius: "25px"}}><h5 style={{fontWeight:"lighter"}}> {person.project2}</h5></div>
          <div style={{padding:"10px",width:"200px",boxShadow: "5px 10px #e8eaed", border:"2px solid black", height:"280px", overflowWrap:"break-word", borderRadius: "25px"}}><h5 style={{fontWeight:"lighter"}}>{person.project3}</h5></div>
</div>

      </Swiper>
    </section>
  );
};

export default Works;

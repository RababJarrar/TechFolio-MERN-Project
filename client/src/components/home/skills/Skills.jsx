
import "./skills.css";
import Frontend from "./Frontend";
import Backend from "./Backend";
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Skills = (props) => {
  const [person,setPerson] = useState({});
  const [loaded,setLoaded]=useState(false);


  useEffect(() => {
    axios.get('http://localhost:8000/api/portfolio/'+props.portfolioId)
        .then(res => {
            setPerson(res.data);
            setLoaded(true);
        })
        .catch(err => console.log(err));
}, []);
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle"><h4>My technical level</h4></span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
      </div>
    </section>
  );
};

export default Skills;


import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
// import { useRadioGroup } from '@material-ui/core';
// import Header from '../components/home/home/header/Header'



const Portfolio = (props) => {
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
    
        <div>
            
            <p><img src={`http://localhost:8000/${person.photo}`} alt="" height="100px" width="100px"></img></p>
            <p>Name:{data.user.name}</p>
            <p> email: {data.user.email}</p>
            <p> address: {person.address}</p>
            <p>skill1: {person.skill1}</p>
            <p>skill2: {person.skill2}</p>

            <p>skill3: {person.skill3}</p>

            <p>skill4: {person.skill4}</p>

            <p>skill5: {person.skill5}</p>

            <p>skill6: {person.skill6}</p>

            <p>education: {person.education}</p>
            <p>phoneNumber: {person.phoneNumber}</p>
            <p>experience: {person.experience}</p>
            <p>gender: {person.gender}</p>
            <p>specilaization: {person.specialization}</p>
            <p>project1: {person.project1}</p>
            <p>project2: {person.project2}</p>

            <p>project3: {person.project3}</p>

            <p>github: {person.github}</p>
            <p>linkedin: {person.linkedin}</p>
            <p>Summary: {person.summary}</p>

            <p>{person._id}</p>
            {/* <button onClick={logout}>Logout</button> */}
            <Link to={"/api/portfolio/" + portfolioId}>Edit</Link> 
            <button onClick={e => {deletePortfolio(person._id)}}>Delete</button>
        </div>
    )
}

export default Portfolio

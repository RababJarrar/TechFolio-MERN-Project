// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link, useNavigate, useParams } from 'react-router-dom'


// const AllPortfolios = (props) => {

//     const [portfolios, setPortfolios] = useState([]);
//     const [loaded, setLoaded] = useState(false)
//     const navigate = useNavigate();
    

//     useEffect(() => {
//     axios.get('http://localhost:8000/api/portfolios')
//         .then(res => {
//             setPortfolios(res.data);
//             setLoaded(true);
//             var data = JSON.parse(sessionStorage.getItem('user'))

//             console.log(data.user._id);
//         })
//         .catch(err => console.log(err));
//     }, []);


//     const logout = (e) => {
//     sessionStorage.removeItem('userToken')
//     navigate("/")
// }
// var data = JSON.parse(sessionStorage.getItem('user'))


//     return (
//     loaded && 
//             <div>
//                 <button onClick={logout}>Logout</button>
//                 <p><Link to={"/Form"}>create your portfolio</Link></p>
//                 {portfolios.map((prortfolio, i) => 
//                     data.user._id==prortfolio.user_id._id?
//                     <p key ={i}><Link to={"/home/"+prortfolio._id}>View My Portfolio</Link></p>
//                     :
//                     <p></p>
//                     )}
//             </div>
//     )
// }

// export default AllPortfolios


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles1.css';
import av from './avataaars.svg';
import logoimage from './logo.png';



const AllPortfolios = (props) => {

    const [portfolios, setPortfolios] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const {portfolioId} = useParams()//new
    const [person,setPerson] = useState({}); //new
    const navigate = useNavigate();
    const [loaded1, setLoaded1]= useState(false);
    const [myportfolio, setMyportfolio] = useState([]);
    

    useEffect(() => {
    axios.get('http://localhost:8000/api/portfolios')
        .then(res => {
            setPortfolios(res.data);
            setLoaded(true);
            var data = JSON.parse(sessionStorage.getItem('user'))

            console.log(data.user._id);
        })
        .catch(err => console.log(err));
    }, []);



    const logout = (e) => {
    sessionStorage.removeItem('userToken')
    navigate("/")
}
var data = JSON.parse(sessionStorage.getItem('user'))
    // portfolios.map((prortfolio, i) => 
    // data.user._id==prortfolio.user_id._id? 
    // setLoaded1(true) :
    // setLoaded1(false))

    // portfolios.map((prortfolio, i) => {
    // if (data.user._id==prortfolio.user_id._id) {
    //     setLoaded1(true);
    //     break breakme;
        
    // } else {
    //     setLoaded1(false);
        
    // }})






    return (
        <div>
            <body id="page-top">
        {/* <!-- Navigation--> */}
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Start Portfolio</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                    {portfolios.map((prortfolio, i) => 
                    data.user._id==prortfolio.user_id._id?
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio"><p key ={i}><Link to={"/home/"+prortfolio._id}>My Portfolio</Link></p></a></li>
                        :<p></p>)}
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about"><p><Link to={"/Form"}>Create</Link></p></a></li>
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#contact"><button onClick={logout}>Logout</button></a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                {/* <!-- Masthead Avatar Image--> */}
                <img class="masthead-avatar mb-5" src={av} alt="..." />
                {/* <!-- Masthead Heading--> */}
                {/* <h1 class="masthead-heading text-uppercase mb-0"><img  src={logoimage} alt="rr"/> </h1> */}
                {/* <!-- Icon Divider--> */}
                {/* <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div> */}
                {/* <!-- Masthead Subheading--> */}
                <p class="masthead-subheading font-weight-light mb-0"><Link to={"/Form"}>create your portfolio</Link></p>
            </div>
        </header>
        
        
       
        {/* <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="js/scripts.js"></script>
        {/* <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *-->
        <!-- * *                               SB Forms JS                               * *-->
        <!-- * * Activate your form at https://startbootstrap.com/solution/contact-forms * *-->
        <!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *--> */}
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
            {/* <div>
                <button onClick={logout}>Logout</button>
                {portfolios.map((prortfolio, i) => 
                    data.user._id==prortfolio.user_id._id?
                    <p key ={i}><Link to={"/portfolio/"+prortfolio._id}>View My Portfolio</Link></p>
                    : <p><Link to={"/Form"}>create your portfolio</Link></p>
                    
                    )}

            </div> */}
            </div>
    )
}

export default AllPortfolios

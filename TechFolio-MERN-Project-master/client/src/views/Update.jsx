
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import logoimage from './logo.png';
import bg from './back1.jpeg';

const Update = (props) => {
    const { portfolioId } = useParams();
    const [person,setPerson] = useState({});
    const [portfolio, setPortfolio] = useState();
    const navigate = useNavigate();




    useEffect(() => {
        axios.get('http://localhost:8000/api/portfolio/' + portfolioId)
            .then(res => {
                setPerson(res.data);
            })
    }, []);

    const updatePortfolio = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/portfolio/' + portfolioId, person)
            .then(res => navigate("/home/"+ portfolioId))
            .catch(err => console.error(err));
            
    }


    const handleChange = (e) => {
        setPerson({...person, [e.target.name]: e.target.value});
    }

    // const handlePhoto = (e) => {
    //     setPerson({...portfolio, photo: e.target.files[0]});
    // }


  return (
         <div style={{display:"flex", backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
        <img  src={logoimage} alt="rr" style={{width: 200,height:100 ,flex:1}}/>   
        <div style={{ marginTop:50,marginLeft:300, flex:4}} >
            <form onSubmit={updatePortfolio} encType='multipart/form-data' style={{margin:"auto" }}>
                <div class="form-group col-md-12" style={{display:"flex",width:490, justifyContent:"space-between"}}>
                <div class="form-group col-md-5">
                    <legend class="col-form-label col-sm-1 pt-0">Phone</legend>
                    <input type="text" class="form-control" id="inputphone" placeholder="Phone Number" name="phoneNumber"
                                value={person.phoneNumber}
                                onChange={handleChange} />
                </div>
                <div class="form-group col-md-5">
                <legend class="col-form-label col-sm-1 pt-0">Address</legend>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Address" name="address"
                                value={person.address}
                                onChange={handleChange}/>
                </div>
                </div><br></br>
                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-1 pt-0">Gender</legend>
                        <div class="col-sm-1" style={{display:"flex",width:200, justifyContent:"space-between" }} >
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="gridRadios1" value="Female" checked={person.gender === "Female"}
                                onChange={handleChange}/>
                                <label class="form-check-label" for="gridRadios1">
                                    Female
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="Male" checked={person.gender === "Male"}
                                onChange={handleChange}/>
                                <label class="form-check-label" for="gridRadios2">
                                    Male
                                </label>
                            </div>
                        </div>
                    </div>
                </fieldset><br></br>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-1 pt-0">Specialization</legend>
                        <input style={{width:"490px"}} type="text" class="form-control" id="inputpecialization" placeholder="Specialization" name="specialization"
                                    value={person.specialization}
                                    onChange={handleChange}/>
                    </div><br></br>
                    <div class="form-group col-md-12" style={{display:"flex",width:515, justifyContent:"space-between"}}>
                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-1 pt-0">LinkedIn</legend>
                        <input type="url" class="form-control" id="inputLinkedIn" placeholder="LinkedIn" name="linkedin"
                                    value={person.linkedin}
                                    onChange={handleChange}/>
                    </div><br></br>
                        <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-1 pt-0">GitHub</legend>
                        <input type="url" class="form-control" id="inputGitHub" placeholder="GitHub" name="github"
                                value={person.github}
                                onChange={handleChange}/>
                    </div><br></br>
                    </div><br></br>
    <div class="form-group col-md-12" style={{display:"flex",width:515, justifyContent:"space-between"}}>

                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 1</legend>
                        <input class="form-control" id="SkillsTextarea1" placeholder="skill" name="skill1"
                                value={person.skill1}
                                onChange={handleChange}></input>
                    </div><br></br>

                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 2</legend>
                        <input class="form-control" id="SkillsTextarea1" placeholder="skill" name="skill2"
                                value={person.skill2}
                                onChange={handleChange}></input>
                    </div><br></br>
    </div>
    <br></br>
    <div class="form-group col-md-12" style={{display:"flex",width:515, justifyContent:"space-between"}}>


                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 3</legend>
                        <input class="form-control" id="SkillsTextarea1" placeholder="skill"  name="skill3"
                                value={person.skill3}
                                onChange={handleChange}></input>
                    </div><br></br>
                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 4</legend>
                        <input class="form-control" id="SkillsTextarea1"  placeholder="skill" name="skill4"
                                value={person.skill4}
                                onChange={handleChange}></input>
                    </div><br></br>


    </div>
    <br></br>
    <div class="form-group col-md-12" style={{display:"flex",width:515, justifyContent:"space-between"}}>

                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-2 pt-0">Skill 5</legend>
                        <input class="form-control" id="SkillsTextarea1"  name="skill5"
                                value={person.skill5}
                                onChange={handleChange}></input>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-2 pt-0">Skill 6</legend>
                        <input class="form-control" id="SkillsTextarea1"  name="skill6"
                                value={person.skill6}
                                onChange={handleChange}></input>
                    </div><br></br>
</div>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-1 pt-0">Education</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="education"
                                value={person.education}
                                onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-1 pt-0">Experience</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3"name="experience"
                                    value={person.experience}
                                    onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-2 pt-0">Project 1</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="project1"
                                value={person.project1}
                                onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-2 pt-0">Project 2</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="project2"
                                value={person.project2}
                                onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-2 pt-0">Project 3</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="project3"
                                value={person.project3}
                                onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-1 pt-0">Summary</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="summary"
                                    value={person.summary}
                                    onChange={handleChange}></textarea>
                    </div><br></br>
                    {/* <div class="form-group col-md-6" style={{display:"flex",width:510, justifyContent:"space-between"}}>
                        <div class="input-group-prepend">
                            <label for="Skills"  >Upload your picture</label>
                        </div><br></br>
                        <div class="custom-file">
                            <input  type="file" class="custom-file-input" id="inputGroupFile01"  
                                        accept=".png, .jpg, .jpeg"
                                        name="photo"
                                        // value={newUser.photo}
                                        onChange={handlePhoto}/>
                        </div>
                    </div> */}
                </div><br></br>
                <button type="submit" style={{width:100, marginLeft:-100 }} class="btn btn-primary">Submit</button>
            </form>     
        </div>
    </div>
  )
}

export default Update

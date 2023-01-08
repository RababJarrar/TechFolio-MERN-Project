

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import logoimage from './logo.png';
import bg from './back1.jpeg';



const Form = () => {

    const navigate = useNavigate();

    const [newPortfolio, setNewPortfolio] = useState(
        {
            phoneNumber: "",
            gender: "",
            specialization: "",
            address: "",
            linkedin: "",
            github: "",
            skill1: "",
            skill2: "",

            skill3: "",

            skill4: "",

            skill5: "",

            skill6: "",

            experience: "",
            education: "",
            summary: "",
            project1: "",
            project2: "",

            project3: "",

            profilePicUrl: "",
            photo: "",
        }
    );


    const handleSubmit =   (e) => {
        e.preventDefault();
        

        var data = JSON.parse(sessionStorage.getItem('user'))
        console.log(data.user._id)
        const formData = new FormData();
        formData.append('photo', newPortfolio.photo);
        formData.append('phoneNumber', newPortfolio.phoneNumber);
        formData.append('gender', newPortfolio.gender);
        formData.append('specialization', newPortfolio.specialization);
        formData.append('address', newPortfolio.address);
        formData.append('linkedin', newPortfolio.linkedin);
        formData.append('github', newPortfolio.github);
        formData.append('skill1', newPortfolio.skill1);
        formData.append('skill2', newPortfolio.skill2);

        formData.append('skill3', newPortfolio.skill3);

        formData.append('skill4', newPortfolio.skill4);

        formData.append('skill5', newPortfolio.skill5);

        formData.append('skill6', newPortfolio.skill6);


        formData.append('experience', newPortfolio.experience);
        formData.append('education', newPortfolio.education);
        formData.append('summary', newPortfolio.summary);
        formData.append('project1', newPortfolio.project1);
        formData.append('project2', newPortfolio.project2);

        formData.append('project3', newPortfolio.project3);

        formData.append('profilePicUrl', newPortfolio.profilePicUrl);
        formData.append('user_id', data.user._id);

        
        axios.post('http://localhost:8000/api/portfolio', formData)
        .then(res => navigate("/PortfolioLists"))
        .catch(err => {
            console.log(err);
        });
    }


    const handleChange = (e) => {
        setNewPortfolio({...newPortfolio, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewPortfolio({...newPortfolio, photo: e.target.files[0]});
    }

    return (
    <div style={{display:"flex", backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover" }}>
        <img  src={logoimage} alt="rr" style={{width: 200,height:100 ,flex:1}}/>   
        <div style={{ marginTop:50,marginLeft:300, flex:4}} >
            <form onSubmit={handleSubmit} encType='multipart/form-data' style={{margin:"auto" }}>
                <div class="form-group col-md-12" style={{display:"flex",width:490, justifyContent:"space-between"}}>
                <div class="form-group col-md-5">
                    <legend class="col-form-label col-sm-1 pt-0">Phone</legend>
                    <input type="text" class="form-control" id="inputphone" placeholder="Phone Number" name="phoneNumber"
                                value={newPortfolio.phoneNumber}
                                onChange={handleChange} />
                </div>
                <div class="form-group col-md-5">
                <legend class="col-form-label col-sm-1 pt-0">Address</legend>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Address" name="address"
                                value={newPortfolio.address}
                                onChange={handleChange}/>
                </div>
                </div><br></br>
                <fieldset class="form-group">
                    <div class="row">
                        <legend class="col-form-label col-sm-1 pt-0">Gender</legend>
                        <div class="col-sm-1" style={{display:"flex",width:200, justifyContent:"space-between" }} >
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="gridRadios1" value="Female" checked={newPortfolio.gender === "Female"}
                                onChange={handleChange}/>
                                <label class="form-check-label" for="gridRadios1">
                                    Female
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="gender" id="gridRadios2" value="Male" checked={newPortfolio.gender === "Male"}
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
                                    value={newPortfolio.specialization}
                                    onChange={handleChange}/>
                    </div><br></br>
                    <div class="form-group col-md-12" style={{display:"flex",width:515, justifyContent:"space-between"}}>
                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-1 pt-0">LinkedIn</legend>
                        <input type="url" class="form-control" id="inputLinkedIn" placeholder="LinkedIn" name="linkedin"
                                    value={newPortfolio.linkedin}
                                    onChange={handleChange}/>
                    </div><br></br>
                        <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-1 pt-0">GitHub</legend>
                        <input type="url" class="form-control" id="inputGitHub" placeholder="GitHub" name="github"
                                value={newPortfolio.github}
                                onChange={handleChange}/>
                    </div><br></br>
                    </div><br></br>

        <div class="form-group col-md-12" style={{display:"flex",width:515, justifyContent:"space-between"}}>

                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 1</legend>
                        <input class="form-control" type="text" id="SkillsTextarea1" placeholder="skill" name="skill1"
                                value={newPortfolio.skill1}
                                onChange={handleChange}></input>
                    </div><br></br>
                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 2</legend>
                        <input class="form-control" id="SkillsTextarea1" type="text" placeholder="skill" name="skill2"
                                value={newPortfolio.skill2}
                                onChange={handleChange}></input>
                    </div><br></br>
        </div>
        <br></br>
        <div class="form-group col-md-12" style={{display:"flex",width:515, justifyContent:"space-between"}}>

                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 3</legend>
                        <input class="form-control" id="SkillsTextarea1" placeholder="skill" name="skill3"
                                value={newPortfolio.skill3}
                                onChange={handleChange}></input>
                    </div><br></br>
                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 4</legend>
                        <input class="form-control" id="SkillsTextarea1" placeholder="skill" name="skill4"
                                value={newPortfolio.skill4}
                                onChange={handleChange}></input>
                    </div><br></br>
        </div>
        <br></br>
        <div class="form-group col-md-12" style={{display:"flex",width:515, justifyContent:"space-between"}}>

                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 5</legend>
                        <input class="form-control" id="SkillsTextarea1" placeholder="skill" name="skill5"
                                value={newPortfolio.skill5}
                                onChange={handleChange}></input>
                    </div><br></br>
                    <div class="form-group col-md-5">
                        <legend class="col-form-label col-sm-3 pt-0">Skill 6</legend>
                        <input class="form-control" id="SkillsTextarea1" placeholder="skill" name="skill6"
                                value={newPortfolio.skill6}
                                onChange={handleChange}></input>
                    </div><br></br>
        </div>
        <br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-1 pt-0">Education</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="education"
                                value={newPortfolio.education}
                                onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-1 pt-0">Experience</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3"name="experience"
                                    value={newPortfolio.experience}
                                    onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-2 pt-0">Project 1</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="project1"
                                value={newPortfolio.project1}
                                onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-2 pt-0">Project 2</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="project2"
                                value={newPortfolio.project2}
                                onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-2 pt-0">Project 3</legend>
                        <textarea style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="project3"
                                value={newPortfolio.project3}
                                onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6">
                        <legend class="col-form-label col-sm-1 pt-0">Summary</legend>
                        <textarea  style={{width:"490px"}} class="form-control" id="SkillsTextarea1" rows="3" name="summary"
                                    value={newPortfolio.summary}
                                    onChange={handleChange}></textarea>
                    </div><br></br>
                    <div class="form-group col-md-6" style={{display:"flex",width:510, justifyContent:"space-between"}}>
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
                    </div>
                </div><br></br>
                <button type="submit" style={{width:100, marginLeft:300 }} class="btn btn-primary">Submit</button>
            </form>     
        </div>
    </div>
    );
}

export default Form;
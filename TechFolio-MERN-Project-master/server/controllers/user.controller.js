const  {User } = require('../models/user.model');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { request, response } = require('express');
const { SECRET_KEY } = require("../config/jwt.config");


module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createUser = (request, response) => {
    User.create(request.body)
    .then(user => {
        const userToken = jwt.sign({
            id: user._id
        }, a.env.SECRET_KEY);
        response
            .cookie("usertoken", userToken, secret, {
                httpOnly: true
            })
            .json({ msg: "success!", user: user });
    })
    .catch(err => response.status(400).json({err:err.message}));
    }

    const createToken=(_id)=>{
        return jwt.sign({_id},process.env.JWT_KEY, {expiresIn:'3d'})
    }


// module.exports.createUser = (request, response) => {
//     // session=request.session;

//     const name = request.body.name ;
//     // const password = request.body.password ;
//     // const confirmPassword = request.body.confirmPassword ;

//     const phoneNumber = request.body.phoneNumber ;
//     const email = request.body.email ;
//     const gender = request.body.gender ;
//     const specialization = request.body.specialization ;
//     const address = request.body.address ;
//     const linkedin = request.body.linkedin ;
//     const github = request.body.github ;
//     const skills = request.body.skills ;
//     const experience = request.body.experience ;
//     const education = request.body.education ;
//     const summary = request.body.summary ;
//     const projects = request.body.projects ;
//     const profilePicUrl = request.body.profilePicUrl ;
//     const photo = request.body.photo;

   
//         const newUserData = {

//             name: name,
//             // password: password,
//             // confirmPassword:confirmPassword,
//             phoneNumber: phoneNumber,
//             email: email,
//             gender: gender,
//             specialization: specialization,
//             address: address,
//             linkedin: linkedin,
//             github: github, 
//             skills: skills,
//             experience: experience,
//             education: education,
//             summary: summary,
//             projects: projects,
//             profilePicUrl: profilePicUrl,
//             photo: photo,
//         }
//         const newUser = new User(newUserData);
//         newUser.save()
//         .then(user => response.json(user))
//         .catch(err => response.status(400).json(err))

//     // User.create(request.body)
//     //     .then(user => response.json(user))
//     //     .catch(err => response.status(400).json(err))

//         // newUser.save()
//         //        .then(() => res.json('User Added'))
//         //        .catch(err => res.status(400).json('Error: ' + err));
// }


module.exports.getAllUsers = (request, response) => {
    User.find({})
        .then(users => response.json({users: users}))
        .catch(err => response.json({ message: 'could not find users', error: err}));
}

module.exports.getUser = (request, response) => {
    User.findOne({_id:request.params.id})
        .then(user => response.json(user))
        .catch(err => response.status(404).json(err));
}

module.exports.updateUser = (request, response) => {
    User.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators:true})
        .then(updatedUser => response.json({updatedUser: updatedUser}))
        .catch(err => response.status(400).json(err))
}


module.exports.deleteUser = (request, response) => {
    User.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json({deleteConfirmation:deleteConfirmation }))
        .catch(err => response.json({ message: 'could not delete user', error: err}))
}

module.exports.register = (request, response) => {
    User.create(request.body)
        .then(user => {
            const userToken = jwt.sign({
                id: user._id
            }, SECRET_KEY);
            response
                .cookie("usertoken", userToken, SECRET_KEY, {
                    httpOnly: true
                })
                .json({ msg: "success!", user: user });
        })
        .catch(err => response.json(err));
}


module.exports.login = async (request, response) => {
    session=request.session;
    const user = await User.findOne({ email: request.body.email });
    if (user === null) {
        return response.sendStatus(400);
    }
    const correctPassword = await bcrypt.compare(request.body.password, user.password);
    if (!correctPassword) {
        return response.sendStatus(400);
    }
    const userToken = jwt.sign({
        id: user._id
    }, SECRET_KEY);

    response
        .cookie("usertoken", userToken, SECRET_KEY, {
            httpOnly: true
        })
        .json({ msg: "success!", userToken,user });
}


module.exports.logout = (request, response) => {
    response.clearCookie('usertoken');
    sessionStorage.removeItem('user')

    response.sendStatus(200);
}

module.exports.logout= (req, res) => {
    res
        .cookie("usertoken", jwt.sign({ _id: "" }, SECRET_KEY), {
            httpOnly: true,
            maxAge: 0,
        })
        .json({ msg: "ok" });
    }


module.exports.getLoggedInUser = (req, res) => {
    const decodedJwt = jwt.decode(req.cookies.usertoken, { complete: true });
    User.findById(decodedJwt.payload.id)
        .then((user) => {
            res.json({
                user: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                }
            });
        })
        .catch((error) => res.status(500).json(error));
}



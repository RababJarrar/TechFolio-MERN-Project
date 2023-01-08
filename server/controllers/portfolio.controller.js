const { Portfolio } = require('../models/portfolio.model');
const jwt = require("jsonwebtoken");



module.exports.createPortfolio = (request, response) => {
    // session=request.session;

    const name = request.body.name ;
    // const password = request.body.password ;
    // const confirmPassword = request.body.confirmPassword ;

    const phoneNumber = request.body.phoneNumber ;
    const email = request.body.email ;
    const gender = request.body.gender ;
    const specialization = request.body.specialization ;
    const address = request.body.address ;
    const linkedin = request.body.linkedin ;
    const github = request.body.github ;
    const skill1 = request.body.skill1 ;
    const skill2 = request.body.skill2 ;

    const skill3 = request.body.skill3 ;

    const skill4 = request.body.skill4 ;

    const skill5 = request.body.skill5 ;

    const skill6 = request.body.skill6 ;

    const experience = request.body.experience ;
    const education = request.body.education ;
    const summary = request.body.summary ;

    const project1 = request.body.project1 ;
    const project2 = request.body.project2 ;
    const project3 = request.body.project3 ;

    const profilePicUrl = request.body.profilePicUrl ;
    const photo = request.file.filename;
    const user_id = request.body.user_id;



        const newPortfolioData = {

            name: name,
            // password: password,
            // confirmPassword:confirmPassword,
            phoneNumber: phoneNumber,
            email: email,
            gender: gender,
            specialization: specialization,
            address: address,
            linkedin: linkedin,
            github: github, 
            skill1: skill1,
            skill2: skill2,

            skill3: skill3,

            skill4: skill4,

            skill5: skill5,

            skill6: skill6,

            experience: experience,
            education: education,
            summary: summary,
            project1: project1,
            project2: project2,

            project3: project3,

            profilePicUrl: profilePicUrl,
            photo: photo,
            user_id:user_id,

        }
        const newPortfolio = new Portfolio(newPortfolioData);
        newPortfolio.save()
        .then(Portfolio => response.json(Portfolio))
        .catch(err => response.status(400).json(err))

    // User.create(request.body)
    //     .then(user => response.json(user))
    //     .catch(err => response.status(400).json(err))

        // newUser.save()
        //        .then(() => res.json('User Added'))
        //        .catch(err => res.status(400).json('Error: ' + err));
}


    
    module.exports.getAllPortfolios = (request, response) => {
        Portfolio.find({})
        .populate("user_id")
            .then(Portfolios => response.json(Portfolios))
            .catch(err => response.json(err))
    }
    module.exports.getPortfolio = (request, response) => {
        Portfolio.findOne({_id:request.params.id})
        .populate("user_id")
            .then(Portfolio => response.json(Portfolio))
            .catch(err => response.json(err))
    }

    module.exports.updatePortfolio = (request, response) => {
        Portfolio.findOneAndUpdate({_id: request.params.id}, request.body, {
            new: true,
            runValidators: [true, "{PATH} is required"],
          })
            .then(updatedPortfolio => response.json(updatedPortfolio))
            .catch(err => response.status(400).json(err));
    }
    module.exports.deletePortfolio = (request, response) => {
        Portfolio.deleteOne({ _id: request.params.id })
            .then(deleteConfirmation => response.json(deleteConfirmation))
            .catch(err => response.json(err))
    }
    
const UserController = require('../controllers/user.controller');
const PortfolioController = require('../controllers/Portfolio.controller');
const { authenticate } = require('../config/jwt.config');

const multer = require("multer");
const {v4: uuidv4} = require("uuid");
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'Images');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });

module.exports = function(app){
    app.get('/api', UserController.index);
    app.post("/api/register", UserController.register);
    app.post('/api/login', UserController.login);
    app.get('/api/logout', authenticate ,UserController.logout);
    // app.put('/api/user', upload.single('photo'), UserController.createUser);
    app.get('/api/user', UserController.getAllUsers);
    app.get('/api/user/:id', UserController.getUser);
    app.put('/api/user/:id', UserController.updateUser);
    app.delete('/api/user/:id', UserController.deleteUser);
    app.get('/api/loggedin', authenticate, UserController.getLoggedInUser);


    app.post('/api/portfolio', upload.single('photo'),PortfolioController.createPortfolio);
    app.get('/api/portfolios', PortfolioController.getAllPortfolios);
    app.get('/api/portfolio/:id', PortfolioController.getPortfolio);
    app.put('/api/portfolio/:id', PortfolioController.updatePortfolio);
    app.delete('/api/portfolio/:id', PortfolioController.deletePortfolio);

    
    // app.post('/stats', upload.single('uploaded_file'), function (req, res) {
    //     // req.file is the name of your file in the form above, here 'uploaded_file'
    //     // req.body will hold the text fields, if there were any 
    //     console.log(req.file, req.body)
    //  });

}

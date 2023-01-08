
require('dotenv').config();
const sessions = require('express-session');

// const dotenv = require("dotenv");
// dotenv.config();

require('./config/mongoose.config');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();
// const port = 8000;
// const port = process.env.PORT || 3000;

const port = process.env.PORT || 8000;

// const mode = process.env.NODE_ENV

const jwt = require("jsonwebtoken");

app.use(cookieParser());
// app.use(cors());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(express.static(__dirname));

app.use(express.static("Images"))

require('./routes/user.routes')(app);

// app.listen(port, () => console.log('Listening on port: ',port));


// const oneDay = 1000 * 60 * 60 * 24;
// app.use(sessions({
//     secret: "portfolio",
//     saveUninitialized:true,
//     cookie: { 
//         httpOnly: true,
//         maxAge: oneDay },
//     resave: false 
// }));

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, { cors: true });


const msgs = [];
io.on("connection", socket => {
    console.log("Nice to meet me.");
    socket.emit("welcome", "Welcome to our socket!");
    io.emit("messages_to_chat", msgs);
    socket.on("message_from_client", data => {
        msgs.push(data);
        io.emit("messages_to_chat", msgs);
    });
    socket.on("new_user", data => {
        msgs.push({msg:data+" has joined the chat"});
        io.emit("messages_to_chat", msgs);
    })
});















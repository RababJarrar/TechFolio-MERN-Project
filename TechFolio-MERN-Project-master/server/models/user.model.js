const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: { 
        type: String,      
        required: [true, "Name is required"],
        minlength: [3, "A name should be at least three characters."]
     },

     password: {
        type: String,
        // required: [true, "password is required"],
        minlength: [8, "Password must be 8 characters or longer"]
    },

    // phoneNumber: {
    //     type: Number,
    //     // required: [true, "phone number is required"],
    // },

     email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: [true, 'Email address is required'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          },
        // validate: [{ validator: value => isEmail(value), msg: 'Invalid email.' }],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    // gender: {
    //     type: String, 
    //     enum: ["Male", "Female"]
    // },
    // specialization: {
    //     type: String, 
    //     // required: [true, 'specialization is required'],
    //     minlength: [3, "It should be at least three characters."]
    // },
    // address: {
    //     type: String, 
    //     // required: [true, 'address is required'],
    //     minlength: [3, "It should be at least three characters."]
    // },
    // linkedin: {
    //     type: String, 
    // },
    // github: {
    //     type: String, 
    // },
    // skills: {
    //     type: String, 
    // },
    // experience: {
    //     type: String, 
    // },
    // education: {
    //     type: String, 
    // },
    // summary: {
    //     type: String, 
    // },
    // projects: {
    //     type: String, 
    // },
    // profilePicUrl: {
    //     type: String, 
    //     // required: [true, "Profile picture is required"],
    // },
    // photo: {
    //     type: String
    // },


}, { timestamps: true });


UserSchema.virtual('confirmPassword')
  .get( () => this._confirmPassword )
  .set( value => this._confirmPassword = value );


UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'Password must match confirm password');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

module.exports.User = mongoose.model('User', UserSchema);


const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');

// passport use LocalStrategy for authentication
passport.use(new LocalStrategy({   // LocalStrategy takes two param ,
    usernameField: 'email'         // one is username
},function(email,password,done){   // and the second one is function

    // find user using email property
    User.findOne({email:email},(err,user)=>{
        if(err){
            console.log('Error in finding the user in --> passport');
            return done(err);
        }
        if(!user || user.password != password){
            console.log('Invalid Username/Password');
            return done(null,false);
        }
        return done(null,user);
    });
}));


// serializing the user which key is set as cookie
passport.serializeUser((user,done)=>{
    done(null,user.id);
});

// deserializing the user from the key in the cookies
passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        if(err){
            console.log('Error in finding the user -->passport');
            return done(err);
        }
        return done(null,user);
    });
});

module.exports = passport;
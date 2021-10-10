const User = require("../models/user");

// render the user profile
module.exports.profile = function (req, res) {
  return res.render("user_profile", {
    title: "Profile",
  });
};

// render a sign_up page
module.exports.signUp = function (req, res) {
  if(req.isAuthenticated()){
    return res.redirect('/users/profile');
  }
  return res.render("user_sign_up", {
    title: "User",
  });
};

// render a sign_in page
module.exports.signIn = function (req, res) {
  if(req.isAuthenticated()){
    return res.redirect('/users/profile');
  }
  res.render("user_sign_in", {
    title: "User",
  });
};

// get the sign up data
module.exports.create = function (req, res) {
  if (req.body.password != req.body.confirmPassword) {
    res.redirect("/users/sign-up");
  }
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) {
      console.log("Error in finding the user");
      return;
    }
    if (!user) {
      User.create(
        {
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
        },
        (err, user) => {
          if (err) {
            console.log("Error in creating a user on sign up");
            return;
          }
          return res.redirect("/users/sign-in");
        }
      );
    } else {
      return res.redirect("/users/sign-up");
    }
  });
};

// get the sign in data
module.exports.createSession = function (req, res) {
  return res.redirect('/');
};

// Log out
module.exports.destroySession = function(req,res){
  req.logout();
  return res.redirect('/');
}
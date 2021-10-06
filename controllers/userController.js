// render the user profile
module.exports.profile = function(req, res) {
    return res.render('user',{
        title:"Profile"
    });
}

// render a sign_up page
module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"User"
    });
}

// render a sign_in page
module.exports.signIn = function(req,res){
    res.render('user_sign_in',{
        title:"User"
    });
}

// get the sign up data
module.exports.create = function(req,res){
    // Todo later
}

// get the sign in data
module.exports.createSession = function(req,res){
    // Todo later
}
module.exports.profile = function(req, res) {
    return res.render('user',{
        title:"Profile"
    });
}

module.exports.signUp = function(req,res){
    return res.render('user_sign_up',{
        title:"User"
    });
}

module.exports.signIn = function(req,res){
    res.render('user_sign_in',{
        title:"User"
    });
}
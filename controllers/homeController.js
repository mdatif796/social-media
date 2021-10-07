module.exports.home = function(req, res) {
    res.cookie('user_id',55);  // cookies sent to browser
    console.log(req.cookies);  // cookies comes from browser
    return res.render('home',{
        title:"home"
    });
}
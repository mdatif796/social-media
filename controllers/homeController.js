const Post = require("../models/post");

module.exports.home = function (req, res) {
  // res.cookie('user_id',55);  // cookies sent to browser
  // console.log(req.cookies);  // cookies comes from browser
  // Post.find({}, (err, posts) => {
  //   if (err) {
  //     console.log("Error in finding the post of a user");
  //     return;
  //   }
  //   console.log(posts);
  //   return res.render("home", {
  //     title: "Home",
  //     posts: posts,
  //   });
  // });

  // Populate the data of user
  Post.find({}).populate('user').exec((err,posts)=>{
    if(err){console.log('Error in finding the post');return;}
    return res.render('home',{
      title: "Home",
      posts: posts
    });
  });
}

const Post = require('../models/post');


module.exports.home = function(req, res){

    if(!req.isAuthenticated())
    {
      return  res.redirect('/users/sign-in');
    }
  //   Post.find({}).populate('user').exec(function(err,posts){
  //     return res.render('home', {
  //       title: "Codeial | Home",
  //       posts : posts
  //   });
  // });
    
    Post.find({})
    .populate('user')
    .populate({
      path: 'comments',
      populate : {
        path: 'user'
      }
    })
    .exec(function(err,posts){
      return res.render('home', {
      title: "Codeial | Home",
      posts : posts,
      flag: 0
      });
    });

  
}


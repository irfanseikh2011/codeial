const Post = require('../models/posts');


module.exports.home = function(req, res){

    if(!req.isAuthenticated())
    {
      return  res.redirect('/users/sign-in');
    }


    // console.log(req.cookies);
    // res.cookie('user_id', 25);
    return res.render('home', {
        title: "Codeial | Home",
        posts : posts
    });
}

// module.exports.actionName = function(req, res){}
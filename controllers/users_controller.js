module.exports.profile = function(req,res){
    res.render('user_profile',{
        title: 'User Profile'
    });
};

//variable to contain all the months
var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];


//module to render the signup page
module.exports.signup = function(req,res){
    return res.render('signup',{
        title: 'Codeial - Login or Signup',
        month : month
    });
};

//get the signup details
module.exports.create = function(req,res){
    
}


//to create the session of the user
module.exports.createSession = function(req,res){
    
}

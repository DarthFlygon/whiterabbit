//Used to check if the user id in the request exists in database//

var User = require('../models/user');

const emailValidator = (req, res, next) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        console.log(user)
        if(user){
            res.status(400).json({
                success:false,
                message:'Email already in use',
                });
        }
        else{
            next()
        }
        
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:err,
            });
         });
}

module.exports = {
    emailValidator
}
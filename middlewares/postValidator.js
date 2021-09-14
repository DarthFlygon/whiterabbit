//Used to check if the post id in the request exists in database//

var Post = require('../models/post');

const postValidator = (req, res, next) => {
    Post.findById(req.body.post)
    .then((post) => {
        if(!post){
            res.status(400).json({
                success:false,
                message:'Invalid Post ID',
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
    postValidator
}
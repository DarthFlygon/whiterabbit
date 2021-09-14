var Post= require('../models/post');

//-------------------------Get all posts------------------------//
/* This function is used to get every post from database */
exports.post_get = function(req, res) {
    Post.find()
    .sort({time_stamp:-1})
    .then(function (list_posts) {
        res.status(200)
        .render('posts', { post_list: list_posts });
      }).catch((err) => {
        res.status(500).json({
            success:false,
            message:err
        }); 
      });
};

//---------------------Create new Post---------------------//
/* This function is used to create a new post.
It also updates 2 way referencing in user*/
exports.post_create = function(req, res) 
{   
    let post = new Post(
        {
            title: req.body.title,
            description: req.body.description, 
        });
    post.save()
    .then((newPost) =>{
        res.status(200)
        .redirect('/');
    })
    .catch((err) => {
        res.status(500).json({
            success:false,
            message:err
        });
    });
 };

 //------------------------Delete Post-----------------------//
/* This function is used to delete posts of users */
exports.delete_post = function(req, res) {
    Post.deleteOne({title:req.title})
    .then(function(){
        res.status(200)
        .redirect('/posts');
    }).catch((err)=>{
        res.status(500).json({
            success:false,
            message:err
        });
    });
};
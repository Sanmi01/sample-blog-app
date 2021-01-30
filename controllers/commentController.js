var Comment = require('../models/comment');
var models = require('../models');

// Display comment create form on GET.
exports.comment_create_get = function(req, res, next) {
        // create comment GET controller logic here 
        
        // renders a comment form
        res.render('forms/comment_form', { title: 'Create Comment', layout: 'layouts/main'});
};

// Handle comment create on POST.
exports.comment_create_post = function(req, res, next) {
     // create comment POST controller logic here
     models.Comment.create({
            title: req.body.title,
            username: req.body.username,
            body: req.body.body,
        }).then(function() {
            console.log("Comment created successfully");
           // check if there was an error during post creation
           // res.redirect('/blog/users');  COME BACK HERE LATER
      });
     //res.redirect("/users");
     res.redirect("/blog/comments");
     
     // If a comment gets created successfully, we just redirect to comments list
     // no need to render a page
     // res.redirect("/comments");
};

// Display comment delete form on GET.
exports.comment_delete_get = function(req, res, next) {
        // GET logic to delete a comment here
        models.Comment.destroy({
            // find the user_id to delete from database
            where: {
              id: req.params.comment_id
            }
          }).then(function() {
           // If a user gets deleted successfully, we just redirect to users list
           // no need to render a page
            res.redirect('/blog/comments');
            console.log("Comment deleted successfully");
          });
        // renders delete page
        //res.render('pages/comment_delete', { title: 'Delete Comment', layout: 'layouts/detail'} );
};

// Handle comment delete on POST.
exports.comment_delete_post = function(req, res, next) {
        // POST logic to delete a comment here
        models.Comment.destroy({
            // find the user_id to delete from database
            where: {
              id: req.params.comment_id
            }
          }).then(function() {
           // If a user gets deleted successfully, we just redirect to users list
           // no need to render a page
            res.redirect('/blog/comments');
            console.log("Comment deleted successfully");
          });
        // If a comment gets deleted successfully, we just redirect to comments list
        // no need to render a page
        //res.redirect('/comments');
};

// Display comment update form on GET.
exports.comment_update_get = function(req, res, next) {
        // GET logic to update a comment here
        console.log("ID is " + req.params.comment_id);
        models.Comment.findById(
                req.params.comment_id
        ).then(function(comment) {
               // renders a post form
               res.render('forms/comment_form', { title: 'Update Comment', comment: comment, layout: 'layouts/main'});
               console.log("Comment update get successful");
          });
        // renders a comment form
        // res.render('forms/comment_form', { title: 'Update Comment',  layout: 'layouts/detail' });
};

// Handle comment update on POST.
exports.comment_update_post = function(req, res, next) {
        // POST logic to update a comment here
       
        // If a comment gets updated successfully, we just redirect to comments list
        // no need to render a page
        console.log("ID is " + req.params.comment_id);
        models.Comment.update(
        // Values to update
            {
                title: req.body.title,
                body: req.body.body,
            },
          { // Clause
                where: 
                {
                    id: req.params.comment_id
                }
            }
        //   returning: true, where: {id: req.params.post_id} 
         ).then(function() { 
                // If an post gets updated successfully, we just redirect to posts list
                // no need to render a page
                res.redirect("/blog/comments");  
                console.log("Comment updated successfully");
          });
        //res.redirect("/comments");
};

// Display list of all comments.
exports.comment_list = function(req, res, next) {
        // controller logic to display all comments
        models.Comment.findAll(
        ).then(function(comments) {
        // renders a post list page
        console.log("rendering comment list");
        res.render('pages/comment_list', { title: 'Comment List', comments: comments, layout: 'layouts/list'} );
        console.log("Comment list renders successfully");
        });
        // renders a comment list page
        // res.render('pages/comment_list', { title: 'Comment List',  layout: 'layouts/list'} );
};

// Display detail page for a specific comment.
exports.comment_detail = function(req, res, next) {
        // constroller logic to display a single comment
        models.Comment.findById(
                req.params.comment_id
        ).then(function(comment) {
        // renders an inividual user details page
        res.render('pages/comment_detail', { title: 'Comment Details', comment: comment, layout: 'layouts/main'} );
        console.log("Comment details renders successfully");
        });
        // renders an inividual comment details page
        //res.render('pages/comment_detail', { title: 'Comment Details',  layout: 'layouts/detail'} );
};

 
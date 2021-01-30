var Category = require('../models/category');
var models = require('../models');

// Display category create form on GET.
exports.category_create_get = function(req, res, next) {
        // create category GET controller logic here 
        
        // renders a category form
        res.render('forms/category_form', { title: 'Create Category',  layout: 'layouts/main'});
};

// Handle category create on POST.
exports.category_create_post = function(req, res, next) {
     // create category POST controller logic here
     models.Category.create({
            name: req.body.name,
            specification: req.body.specification,
        }).then(function() {
            console.log("Category created successfully");
           // check if there was an error during post creation
           // res.redirect('/blog/users');  COME BACK HERE LATER
      });
     //res.redirect("/users");
     res.redirect("/blog/categories");
     // If a category gets created successfully, we just redirect to categories list
     // no need to render a page
     // res.redirect("/categories");
};

// Display category delete form on GET.
exports.category_delete_get = function(req, res, next) {
        // GET logic to delete a category here
        models.Category.destroy({
            // find the user_id to delete from database
            where: {
              id: req.params.category_id
            }
          }).then(function() {
           // If a user gets deleted successfully, we just redirect to users list
           // no need to render a page
            res.redirect('/blog/categories');
            console.log("User deleted successfully");
          });
        // renders delete page
        //res.render('pages/category_delete', { title: 'Delete Category',  layout: 'layouts/detail'} );
};

// Handle category delete on POST.
exports.category_delete_post = function(req, res, next) {
        // POST logic to delete a category here
        models.Category.destroy({
            // find the user_id to delete from database
            where: {
              id: req.params.category_id
            }
          }).then(function() {
           // If a user gets deleted successfully, we just redirect to users list
           // no need to render a page
            res.redirect('/blog/categories');
            console.log("Category deleted successfully");
          });
        // If a category gets deleted successfully, we just redirect to categories list
        // no need to render a page
        // res.redirect('/categories');
};

// Display category update form on GET.
exports.category_update_get = function(req, res, next) {
        // GET logic to update a category here
        console.log("ID is " + req.params.category_id);
        models.Category.findById(
                req.params.category_id
        ).then(function(category) {
               // renders a post form
               res.render('forms/category_form', { title: 'Update Category', category: category, layout: 'layouts/main'});
               console.log("Category update get successful");
          });
        // renders a category form
        //res.render('forms/category_form', { title: 'Update Category',  layout: 'layouts/detail' });
};

// Handle category update on POST.
exports.category_update_post = function(req, res, next) {
        // POST logic to update a category here
       console.log("ID is " + req.params.category_id);
        models.Category.update(
        // Values to update
            {
                name: req.body.name,
                specification: req.body.specification,
            },
          { // Clause
                where: 
                {
                    id: req.params.category_id
                }
            }
        //   returning: true, where: {id: req.params.post_id} 
         ).then(function() { 
                // If an post gets updated successfully, we just redirect to posts list
                // no need to render a page
                res.redirect("/blog/categories");  
                console.log("Category updated successfully");
          });
        // renders a category list page
        res.render('pages/category_list', { title: 'Category List',  layout: 'layouts/list'} );
        // If a category gets updated successfully, we just redirect to categories list
        // no need to render a page
        res.redirect("/categories");
};

// Display list of all categories.
exports.category_list = function(req, res, next) {
        // controller logic to display all categories
        models.Category.findAll(
        ).then(function(categories) {
        // renders a post list page
        console.log("rendering category list");
        res.render('pages/category_list', { title: 'Category List', categories: categories, layout: 'layouts/list'} );
        console.log("Category list renders successfully");
        });
};

// Display detail page for a specific category.
exports.category_detail = function(req, res, next) {
        // constroller logic to display a single category
        models.Category.findById(
                req.params.category_id
        ).then(function(category) {
        // renders an inividual user details page
        res.render('pages/category_detail', { title: 'Category Details', category: category, layout: 'layouts/main'} );
        console.log("Category details renders successfully");
        });
        // renders an inividual category details page
        // res.render('pages/category_detail', { title: 'Category Details',  layout: 'layouts/detail'} );
};

 
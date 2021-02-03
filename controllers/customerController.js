var Customer = require('../models/customer');
var models = require('../models');

// Display customer create form on GET.
// exports.customer_create_get = function(req, res, next) {
//         // create customer GET controller logic here 
//         res.render('forms/customer_form', { title: 'Create Customer',  layout: 'layouts/main'});
// };

// Handle customer create on POST.
exports.customer_create_post = function(req, res, next) {
     // create customer POST controller logic here
     // If an customer gets created successfully, we just redirect to customers list
     // no need to render a page
      models.Customer.create({
            full_name: req.body.full_name,
            email: req.body.email,
            billing_address: req.body.billing_address,
            default_shipping_address: req.body.default_shipping_address,
            phone: req.body.phone,
        //     "full_name": "Awelewa",
        //     "email": "supersanmi01@gmail.com",
        //     "billing_address": "22 Jump Street",
        //     "default_shipping_address": "21 Jump Street",
        //     "phone": "14315",
        }).then(customer => {
            res.json({
                success:'Customer Created Successfully',
                customer:customer
            });
        
        }).catch(error => {
            console.log("There was an error: " + error);
            res.status(404).send(error);
        })
};

// Display customer delete form on GET.
exports.customer_delete_get = function(req, res, next) {
        // GET logic to delete an customer here
        models.Customer.destroy({
            // find the post_id to delete from database
            where: {
              id: req.params.customer_id
            }
          }).then(customer => {
                res.json({
                    success:'Customer Deleted Successfully',
                //     customer:customer
                });
            
            }).catch(error => {
                console.log("There was an error: " + error);
                res.status(404).send(error);
            })
};

// Handle customer delete on POST.
exports.customer_delete_post = function(req, res, next) {
        // POST logic to delete an customer here
        // If an customer gets deleted successfully, we just redirect to customers list
        // no need to render a page
        models.Customer.destroy({
            // find the post_id to delete from database
            where: {
              id: req.params.customer_id
            }
          }).then(customer => {
                res.json({
                    success:'Customer Deleted Successfully',
                //     customer:customer
                });
            
            }).catch(error => {
                console.log("There was an error: " + error);
                res.status(404).send(error);
            })
};

// Display customer update form on GET.
exports.customer_update_get = function(req, res, next) {
        // GET logic to update an customer here
        console.log("ID is " + req.params.customer_id);
        models.Customer.findById(
                req.params.customer_id
                ).then(customer => {
                        res.json({
                            success:'Customer Update Get Successfully',
                            customer:customer
                        });
                    
                    }).catch(error => {
                        console.log("There was an error: " + error);
                        res.status(404).send(error);
                    })
        // ).then(function(customer) {
        //        // renders a post form
        //        res.render('forms/customer_form', { title: 'Update Customer', customer: customer, layout: 'layouts/main'});
        //        console.log("Customer update get successful");
        //   });
        // renders customer form
       // res.render('forms/customer_form', { title: 'Update Customer',  layout: 'layouts/detail'});
};

// Handle post update on POST.
exports.customer_update_post = function(req, res, next) {
        // POST logic to update an customer here
        // If an customer gets updated successfully, we just redirect to customers list
        // no need to render a page
        console.log("ID is " + req.params.customer_id);
        models.Customer.update(
        // Values to update
            {
                full_name: req.body.full_name,
            email: req.body.email,
            billing_address: req.body.billing_address,
            default_shipping_address: req.body.default_shipping_address,
            phone: req.body.phone,
            },
          { // Clause
                where:
                {
                    id: req.params.customer_id
                }
            }
        //   returning: true, where: {id: req.params.post_id} 
         ).then(customer => {
                res.json({
                    success:'Customer Updated Successfully',
                    customer:customer
                });
            
            }).catch(error => {
                console.log("There was an error: " + error);
                res.status(404).send(error);
            })
};

// Display list of all customers.
exports.customer_list = function(req, res, next) {
        // GET controller logic to list all customers
        models.Customer.findAll(
                ).then(customers => {
                        res.json({
                            success:'Customers List Outputted Successfully',
                            customers:customers
                        });
                    
                    }).catch(error => {
                        console.log("There was an error: " + error);
                        res.status(404).send(error);
                    })
        // ).then(function(customers) {
        // // renders a post list page
        // console.log("rendering customer list");
        // res.render('pages/customer_list', { title: 'Customer List', customers: customers, layout: 'layouts/list'} );
        // console.log("Customers list renders successfully");
        // });
        // // renders all customers list
};

// Display detail page for a specific customer.
exports.customer_detail = function(req, res, next) {
        // GET controller logic to display just one customer
        models.Customer.findById(
                req.params.customer_id
        ).then(customer => {
                res.json({
                    success:'Customer Detail Outputted Successfully',
                    customer:customer
                });
            
            }).catch(error => {
                console.log("There was an error: " + error);
                res.status(404).send(error);
            })
};

 
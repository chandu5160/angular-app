var express = require("express");
var adminRoutes = express.Router();
var path = require('path');
var dbConnection = require('../dataBaseConnection/dbConnection');

adminRoutes.post('/addCategory', (req, res) => {
    var sql = "insert into categories SET ?";
    var post = { category: req.body.category_name };
    dbConnection.query(sql, post, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json("success");
        }
    });
});

adminRoutes.get('/getCategories', (req, res) => {
    var sql = "select * from categories";
    dbConnection.query(sql, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});


adminRoutes.post('/addBrand', (req, res) => {
    var sql = "insert into brands SET ?";
    var post = { brand: req.body.brand_name, categories_id: req.body.category_id };
    dbConnection.query(sql, post, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json("success");
        }
    });
});

adminRoutes.post('/getBrandsByCatgoryId', (req, res) => {
    var sql = 'select * from brands where categories_id =' + req.body.category_id;
    dbConnection.query(sql, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

adminRoutes.post('/addProduct', (req, res) => {
    var sql = "insert into products SET ?";
    var post = { product: req.body.product, quantity: req.body.quantity, brand_id: req.body.brandId };
    dbConnection.query(sql, post, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

adminRoutes.get('/getBrands', (req, res) => {
    var sql = 'select * from brands';
    dbConnection.query(sql, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

adminRoutes.get('/getProducts', (req, res) => {
    var sql = 'select * from products';
    dbConnection.query(sql, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

adminRoutes.post('/removeProduct', (req, res) => {
    var sql = 'DELETE FROM products WHERE prduct_id =' + req.body.productId;
    dbConnection.query(sql, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

adminRoutes.post('/removeBrand', (req, res) => {
    var productsql = 'DELETE FROM brands WHERE brand_id =' + req.body.brandId;
    dbConnection.query(productsql, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

adminRoutes.post('/removeCategory', (req, res) => {
    var productsql = 'DELETE FROM categories WHERE categories_id =' + req.body.categoryId;
    dbConnection.query(productsql, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

adminRoutes.post('/updateCategory', (req, res) => {
  
    var sql = "UPDATE brands SET category = '"+ req.body.category +"' WHERE categories_id = "+ req.body.categories_id;

    dbConnection.query(sql, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

adminRoutes.post('/updateBrand', (req, res) => {
  
    var sql = "UPDATE brands SET brand = '"+ req.body.brand +"' WHERE brand_id = "+ req.body.brand_id;

    dbConnection.query(sql, function (err, row) {
        if (err) {
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

adminRoutes.post('/updateProduct', (req, res) => {
  
    var sql = "UPDATE products SET product = '"+ req.body.product +"', quantity="+ req.body.quantity+" WHERE prduct_id = "+ req.body.prduct_id;

    dbConnection.query(sql, function (err, row) {
        if (err) {
            console.log(err)
            res.json("error");
        } else {
            res.json(row);
        }
    });
});

module.exports = adminRoutes;
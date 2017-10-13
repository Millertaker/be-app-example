import express from 'express';
import db from './../middlewares/db';
import views from './../middlewares/views';

/**
*
* Home Controller
*/
module.exports = () => {

  //this method is just to example
  let addNumbers = function(a,b){
    return a + b;
  }

  let getDataFromDB = (req, res, next) => {
    db.getProducts(req, res)
    .then((data) => {
      req.products = data;
      return db.getCatetories(req, res);
    })
    .then((data) => {
      req.categories = data;
      next();
    })
    .catch( error => {
      res.status(500).send();
      next();
    });
  }

  let renderPage = (req, res, next) => {
    views.printProducts(req, res)
      .catch((error) => {
        res.status(500).send();
      });
  }

  let init =  (app) => {
    app.get('/', getDataFromDB ,renderPage);
  }

  return {
    init: init,
    addNumbers: addNumbers
  };
}

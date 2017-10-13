import products from './../models/products';
import categories from './../models/categories';
import tags from './../models/tags';

let getProducts = (req, res) => {
  return new Promise((resolve, reject) => {
    try{
      products.find({}, (error, data) => {
        resolve(data);
      });
    } catch(error) {
      reject(error);
    }
  });
}

let getCatetories = (req, res) => {
  return new Promise((resolve, reject) => {
    try{
      categories.find({}, (error, data) => {
        resolve(data);
      });
    } catch(error) {
      reject(error);
    }
  });
}


module.exports = {
  getProducts, getCatetories
};


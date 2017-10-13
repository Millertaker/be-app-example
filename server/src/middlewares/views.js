
let printProducts = (req, res) => {
  return new Promise((resolve, reject) => {
    res.render('home', { products: req.products, categories: req.categories });
    resolve();
  });
}

module.exports = {
  printProducts: printProducts
}
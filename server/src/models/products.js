import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let productsSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: false },
  tags: { type: Array, required: false, unique: false },
  images: { type: Array, required: false, unique: false },
  categories: { type: Array, required: true, unique: false }
});

module.exports = mongoose.model('products', productsSchema);

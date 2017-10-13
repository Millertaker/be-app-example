import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let categoriesSchema = new Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: false },
  parent_category: { type: String, required: false, unique: false },
  tags: { type: Array, required: false, unique: false },
  images: { type: Array, required: false, unique: false }
});

module.exports = mongoose.model('categories', categoriesSchema);

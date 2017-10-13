import mongoose from 'mongoose';

let Schema = mongoose.Schema;

let tagsSchema = new Schema({
  val: { type: String, required: true, unique: true },
  create_date: { type: Date, required: true }
});

module.exports = mongoose.model('tags', tagsSchema);


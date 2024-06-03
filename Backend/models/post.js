const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  description: { type: String, required: true },
  media: { type: String }, // The filename of the uploaded media
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Post', PostSchema);






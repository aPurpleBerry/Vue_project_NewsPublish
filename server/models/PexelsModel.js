const mongoose = require('mongoose');

const PexelsSchema = new mongoose.Schema({
  id: String,
  title: String,
  tags: [String],
  photoLink: String,
  photo: String,
  author: String,
  authorLike: String,
  avatar: String,
  photoDownLink: String,
  photoWidth: Number,
  photoHeight: Number,
  photoType: String,
}, { timestamps: true });

module.exports = mongoose.model('pexels', PexelsSchema);

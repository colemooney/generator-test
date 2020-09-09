const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  author: {
    type: String,
  },
  date: {
    type: String,
  },
  passage: {
    type: Number,
  },
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post

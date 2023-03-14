const mongoose = require('mongoose');

const forumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  }
});

const Category = mongoose.model('Forum', forumSchema);

module.exports = Forum;
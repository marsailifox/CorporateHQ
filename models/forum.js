const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const forumsSchema = new Schema({
    name: String,
    description: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        }
    ]
});

module.exports = mongoose.model('Forums', forumsSchema);
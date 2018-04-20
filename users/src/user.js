
const mongoose = require('mongoose');
const PostSchema = require('./post');
const Schema = mongoose.Schema;

//mongoose.set('debug', true);

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    postCode: Number,
    posts: [PostSchema],
    blogPosts: [{
        type: Schema.Types.ObjectId,
        ref: 'blogPost'
    }]
});

const User = mongoose.model('user', UserSchema);

module.exports = User;
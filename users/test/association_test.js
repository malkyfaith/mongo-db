const mongoose = require('mongoose');
const assert = require('assert');
const User = require('../src/user');
const Comment = require('../src/comment');
const BlogPost = require('../src/blogPost');

describe('Assocaition test', () => {
    let malkeet, blogPost, comment;
    beforeEach((done) => {
        malkeet = new User({ name: 'Malkeet' });
        blogPost = new BlogPost({ title: 'JS is great', content: 'Yes agreed!' });
        comment = new Comment({ content: 'Congratulation mate!' });

        malkeet.blogPosts.push(blogPost);
        blogPost.comments.push(comment);
        comment.user = malkeet;

        Promise.all([malkeet.save(), blogPost.save(), comment.save()]).then(() => done());
    })

    it.only('save a relation between user and blogpost', (done) => {
        User.findOne({ name: 'Malkeet' }).populate('blogPosts').then((user) => {
            console.log(JSON.stringify(user));
            assert(user.blogPosts[0].title === 'JS is great');
            done();
        })
    })
});
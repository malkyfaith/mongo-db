const mongoose = require('mongoose');
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

    it('save a relation between user and blogpost', (done) => {
        User.findOne({ name: 'Malkeet' }).then((user) => {
            console.log(JSON.stringify(user));
            done();
        })
    })
});
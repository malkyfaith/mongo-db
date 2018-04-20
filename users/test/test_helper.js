const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

before((done) => {
    mongoose.connect('mongodb://localhost/users_test');
    mongoose.connection
        .once('open', () => {
            done();
        })
        .on('error', (err) => {
            console.warn('warning:' + err);
        })
});

beforeEach((done) => {
    const { users, blogposts, comments } = mongoose.connection.collections;
    users.drop(() => {
        blogposts.drop(() => {
            comments.drop(() => {
                done();
            })
        })
    })
})
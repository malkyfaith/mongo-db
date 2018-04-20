const assert = require('assert');
const User = require('../src/user');

describe('Sub document', () => {
    it('create sub document', (done) => {
        const malkeet = new User({ name: 'Malkeet', posts: [{ title: 'JS' }, { title: 'Node' }, { title: 'Mongo' }] });
        malkeet.save().then(() => {
            User.findOne({ name: 'Malkeet' }).then(user => {
                assert(user.name === 'Malkeet');
                assert(user.posts !== undefined);
                assert(user.posts[0].title === 'JS');
                done();
            })
        })
    });

    it('remove sub document', (done) => {
        const malkeet = new User({ name: 'Malkeet', posts: [{ title: 'JS' }] });
        malkeet.save().then(() => {
            User.findOne({ name: 'Malkeet' }).then(user => {
                user.set('posts', []);
                //const post = user.posts[0];
                //post.remove();
                return user.save()
            }).then(() => {
                User.findOne({ name: 'Malkeet' }).then(user => {
                    assert(user.posts.length === 0);
                    done();
                })
            })
        })
    })
})
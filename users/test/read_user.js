const assert = require('assert');
const User = require('../src/user');

describe('Search records', () => {
    let malkeet1;
    beforeEach((done) => {
        malkeet1 = new User({ name: 'Malkeet' });
        malkeet1.save()
            .then(() => done());
    });
    it('read users with a name of Malkeet', (done) => {
        User.find({ name: 'Malkeet' })
            .then((users) => {
                assert(users[0]._id.toString() === malkeet1._id.toString());
                done();
            })
    });

    it('read users with a specific id', (done) => {
        User.findOne({ _id: malkeet1._id })
            .then((user) => {
                assert(user.name === malkeet1.name);
                done();
            })
    });
})
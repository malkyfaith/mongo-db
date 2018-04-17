const assert = require('assert');
const User = require('../src/user');

describe('updating records', () => {
    beforeEach((done) => {
        malkeet1 = new User({ name: 'Malkeet' });
        malkeet1.save()
            .then(() => done());
    });
    it('update a user', (done) => {
        malkeet1.set({ name: 'Amar' });
        assertName(malkeet1.save(), done);
    });

    it('update a user', (done) => {
        assertName(malkeet1.update({name: 'Amar'}), done);
    });

    it('update a user using class instance', (done) => {
        assertName(User.update({name: 'Malkeet'}, {name: 'Amar'}), done);
    });

    it('update a user using class instance by id', (done) => {
        assertName(User.findByIdAndUpdate(malkeet1._id, {name: 'Amar'}), done);
    });

    function assertName(operation, done) {
        operation
            .then(() => {
                User.findOne({ _id: malkeet1._id }).then(user => {
                    assert(user.name === 'Amar');
                    done();
                });
            })
    }
});

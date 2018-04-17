const assert = require('assert');
const User = require('../src/user');

describe('deleting records', () => {
    let malkeet1;
    beforeEach((done) => {
        malkeet1 = new User({ name: 'Malkeet' });
        malkeet1.save()
            .then(() => done());
    });
    it('delete a user by model instance', (done) => {
        malkeet1.remove()
            .then(() => User.findOne({ name: 'Malkeet' }))
            .then((user) => {
                assert(user == null);
                done();
            })
    });
    it('delete a user by class method remove', (done) => {
        User.remove()
            .then(() => User.findOne({ name: 'Malkeet' }))
            .then((user) => {
                assert(user == null);
                done();
            });
    });
    it('delete a user by class method findAndRemove', (done) => {
        User.findOneAndRemove({_id : malkeet1._id})
            .then(() => User.findOne({ name: 'Malkeet' }))
            .then((user) => {
                assert(user == null);
                done();
            });
    });
    it('delete a user by class method findByIdAndRemove', (done) => {
        User.findByIdAndRemove({_id : malkeet1._id})
            .then(() => User.findOne({ name: 'Malkeet' }))
            .then((user) => {
                assert(user == null);
                done();
            });
    });
});

const assert = require('assert');
const User = require('../src/user');

describe('validating records', () => {
    it('requires a user name', (done) => {
        const user = new User({ name: undefined });
        const validationResult = user.validateSync();
        assert(validationResult.errors.name.message == 'Name is required');
        done();
    });

    it('disllow invalid records', (done) => {
        const user = new User({ name: undefined });
        user.save()
            .catch(validationResult => {
                assert(validationResult.errors.name.message == 'Name is required');
                done();
            })
    })

});
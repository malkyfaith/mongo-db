const assert = require('assert');
const User = require('../src/user');

describe('creating records', ()=>{
    it('saves a user', (done) => {
        const malkeet = new User({name: 'Malkeet'});
        malkeet.save().then(() =>{
            assert(!malkeet.isNew);
            done();
        });
    });
});

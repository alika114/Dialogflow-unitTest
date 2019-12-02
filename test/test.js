const control = require('../controllers/testControl')


describe('Status and content', function () {
    describe('Main page', function () {

        it('Pcontent', control.Pcontent);

        it('Dcontent', control.Dcontent);

    });

});
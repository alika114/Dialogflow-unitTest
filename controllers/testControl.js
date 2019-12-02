var chai = require('chai'),
    expect = chai.expect,
    chaiHttp = require('chai-http');

//var should = require('should');

const should = chai.should();

chai.use(chaiHttp);

var request = chai.request("http://localhost:8080");

exports.Pcontent = (done) => {
    var msg = { title: 'My Test1', category: 1, description: 'Automated' };
    request
        .post('/test')
        .send(msg)
        .end(function (err, res) {
            console.log('status: ' + JSON.stringify(res.body));
            expect(err).to.be.null;
            //expect(res.body.title).to.equal('My Test2'); //this case will fail
            expect(res.body.title).to.equal('My Test1');

            //res.body.should.be.eql('Hello World');
            done();
        });
}

exports.Dcontent = (done) => {
    var msg = {
        projectID: 'akilaorbita-esyxgg',
        sessionID: 'ecfcff50-110a-11ea-b6f5-17bb9eed8a60',
        query: 'tell me the vaccine for polio',
        event: {
            name: '',
            parameters: {}
        },
        audioOutput: false,
        context: {},
        languageCode: 'en'
    }
    //var msg = { title: 'My Test1', category: 1, description: 'Automated' };
    request
        .post('/')
        .send(msg)
        .end(function (err, res) {
            console.log('status: ' + JSON.stringify(res.body));
            expect(err).to.be.null;
            expect(res.body.response).to.equal('your vaccine is Inactivated polio vaccine , Oral polio vaccine');

            //res.body.should.be.eql('Hello World');
            done();
        });
}
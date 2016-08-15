import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import BrightWork from '../index';
import nock from 'nock';
const expect = chai.expect;

chai.use(chaiAsPromised);


describe('SDK', function() {
    var sdk;

    before(function (done) {

        var server =
            nock('http://localhost')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .get('/settings')
                .reply(200, {
                    models: [
                        'customer',
                        'log'
                    ]
                });

        BrightWork.initialize('API123', 'testApp', 'http://localhost').then(function(loadedSDK){
            sdk = loadedSDK;
            done();
        });

    });

    describe('#models', function () {

        it('customer', function() {
            expect(sdk).to.have.property('models').that.has.property('customer');
            expect(sdk.models.customer).to.have.property('create');
            expect(sdk.models.customer).to.have.property('save');
            expect(sdk.models.customer).to.have.property('delete');
            expect(sdk.models.customer).to.have.property('find');
        });

        it('log', function() {
            expect(sdk).to.have.property('models').that.has.property('log');
            expect(sdk.models.log).to.have.property('create');
            expect(sdk.models.log).to.have.property('save');
            expect(sdk.models.log).to.have.property('delete');
            expect(sdk.models.log).to.have.property('find');
        });

    });
});
import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Repository from '../repository';
import Query from '../query';
import nock from 'nock';
const expect = chai.expect;

chai.use(chaiAsPromised);


describe('Repository', function(){
    var repo;

    before(function(){
        repo = new Repository('API123', 'http://localhost', 'testModel');
    });

    it('#create', function(done) {

        var server =
            nock('http://localhost')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .post('/testmodel', { name: 'testName' })
                .reply(201, 'created');

        expect(repo.create({ name: 'testName' })).to.eventually.to.have.property('data', 'created').notify(done);
    });

    it('#save', function(done) {
        var server =
            nock('http://localhost')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .put('/testmodel/1', { id: 1, name: 'saveMe' })
                .reply(200, 'updated');

        expect(repo.save({ id: 1, name: 'saveMe' })).to.eventually.to.have.property('data', 'updated').notify(done);
    });

    it('#delete', function(done) {
        var server =
            nock('http://localhost')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .delete('/testmodel/1')
                .reply(200, 'deleted');

        expect(repo.delete(1)).to.eventually.to.have.property('data', 'deleted').notify(done);
    });

    it('#get', function(done) {
        var server =
            nock('http://localhost')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .get('/testmodel/1')
                .reply(200, 'data');

        expect(repo.get(1)).to.eventually.to.have.property('data', 'data').notify(done);
    });

    it('#find', function(done) {
        var server =
            nock('http://localhost')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .post('/testmodel/find', { where: { field1: 'test' }})
                .reply(200, 'found');

        expect(repo.find(new Query().equalTo('field1', 'test'))).to.eventually.to.have.deep.property('data', 'found').notify(done);

    });

});
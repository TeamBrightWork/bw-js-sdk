import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import Repository from '../repository';
import Query from '../query';
import nock from 'nock';
const expect = chai.expect;

chai.use(chaiAsPromised);


describe('Repository', function(){
    var repo;

    before(function() {
        repo = new Repository('API123', 'http://localhost', 'testModel', ['mycollection']);
    });

    it('#create', function(done) {

        var server =
            nock('http://localhost/api')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .post('/testmodel', { name: 'testName' })
                .reply(201, { data: 'created' });

        expect(repo.create({ name: 'testName' })).to.eventually.to.have.property('data', 'created').notify(done);
    });

    it('#save', function(done) {
        var server =
            nock('http://localhost/api')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .put('/testmodel/1', { id: 1, name: 'saveMe' })
                .reply(200, { data: 'updated' });

        expect(repo.save({ id: 1, name: 'saveMe' })).to.eventually.to.have.property('data', 'updated').notify(done);
    });

    it('#delete', function(done) {
        var server =
            nock('http://localhost/api')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .delete('/testmodel/1')
                .reply(200, { data: 'deleted' });

        expect(repo.delete(1)).to.eventually.to.have.property('data', 'deleted').notify(done);
    });

    it('#get', function(done) {
        var server =
            nock('http://localhost/api')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .get('/testmodel/1')
                .reply(200, { data: 'success' });

        expect(repo.get(1)).to.eventually.to.have.property('data', 'success').notify(done);
    });

    it('#find', function(done) {
        var server =
            nock('http://localhost/api')
                .matchHeader('apiKey', 'API123')
                .matchHeader('Content-Type', 'application/json')
                .post('/testmodel/find', { where: { field1: 'test' }})
                .reply(200, { data: 'found' });

        expect(repo.find(new Query().equalTo('field1', 'test'))).to.eventually.to.have.deep.property('data', 'found').notify(done);

    });

    describe.skip('Collections', function(){


        it('#add', function(done) {
            var server =
                nock('http://localhost/api')
                    .matchHeader('apiKey', 'API123')
                    .matchHeader('Content-Type', 'application/json')
                    .put('/testmodel/1/mycollection/add', { id: 2, name: 'sample item' })
                    .reply(201, { data: 'added' });

            expect(repo.mycollection.add(1, { id: 2, name: 'sample item' })).to.eventually.to.have.property('data', 'added').notify(done);
        });


        it('#remove', function(done) {
            var server =
                nock('http://localhost/api')
                    .matchHeader('apiKey', 'API123')
                    .matchHeader('Content-Type', 'application/json')
                    .delete('/testmodel/1/mycollection/remove/2')
                    .reply(200, { data: 'deleted' });

            expect(repo.mycollection.remove(1, 2)).to.eventually.to.have.property('data', 'removed').notify(done);
        });


    });

});
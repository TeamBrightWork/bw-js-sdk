const expect = require('chai').expect;
import Query from '../query';

describe('Query', function(){

    describe('#where', function(){
        it('equalTo', function(){
            expect(new Query().equalTo('field1', 'test').toCriteria()).to.deep.equal({ where: { field1: 'test' }});
        });

        it('notEqualTo', function(){
            expect(new Query().notEqualTo('field1', 'test').toCriteria()).to.deep.equal({ where: { field1: { '!': 'test' }}});
        });

        it('lessThan', function(){
            expect(new Query().lessThan('field1', 5).toCriteria()).to.deep.equal({ where: { field1: { '<': 5 }}});
        });

        it('lessThanOrEqualTo', function(){
            expect(new Query().lessThanOrEqual('field1', 5).toCriteria()).to.deep.equal({ where: { field1: { '<=': 5 }}});
        });

        it('greaterThan', function(){
            expect(new Query().greaterThan('field1', 5).toCriteria()).to.deep.equal({ where: { field1: { '>': 5 }}});
        });

        it('greaterThanOrEqualTo', function(){
            expect(new Query().greaterThanOrEqual('field1', 5).toCriteria()).to.deep.equal({ where: { field1: { '>=': 5 }}});
        });

        it('like', function(){
            expect(new Query().like('field1', '%test').toCriteria()).to.deep.equal({ where: { field1: { 'like': '%test' }}});
        });

        it('contains', function(){
            expect(new Query().contains('field1', 'test').toCriteria()).to.deep.equal({ where: { field1: { 'contains': 'test' }}});
        });

        it('startsWith', function(){
            expect(new Query().startsWith('field1', 'test').toCriteria()).to.deep.equal({ where: { field1: { 'startsWith': 'test' }}});
        });

        it('endsWith', function(){
            expect(new Query().endsWith('field1', 'test').toCriteria()).to.deep.equal({ where: { field1: { 'endsWith': 'test' }}});
        });

        it('oneOf', function(){
            expect(new Query().oneOf('field1', ['value1', 'value2']).toCriteria()).to.deep.equal({ where: { field1: ['value1', 'value2']}});
        });

        it('notOneOf', function(){
            expect(new Query().notOneOf('field1', ['value1', 'value2']).toCriteria()).to.deep.equal({ where: { field1: { '!': ['value1', 'value2'] }}});
        });
    });

    describe('#sort', function(){

        it('ascending', function(){
            expect(new Query().ascending('field1').toCriteria()).to.deep.equal({ sort: { field1: 1 } });
        });

        it('decending', function(){
            expect(new Query().descending('field1').toCriteria()).to.deep.equal({ sort: { field1: -1 } });
        });

        it('multiple', function(){
            expect(new Query().descending('field1').ascending('field2').toCriteria()).to.deep.equal({ sort: { field1: -1, field2: 1 }});
        });

    });

    describe('#paging', function() {

        it('#limit', function () {
            expect(new Query().limit(10).toCriteria()).to.deep.equal({limit: 10});
        });

        it('#skip', function () {
            expect(new Query().skip(10).toCriteria()).to.deep.equal({skip: 10});
        });
    });

    it('#combined', function() {

        var query = new Query()
            .greaterThan('amount', 50)
            .oneOf('status', ['pending', 'paid'])
            .descending('order_date')
            .ascending('line_number')
            .limit(10)
            .skip(5)

        expect(query.toCriteria()).to.deep.equal({

            where: {
                amount: { '>': 50 },
                status: ['pending', 'paid']
            },
            sort: {
                order_date: -1,
                line_number: 1
            },
            limit: 10,
            skip: 5
        });

    });


});
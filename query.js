'use strict';

import _ from 'lodash';

export default class Query {

    constructor() {
        this._where = [];
        this._sort = [];
        this._limit = null;
        this._skip = null;
    }

    equalTo(field, value) {
        this._where.push(_.set({}, field, value));
        return this;
    }

    notEqualTo(field, value) {
        this._where.push(_.set({}, [field, '!'], value));
        return this;
    }

    lessThan(field, value) {
        this._where.push(_.set({}, [field, '<'], value));
        return this;
    }

    lessThanOrEqual(field, value) {
        this._where.push(_.set({}, [field, '<='], value));
        return this;
    }

    greaterThan(field, value) {
        this._where.push(_.set({}, [field, '>'], value));
        return this;
    }

    greaterThanOrEqual(field, value) {
        this._where.push(_.set({}, [field, '>='], value));
        return this;
    }

    like(field, value) {
        // % wildcard
        this._where.push(_.set({}, [field, 'like'], value));
        return this;
    }

    contains(field, value) {
        this._where.push(_.set({}, [field, 'contains'], value));
        return this;
    }

    startsWith(field, value) {
        this._where.push(_.set({}, [field, 'startsWith'], value));
        return this;
    }

    endsWith(field, value) {
        this._where.push(_.set({}, [field, 'endsWith'], value));
        return this;
    }

    oneOf(field, values) {
        this._where.push(_.set({}, field, values));
        return this;
    }

    notOneOf(field, values) {
        this._where.push(_.set({}, [field, '!'], values));
        return this;
    }

    ascending(field) {
        this._sort.push(_.set({}, field, 1));
        return this;
    }

    descending(field) {
        this._sort.push(_.set({}, field, -1));
        return this;
    }

    limit(num) {
        this._limit = num;
        return this;
    }

    skip(num) {
        this._skip = num;
        return this;
    }

    toCriteria() {
        let criteria = { };

        if (!_.isEmpty(this._where)) {
            criteria.where = _.transform(this._where, _.ary(_.extend, 2),  {});
        }

        if (!_.isEmpty(this._sort)) {
            criteria.sort = _.transform(this._sort, _.ary(_.extend, 2),  {});
        }

        if (this._limit > 0) {
            criteria.limit = this._limit;
        }

        if (this._skip > 0) {
            criteria.skip = this._skip;
        }

        return criteria;
    }
}

'use strict';

import _ from 'lodash';

/**
 * @class Query
 * @classdesc Used to define criteria for use with {@link Repository#find}(query).
 * @see Repository
 */
export default class Query {

    /**
     * @private
     */
    constructor() {
        this._where = [];
        this._sort = [];
        this._limit = null;
        this._skip = null;
    }

    /**
     * Add criteria to enforce that the model field is equal the the value supplied.
     * @param field the model field to enforce equality
     * @param value the comparison value
     * @returns {Query}
     */
    equalTo(field, value) {
        this._where.push(_.set({}, field, value));
        return this;
    }

    /**
     * Add criteria to enforce that the model field is not equal to the value supplied.
     * @param field the model field to enforce non equality
     * @param value the comparison value
     * @returns {Query}
     */
    notEqualTo(field, value) {
        this._where.push(_.set({}, [field, '!'], value));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value is less than the value supplied.
     * @param field the model field to compare against
     * @param value the comparison value
     * @returns {Query}
     */
    lessThan(field, value) {
        this._where.push(_.set({}, [field, '<'], value));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value is less than or equal to the value supplied.
     * @param field the model field to compare against
     * @param value the comparison value
     * @returns {Query}
     */
    lessThanOrEqual(field, value) {
        this._where.push(_.set({}, [field, '<='], value));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value is greater than the value supplied.
     * @param field the model field to compare against
     * @param value the comparison value
     * @returns {Query}
     */
    greaterThan(field, value) {
        this._where.push(_.set({}, [field, '>'], value));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value is greater than or equal to the value supplied.
     * @param field the model field to compare against
     * @param value the comparison value
     * @returns {Query}
     */
    greaterThanOrEqual(field, value) {
        this._where.push(_.set({}, [field, '>='], value));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value is like the value supplied.  This allows you to perform a basic wildcard search using (%) as the wildcard.
     * @param field the model field to compare against
     * @param value the comparison value
     * @returns {Query}
     */
    like(field, value) {
        // % wildcard
        this._where.push(_.set({}, [field, 'like'], value));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value containts the supplied value. This is equivalent to a string contains comparison (or like %value%).
     * @param field the model field to compare against
     * @param value the comparison value
     * @returns {Query}
     */
    contains(field, value) {
        this._where.push(_.set({}, [field, 'contains'], value));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value is a string that starts with the supplied value.
     * @param field the model field to compare against
     * @param value the comparison value
     * @returns {Query}
     */
    startsWith(field, value) {
        this._where.push(_.set({}, [field, 'startsWith'], value));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value is a string that ends with the supplied value.
     * @param field the model field to compare against
     * @param value the comparison value
     * @returns {Query}
     */
    endsWith(field, value) {
        this._where.push(_.set({}, [field, 'endsWith'], value));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value is one of the items in the supplied list.
     * @param field the model field to compare against
     * @param values the comparison value
     *
     * @example <caption>Find all photos that have been 'reviewed' or 'downloaded'</caption>
     *
     * var query = BrightWork.Query().oneOf('status', ['reviewed', 'downloaded']);
     *
     * console.log('searching for photos ...');
     * bw.models.photo.find(query).then(function(photos) {
     *   console.log('...results', photos);
     * });
     *
     * @returns {Query}
     */
    oneOf(field, values) {
        this._where.push(_.set({}, field, values));
        return this;
    }

    /**
     * Add criteria to limit the results where the model field value is not one of the items in the supplied list.
     * @param field the model field to compare against
     * @param values the comparison value
     * @returns {Query}
     */
    notOneOf(field, values) {
        this._where.push(_.set({}, [field, '!'], values));
        return this;
    }

    /**
     * Sort the result by the supplied field in ascending order.
     * @param field
     *
     * @example <caption>Sort by created date and then name</caption>
     *
     * var query = BrightWork.Query().ascending('created').ascending('name');
     *
     * console.log('searching for photos ...');
     * bw.models.photo.find(query).then(function(photos) {
     *   console.log('...results', photos);
     * });
     *
     * @returns {Query}
     */
    ascending(field) {
        this._sort.push(_.set({}, field, 1));
        return this;
    }

    /**
     * Sort the result by the supplied field in descending order.
     * @param field
     * @returns {Query}
     */
    descending(field) {
        this._sort.push(_.set({}, field, -1));
        return this;
    }

    /**
     * Limit the results to the maximum number of records returned.
     * @param num the maximum number of records to return
     *
     * @example <caption>Top 50 photo albumns by rank</caption>
     *
     * var query = BrightWork.Query().ascending('rank').limit(50);
     *
     * console.log('searching for top 50 photo albums...');
     * bw.models.album.find(query).then(function(albums) {
     *   console.log('...results', albums);
     * });
     *
     * @returns {Query}
     */
    limit(num) {
        this._limit = num;
        return this;
    }

    /**
     * Skip the specified number of records.
     * @param num the number of records to skip
     *
     * @example <caption>Combine skip and limit to implement paging.</caption>
     *
     * var pageSize = 10;
     * var page = 1;
     *
     * var query = BrightWork.Query().limit(pageSize).skip(pageSize * (page - 1));
     *
     * console.log('grabbing the first page of photos...');
     * bw.models.photo.find(query).then(function(photos) {
     *   console.log('...results', photos);
     * });
     *
     * @returns {Query}
     */
    skip(num) {
        this._skip = num;
        return this;
    }

    /**
     * Cast the query to a criteria object for evaluation.
     * @private
     * @returns {Criteria}
     */
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

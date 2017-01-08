'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Query
 * @classdesc Used to define criteria for use with {@link Repository#find}(query).
 * @see Repository
 */
var Query = function () {

    /**
     * @private
     */
    function Query() {
        _classCallCheck(this, Query);

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


    _createClass(Query, [{
        key: 'equalTo',
        value: function equalTo(field, value) {
            this._where.push(_lodash2.default.set({}, field, value));
            return this;
        }

        /**
         * Add criteria to enforce that the model field is not equal to the value supplied.
         * @param field the model field to enforce non equality
         * @param value the comparison value
         * @returns {Query}
         */

    }, {
        key: 'notEqualTo',
        value: function notEqualTo(field, value) {
            this._where.push(_lodash2.default.set({}, [field, '!'], value));
            return this;
        }

        /**
         * Add criteria to limit the results where the model field value is less than the value supplied.
         * @param field the model field to compare against
         * @param value the comparison value
         * @returns {Query}
         */

    }, {
        key: 'lessThan',
        value: function lessThan(field, value) {
            this._where.push(_lodash2.default.set({}, [field, '<'], value));
            return this;
        }

        /**
         * Add criteria to limit the results where the model field value is less than or equal to the value supplied.
         * @param field the model field to compare against
         * @param value the comparison value
         * @returns {Query}
         */

    }, {
        key: 'lessThanOrEqual',
        value: function lessThanOrEqual(field, value) {
            this._where.push(_lodash2.default.set({}, [field, '<='], value));
            return this;
        }

        /**
         * Add criteria to limit the results where the model field value is greater than the value supplied.
         * @param field the model field to compare against
         * @param value the comparison value
         * @returns {Query}
         */

    }, {
        key: 'greaterThan',
        value: function greaterThan(field, value) {
            this._where.push(_lodash2.default.set({}, [field, '>'], value));
            return this;
        }

        /**
         * Add criteria to limit the results where the model field value is greater than or equal to the value supplied.
         * @param field the model field to compare against
         * @param value the comparison value
         * @returns {Query}
         */

    }, {
        key: 'greaterThanOrEqual',
        value: function greaterThanOrEqual(field, value) {
            this._where.push(_lodash2.default.set({}, [field, '>='], value));
            return this;
        }

        /**
         * Add criteria to limit the results where the model field value is like the value supplied.  This allows you to perform a basic wildcard search using (%) as the wildcard.
         * @param field the model field to compare against
         * @param value the comparison value
         * @returns {Query}
         */

    }, {
        key: 'like',
        value: function like(field, value) {
            // % wildcard
            this._where.push(_lodash2.default.set({}, [field, 'like'], value));
            return this;
        }

        /**
         * Add criteria to limit the results where the model field value containts the supplied value. This is equivalent to a string contains comparison (or like %value%).
         * @param field the model field to compare against
         * @param value the comparison value
         * @returns {Query}
         */

    }, {
        key: 'contains',
        value: function contains(field, value) {
            this._where.push(_lodash2.default.set({}, [field, 'contains'], value));
            return this;
        }

        /**
         * Add criteria to limit the results where the model field value is a string that starts with the supplied value.
         * @param field the model field to compare against
         * @param value the comparison value
         * @returns {Query}
         */

    }, {
        key: 'startsWith',
        value: function startsWith(field, value) {
            this._where.push(_lodash2.default.set({}, [field, 'startsWith'], value));
            return this;
        }

        /**
         * Add criteria to limit the results where the model field value is a string that ends with the supplied value.
         * @param field the model field to compare against
         * @param value the comparison value
         * @returns {Query}
         */

    }, {
        key: 'endsWith',
        value: function endsWith(field, value) {
            this._where.push(_lodash2.default.set({}, [field, 'endsWith'], value));
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

    }, {
        key: 'oneOf',
        value: function oneOf(field, values) {
            this._where.push(_lodash2.default.set({}, field, values));
            return this;
        }

        /**
         * Add criteria to limit the results where the model field value is not one of the items in the supplied list.
         * @param field the model field to compare against
         * @param values the comparison value
         * @returns {Query}
         */

    }, {
        key: 'notOneOf',
        value: function notOneOf(field, values) {
            this._where.push(_lodash2.default.set({}, [field, '!'], values));
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

    }, {
        key: 'ascending',
        value: function ascending(field) {
            this._sort.push(_lodash2.default.set({}, field, 1));
            return this;
        }

        /**
         * Sort the result by the supplied field in descending order.
         * @param field
         * @returns {Query}
         */

    }, {
        key: 'descending',
        value: function descending(field) {
            this._sort.push(_lodash2.default.set({}, field, -1));
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

    }, {
        key: 'limit',
        value: function limit(num) {
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

    }, {
        key: 'skip',
        value: function skip(num) {
            this._skip = num;
            return this;
        }

        /**
         * Cast the query to a criteria object for evaluation.
         * @private
         * @returns {Criteria}
         */

    }, {
        key: 'toCriteria',
        value: function toCriteria() {
            var criteria = {};

            if (!_lodash2.default.isEmpty(this._where)) {
                criteria.where = _lodash2.default.transform(this._where, _lodash2.default.ary(_lodash2.default.extend, 2), {});
            }

            if (!_lodash2.default.isEmpty(this._sort)) {
                criteria.sort = _lodash2.default.transform(this._sort, _lodash2.default.ary(_lodash2.default.extend, 2), {});
            }

            if (this._limit > 0) {
                criteria.limit = this._limit;
            }

            if (this._skip > 0) {
                criteria.skip = this._skip;
            }

            return criteria;
        }
    }]);

    return Query;
}();

exports.default = Query;
//# sourceMappingURL=query.js.map

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Repository
 * @classdesc Used to interact with the persistence store.
 * @description There is no need to instantiate a repository directly. Upon initialization of the SDK all of your model repositories are available via the *.models namespace.
 */
var Repository = function () {

    /**
     * @private
     * @param apiKey
     * @param baseUrl
     * @param modelName
     */
    function Repository(apiKey, baseUrl, modelName, collections, timeout) {
        var _this = this;

        _classCallCheck(this, Repository);

        this.modelName = modelName.toLowerCase();
        this.request = _axios2.default.create({
            baseURL: baseUrl + '/api/',
            timeout: timeout,
            headers: {
                'apiKey': apiKey,
                'Content-Type': 'application/json'
            }
        });

        /**
         * Add the convienence helpers to the user
         * can just call bw.models.model.collection.add / remove
         */
        if (collections) {
            collections.forEach(function (collection) {
                _this[collection] = {};
                _this[collection].add = function (modelId, instance) {
                    return _this.add(modelId, collection, instance);
                };

                _this[collection].remove = function (modelId, instanceId) {
                    return _this.remove(modelId, collection, instanceId);
                };
            });
        }
    }

    /**
     * Create a new model instance in the persistence store.
     * @param instance the model instance
     * @returns {Promise|*}
     */


    _createClass(Repository, [{
        key: 'create',
        value: function create(instance) {
            return this.request.post('/' + this.modelName, instance).then(function (res) {
                return res.data;
            });
        }

        /**
         * Update an existing model instance in the persistence store.
         * @param instance the model instance
         * @returns {Promise|*}
         */

    }, {
        key: 'save',
        value: function save(instance) {
            return this.request.put('/' + this.modelName + '/' + instance.id, instance).then(function (res) {
                return res.data;
            });
        }

        /**
         * Delete an existing model instance from the persistence store.
         * @param id the identifier of the model instance to delete
         * @returns {Promise|*}
         */

    }, {
        key: 'delete',
        value: function _delete(id) {
            return this.request.delete('/' + this.modelName + '/' + id).then(function (res) {
                return res.data;
            });
        }

        /**
         * Retrieve an existing model instance from the persistence store.
         * @param id the identifier of the model instance to get
         * @returns {*}
         */

    }, {
        key: 'get',
        value: function get(id) {
            return this.request.get('/' + this.modelName + '/' + id).then(function (res) {
                return res.data;
            });
        }

        /**
         * Search the persistence store for models matching the {Query} criteria.
         * @param query {Query} the criteria to use for the search
         * @returns {Promise|*}
         * @see {Query}
         */

    }, {
        key: 'find',
        value: function find(query) {
            var criteria = query ? query.toCriteria() : {};

            return this.request.post('/' + this.modelName + '/find', criteria).then(function (res) {
                return res.data;
            });
        }

        /**
         * Add a child model instance to collection
         * @param modelId {*} the parent model identifier
         * @param collectionName {string} the collection name
         * @param instance the child instance object
         * @returns {Promise|*}
         */

    }, {
        key: 'add',
        value: function add(modelId, collectionName, instance) {
            console.log('*add* ', modelId, collectionName, instance);
            return this.request.post('/' + this.modelName + '/' + modelId + '/' + collectionName, instance).then(function (res) {
                return res.data;
            });
        }

        /**
         * Remove a child model instance from a collection
         * @param modelId {*} the parent model identifier
         * @param collectionName {string} the collection name
         * @param instanceId the child model identifier
         */

    }, {
        key: 'remove',
        value: function remove(modelId, collectionName, instanceId) {
            return this.request.delete('/' + this.modelName + '/' + modelId + '/' + collectionName + '/' + instanceId).then(function (res) {
                return res.data;
            });
        }
    }]);

    return Repository;
}();

exports.default = Repository;
//# sourceMappingURL=repository.js.map

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _repository = require('./repository');

var _repository2 = _interopRequireDefault(_repository);

var _query = require('./query');

var _query2 = _interopRequireDefault(_query);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _retryPromise = require('retry-promise');

var _retryPromise2 = _interopRequireDefault(_retryPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class BrightWork
 * @classdesc The BrightWork Javascript SDK
 */
var BrightWork = function () {
    function BrightWork() {
        _classCallCheck(this, BrightWork);
    }

    _createClass(BrightWork, [{
        key: 'init',


        /** The internal initialize method
         * @private
         * @param apiKey
         * @param appName
         * @param apiURL
         * @param appURL
         * @returns {*}
         */
        value: function init(apiKey, appName, apiURL, appURL, timeout) {
            var _this = this;

            this.models = {};
            this.apiKey = apiKey;
            this.appName = appName;
            this.apiURL = apiURL || 'http://api.brightwork.io';
            this.appURL = appURL || 'http://' + this.appName + '.bwapps.io';
            this.timeout = timeout || 6000;

            // call home and get settings & models
            var request = _axios2.default.create({
                baseURL: this.apiURL,
                timeout: this.timeout,
                headers: {
                    'Content-Type': 'application/json',
                    'apiKey': apiKey
                }
            });

            return (0, _retryPromise2.default)({ max: 2, backoff: 1000 }, function (attempt) {
                console.log('initializing BrightWork...', attempt);
                return request.get('/app/settings').then(function (res) {
                    console.log('settings loaded...');
                    _this.initModels(res.data);

                    if (typeof window !== 'undefined') {
                        window.bw = _this;
                    } else {
                        global.bw = _this;
                    }

                    return _this;
                });
            }).catch(function (err) {
                console.error('Unable to initialize the BrightWork SDK');
                console.error(err);
                return null;
            });
        }
    }, {
        key: 'initModels',
        value: function initModels(settings) {
            var _this2 = this;

            settings.models.forEach(function (model) {
                _this2.models[model.name] = new _repository2.default(_this2.apiKey, _this2.appURL, model.name, model.collections, _this2.timeout);
            });
        }
    }], [{
        key: 'initialize',


        /**
         * Initialize the BrightWork Javascript SDK and connect it to your app
         * @param apiKey the api key assigned to your app
         * @param appName the name of your app as defined in the manifest
         * @param apiURL (optional) the BrightWork API URL
         * @param appURL (optional) the URL to your APP
         * @example <caption>Initialize the BrightWork JavaScript SDK to work with your app.</caption>
         *
         * BrightWork.initialize('YOUR_API_KEY', 'YOUR_APP_NAME').then(function(){
         *      console.log('initialized you can now access the SDK via window.bw global variable');
         * });
         *
         * @returns {Promise|*}
         */
        value: function initialize(apiKey, appName, apiURL, appURL, timeout) {
            var sdk = new BrightWork();
            return sdk.init(apiKey, appName, apiURL, appURL, timeout);
        }

        /**
         * Create a new query for filtering *.models.model.find
         * @example <caption>All the photo albums where name contains 'Photo' sorted by name ascending.</caption>
         * var query = BrightWork.Query().contains('name', 'Photo').ascending('name');
         *
         * console.log('searching for all albums named "*Photo*"...');
         * bw.models.album.find(query).then(function(albums) {
         *   console.log('...results', albums);
         * });
         *
         * @returns {Query}
         * @see {Repository#find}
         */

    }, {
        key: 'query',
        value: function query() {
            return new _query2.default();
        }
    }]);

    return BrightWork;
}();

;

if (typeof window !== 'undefined') {
    window.BrightWork = BrightWork;
} else {
    global.BrightWork = BrightWork;
}
//# sourceMappingURL=index.js.map

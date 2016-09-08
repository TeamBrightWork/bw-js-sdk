'use strict';

import Repository from'./repository';
import Query from'./query';
import axios from 'axios';

/**
 * @class BrightWork
 * @classdesc The BrightWork Javascript SDK
 */
export default class BrightWork {

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
    static initialize(apiKey, appName, apiURL, appURL) {
        var sdk = new BrightWork();
        return sdk.init(apiKey, appName, apiURL, appURL);
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
    static query() {
        return new Query();
    }

    /** The internal initialize method
     * @private
     * @param apiKey
     * @param appName
     * @param apiURL
     * @param appURL
     * @returns {*}
     */
    init(apiKey, appName, apiURL, appURL) {
        this.models = {};
        this.apiKey = apiKey;
        this.appName = appName;
        this.apiURL = apiURL || 'http://api.brightwork.io';
        this.appURL = appURL || `http://${this.appName}.bwapps.io`;

        // call home and get settings & models
        var request = axios.create({
            baseURL: this.apiURL,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                'apiKey': apiKey
            }
        });

        return request.get('/app/settings')
            .then((res) => {
                console.log('settings loaded...');
                this.initModels(res.data);
                window.bw = this;
                return this;
            })
            .catch((err) => {
                console.error('Unable to initialize the BrightWork SDK');
                console.error(err);
                return null;
            });
    }

    initModels(settings) {
        settings.models.forEach((model) => {
           this.models[model.name] = new Repository(this.apiKey, this.appURL, model.name, model.collections);
        });
    }
};

window.BrightWork = BrightWork;
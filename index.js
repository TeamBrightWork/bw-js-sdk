'use strict';

import Repository from'./repository';
import axios from 'axios';

export default class BrightWork {

    static initialize(apiKey, appName, baseUrl) {
        var sdk = new BrightWork();
        return sdk.init(apiKey, appName, baseUrl);
    }

    init(apiKey, appName, baseUrl) {
        this.models = {};
        this.apiKey = apiKey;
        this.appName = appName;
        this.baseUrl = baseUrl;

        // call home and get settings & models
        var request = axios.create({
            baseURL: baseUrl,
            timeout: 1000,
            headers: {
                'apiKey': apiKey,
                'Content-Type': 'application/json'
            }
        });

        return request.get('/settings')
            .then((res) => {
                console.log('settings loaded...');
                this.initModels(res.data);
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
           this.models[model] = new Repository(this.apiKey, this.baseUrl, model);
        });
    }
};


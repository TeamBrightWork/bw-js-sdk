'use strict';

import axios from 'axios';

export default class Repository {

    constructor(apiKey, baseUrl, modelName) {

        this.modelName = modelName.toLowerCase();
        this.request = axios.create({
            baseURL: baseUrl,
            timeout: 1000,
            headers: {
                'apiKey': apiKey,
                'Content-Type': 'application/json'
            }
        });
    }

    create(instance) {
        return this.request.post(
            `/${this.modelName}`,
            instance
        );
    }

    save(instance){
        return this.request.put(
            `/${this.modelName}/${instance.id}`,
            instance
        );
    }

    delete(id) {
        return this.request.delete(
            `/${this.modelName}/${id}`
        );
    }

    get(id) {
        return this.request.get(
            `/${this.modelName}/${id}`
        );
    }

    find(query) {
        return this.request.post(
            `/${this.modelName}/find`,
            query.toCriteria()
        );
    }

}
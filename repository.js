'use strict';

import axios from 'axios';

/**
 * @class Repository
 * @classdesc Used to interact with the persistence store.
 * @description There is no need to instantiate a repository directly. Upon initialization of the SDK all of your model repositories are available via the *.models namespace.
 */
export default class Repository {

    /**
     * @private
     * @param apiKey
     * @param baseUrl
     * @param modelName
     */
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

    /**
     * Create a new model instance in the persistence store.
     * @param instance the model instance
     * @returns {*|axios.Promise}
     */
    create(instance) {
        return this.request.post(
            `/${this.modelName}`,
            instance
        );
    }

    /**
     * Update an existing model instance in the persistence store.
     * @param instance the model instance
     * @returns {axios.Promise|*}
     */
    save(instance){
        return this.request.put(
            `/${this.modelName}/${instance.id}`,
            instance
        );
    }

    /**
     * Delete an existing model instance from the persistence store.
     * @param id the identifier of the model instance to delete
     * @returns {axios.Promise|*}
     */
    delete(id) {
        return this.request.delete(
            `/${this.modelName}/${id}`
        );
    }

    /**
     * Retrieve an existing model instance from the persistence store.
     * @param id the identifier of the model instance to get
     * @returns {*}
     */
    get(id) {
        return this.request.get(
            `/${this.modelName}/${id}`
        );
    }

    /**
     * Search the persistence store for models matching the {Query} criteria.
     * @param query {Query} the criteria to use for the search
     * @returns {*|axios.Promise}
     * @see {Query}
     */
    find(query) {
        return this.request.post(
            `/${this.modelName}/find`,
            query.toCriteria()
        );
    }

}
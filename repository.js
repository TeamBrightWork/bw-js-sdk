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
            baseURL: baseUrl + '/api/',
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
     * @returns {Promise|*}
     */
    create(instance) {
        return this.request.post(
            `/${this.modelName}`,
            instance
        ).then(function(res){
            return res.data;
        });
    }

    /**
     * Update an existing model instance in the persistence store.
     * @param instance the model instance
     * @returns {Promise|*}
     */
    save(instance){
        return this.request.put(
            `/${this.modelName}/${instance.id}`,
            instance
        ).then(function(res){
            return res.data;
        });
    }

    /**
     * Delete an existing model instance from the persistence store.
     * @param id the identifier of the model instance to delete
     * @returns {Promise|*}
     */
    delete(id) {
        return this.request.delete(
            `/${this.modelName}/${id}`
        ).then(function(res){
            return res.data;
        });
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
     * @returns {Promise|*}
     * @see {Query}
     */
    find(query) {
        var criteria = (query) ? query.toCriteria() : {};

        return this.request.post(
            `/${this.modelName}/find`,
            criteria
        ).then(function(res){
            return res.data;
        });
    }

}
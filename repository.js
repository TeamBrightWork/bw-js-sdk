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
    constructor(apiKey, baseUrl, modelName, collections) {

        this.modelName = modelName.toLowerCase();
        this.request = axios.create({
            baseURL: baseUrl + '/api/',
            timeout: 1000,
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
            collections.forEach((collection) => {
                this[collection] = {};
                this[collection].add = (modelId, instance) => {
                    return this.add(modelId, collection, instance);
                };

                this[collection].remove = (modelId, instanceId) => {
                    return this.remove(modelId, collection, instanceId);
                };
            });
        }
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
        ).then(function (res) {
            return res.data;
        });
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
        ).then(function (res) {
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
    add(modelId, collectionName, instance) {
        console.log('*add* ', modelId, collectionName, instance);
        return this.request.post(
            `/${this.modelName}/${modelId}/${collectionName}`,
            instance
        ).then(function(res){
            return res.data;
        });
    }

    /**
     * Remove a child model instance from a collection
     * @param modelId {*} the parent model identifier
     * @param collectionName {string} the collection name
     * @param instanceId the child model identifier
     */
    remove(modelId, collectionName, instanceId) {
        return this.request.delete(
            `/${this.modelName}/${modelId}/${collectionName}/${instanceId}`
        ).then(function(res){
            return res.data;
        });
    }

}
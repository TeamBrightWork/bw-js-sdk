## Classes

* [BrightWork](#BrightWork)
    * [.initialize(apiKey, appName, apiURL, appURL)](#BrightWork.initialize) ⇒ <code>Promise</code> &#124; <code>\*</code>
    * [.query()](#BrightWork.query) ⇒ <code>[Query](#Query)</code>
* [Query](#Query)
* [Repository](#Repository)
    * [new Repository()](#new_Repository_new)

## Functions

* [equalTo(field, value)](#equalTo) ⇒ <code>[Query](#Query)</code>
* [notEqualTo(field, value)](#notEqualTo) ⇒ <code>[Query](#Query)</code>
* [lessThan(field, value)](#lessThan) ⇒ <code>[Query](#Query)</code>
* [lessThanOrEqual(field, value)](#lessThanOrEqual) ⇒ <code>[Query](#Query)</code>
* [greaterThan(field, value)](#greaterThan) ⇒ <code>[Query](#Query)</code>
* [greaterThanOrEqual(field, value)](#greaterThanOrEqual) ⇒ <code>[Query](#Query)</code>
* [like(field, value)](#like) ⇒ <code>[Query](#Query)</code>
* [contains(field, value)](#contains) ⇒ <code>[Query](#Query)</code>
* [startsWith(field, value)](#startsWith) ⇒ <code>[Query](#Query)</code>
* [endsWith(field, value)](#endsWith) ⇒ <code>[Query](#Query)</code>
* [oneOf(field, values)](#oneOf) ⇒ <code>[Query](#Query)</code>
* [notOneOf(field, values)](#notOneOf) ⇒ <code>[Query](#Query)</code>
* [ascending(field)](#ascending) ⇒ <code>[Query](#Query)</code>
* [descending(field)](#descending) ⇒ <code>[Query](#Query)</code>
* [limit(num)](#limit) ⇒ <code>[Query](#Query)</code>
* [skip(num)](#skip) ⇒ <code>[Query](#Query)</code>
* [create(instance)](#create) ⇒ <code>Promise</code> &#124; <code>\*</code>
* [save(instance)](#save) ⇒ <code>Promise</code> &#124; <code>\*</code>
* [delete(id)](#delete) ⇒ <code>Promise</code> &#124; <code>\*</code>
* [get(id)](#get) ⇒ <code>\*</code>
* [find(query)](#find) ⇒ <code>Promise</code> &#124; <code>\*</code>
* [add(modelId, collectionName, instance)](#add) ⇒ <code>Promise</code> &#124; <code>\*</code>
* [remove(modelId, collectionName, instanceId)](#remove)

<a name="BrightWork"></a>

## BrightWork
The BrightWork Javascript SDK

**Kind**: global class  

* [BrightWork](#BrightWork)
    * [.initialize(apiKey, appName, apiURL, appURL)](#BrightWork.initialize) ⇒ <code>Promise</code> &#124; <code>\*</code>
    * [.query()](#BrightWork.query) ⇒ <code>[Query](#Query)</code>

<a name="BrightWork.initialize"></a>

### BrightWork.initialize(apiKey, appName, apiURL, appURL) ⇒ <code>Promise</code> &#124; <code>\*</code>
Initialize the BrightWork Javascript SDK and connect it to your app

**Kind**: static method of <code>[BrightWork](#BrightWork)</code>  

| Param | Description |
| --- | --- |
| apiKey | the api key assigned to your app |
| appName | the name of your app as defined in the manifest |
| apiURL | (optional) the BrightWork API URL |
| appURL | (optional) the URL to your APP |

**Example** *(Initialize the BrightWork JavaScript SDK to work with your app.)*  
```js

BrightWork.initialize('YOUR_API_KEY', 'YOUR_APP_NAME').then(function(){
     console.log('initialized you can now access the SDK via window.bw global variable');
});
```
<a name="BrightWork.query"></a>

### BrightWork.query() ⇒ <code>[Query](#Query)</code>
Create a new query for filtering *.models.model.find

**Kind**: static method of <code>[BrightWork](#BrightWork)</code>  
**See**: {Repository#find}  
**Example** *(All the photo albums where name contains &#x27;Photo&#x27; sorted by name ascending.)*  
```js
var query = BrightWork.Query().contains('name', 'Photo').ascending('name');

console.log('searching for all albums named "*Photo*"...');
bw.models.album.find(query).then(function(albums) {
  console.log('...results', albums);
});
```
<a name="Query"></a>

## Query
Used to define criteria for use with [Repository#find](Repository#find)(query).

**Kind**: global class  
**See**: Repository  
<a name="Repository"></a>

## Repository
Used to interact with the persistence store.

**Kind**: global class  
<a name="new_Repository_new"></a>

### new Repository()
There is no need to instantiate a repository directly. Upon initialization of the SDK all of your model repositories are available via the *.models namespace.

<a name="equalTo"></a>

## equalTo(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to enforce that the model field is equal the the value supplied.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to enforce equality |
| value | the comparison value |

<a name="notEqualTo"></a>

## notEqualTo(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to enforce that the model field is not equal to the value supplied.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to enforce non equality |
| value | the comparison value |

<a name="lessThan"></a>

## lessThan(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is less than the value supplied.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| value | the comparison value |

<a name="lessThanOrEqual"></a>

## lessThanOrEqual(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is less than or equal to the value supplied.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| value | the comparison value |

<a name="greaterThan"></a>

## greaterThan(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is greater than the value supplied.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| value | the comparison value |

<a name="greaterThanOrEqual"></a>

## greaterThanOrEqual(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is greater than or equal to the value supplied.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| value | the comparison value |

<a name="like"></a>

## like(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is like the value supplied.  This allows you to perform a basic wildcard search using (%) as the wildcard.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| value | the comparison value |

<a name="contains"></a>

## contains(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value containts the supplied value. This is equivalent to a string contains comparison (or like %value%).

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| value | the comparison value |

<a name="startsWith"></a>

## startsWith(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is a string that starts with the supplied value.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| value | the comparison value |

<a name="endsWith"></a>

## endsWith(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is a string that ends with the supplied value.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| value | the comparison value |

<a name="oneOf"></a>

## oneOf(field, values) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is one of the items in the supplied list.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| values | the comparison value |

**Example** *(Find all photos that have been &#x27;reviewed&#x27; or &#x27;downloaded&#x27;)*  
```js

var query = BrightWork.Query().oneOf('status', ['reviewed', 'downloaded']);

console.log('searching for photos ...');
bw.models.photo.find(query).then(function(photos) {
  console.log('...results', photos);
});
```
<a name="notOneOf"></a>

## notOneOf(field, values) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is not one of the items in the supplied list.

**Kind**: global function  

| Param | Description |
| --- | --- |
| field | the model field to compare against |
| values | the comparison value |

<a name="ascending"></a>

## ascending(field) ⇒ <code>[Query](#Query)</code>
Sort the result by the supplied field in ascending order.

**Kind**: global function  

| Param |
| --- |
| field | 

**Example** *(Sort by created date and then name)*  
```js

var query = BrightWork.Query().ascending('created').ascending('name');

console.log('searching for photos ...');
bw.models.photo.find(query).then(function(photos) {
  console.log('...results', photos);
});
```
<a name="descending"></a>

## descending(field) ⇒ <code>[Query](#Query)</code>
Sort the result by the supplied field in descending order.

**Kind**: global function  

| Param |
| --- |
| field | 

<a name="limit"></a>

## limit(num) ⇒ <code>[Query](#Query)</code>
Limit the results to the maximum number of records returned.

**Kind**: global function  

| Param | Description |
| --- | --- |
| num | the maximum number of records to return |

**Example** *(Top 50 photo albumns by rank)*  
```js

var query = BrightWork.Query().ascending('rank').limit(50);

console.log('searching for top 50 photo albums...');
bw.models.album.find(query).then(function(albums) {
  console.log('...results', albums);
});
```
<a name="skip"></a>

## skip(num) ⇒ <code>[Query](#Query)</code>
Skip the specified number of records.

**Kind**: global function  

| Param | Description |
| --- | --- |
| num | the number of records to skip |

**Example** *(Combine skip and limit to implement paging.)*  
```js

var pageSize = 10;
var page = 1;

var query = BrightWork.Query().limit(pageSize).skip(pageSize * (page - 1));

console.log('grabbing the first page of photos...');
bw.models.photo.find(query).then(function(photos) {
  console.log('...results', photos);
});
```
<a name="create"></a>

## create(instance) ⇒ <code>Promise</code> &#124; <code>\*</code>
Create a new model instance in the persistence store.

**Kind**: global function  

| Param | Description |
| --- | --- |
| instance | the model instance |

<a name="save"></a>

## save(instance) ⇒ <code>Promise</code> &#124; <code>\*</code>
Update an existing model instance in the persistence store.

**Kind**: global function  

| Param | Description |
| --- | --- |
| instance | the model instance |

<a name="delete"></a>

## delete(id) ⇒ <code>Promise</code> &#124; <code>\*</code>
Delete an existing model instance from the persistence store.

**Kind**: global function  

| Param | Description |
| --- | --- |
| id | the identifier of the model instance to delete |

<a name="get"></a>

## get(id) ⇒ <code>\*</code>
Retrieve an existing model instance from the persistence store.

**Kind**: global function  

| Param | Description |
| --- | --- |
| id | the identifier of the model instance to get |

<a name="find"></a>

## find(query) ⇒ <code>Promise</code> &#124; <code>\*</code>
Search the persistence store for models matching the {Query} criteria.

**Kind**: global function  
**See**: {Query}  

| Param | Type | Description |
| --- | --- | --- |
| query | <code>[Query](#Query)</code> | the criteria to use for the search |

<a name="add"></a>

## add(modelId, collectionName, instance) ⇒ <code>Promise</code> &#124; <code>\*</code>
Add a child model instance to collection

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| modelId | <code>\*</code> | the parent model identifier |
| collectionName | <code>string</code> | the collection name |
| instance |  | the child instance object |

<a name="remove"></a>

## remove(modelId, collectionName, instanceId)
Remove a child model instance from a collection

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| modelId | <code>\*</code> | the parent model identifier |
| collectionName | <code>string</code> | the collection name |
| instanceId |  | the child model identifier |


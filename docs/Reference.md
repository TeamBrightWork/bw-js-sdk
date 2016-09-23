## Classes

<dl>
<dt><a href="#BrightWork">BrightWork</a></dt>
<dd><p>The BrightWork Javascript SDK</p>
</dd>
<dt><a href="#Query">Query</a></dt>
<dd><p>Used to define criteria for use with <a href="Repository#find">Repository#find</a>(query).</p>
</dd>
<dt><a href="#Repository">Repository</a></dt>
<dd><p>Used to interact with the persistence store.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#initialize">initialize(apiKey, appName, apiURL, appURL)</a> ⇒ <code>Promise</code> | <code>*</code></dt>
<dd><p>Initialize the BrightWork Javascript SDK and connect it to your app</p>
</dd>
<dt><a href="#query">query()</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Create a new query for filtering *.models.model.find</p>
</dd>
<dt><a href="#equalTo">equalTo(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to enforce that the model field is equal the the value supplied.</p>
</dd>
<dt><a href="#notEqualTo">notEqualTo(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to enforce that the model field is not equal to the value supplied.</p>
</dd>
<dt><a href="#lessThan">lessThan(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value is less than the value supplied.</p>
</dd>
<dt><a href="#lessThanOrEqual">lessThanOrEqual(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value is less than or equal to the value supplied.</p>
</dd>
<dt><a href="#greaterThan">greaterThan(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value is greater than the value supplied.</p>
</dd>
<dt><a href="#greaterThanOrEqual">greaterThanOrEqual(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value is greater than or equal to the value supplied.</p>
</dd>
<dt><a href="#like">like(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value is like the value supplied.  This allows you to perform a basic wildcard search using (%) as the wildcard.</p>
</dd>
<dt><a href="#contains">contains(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value containts the supplied value. This is equivalent to a string contains comparison (or like %value%).</p>
</dd>
<dt><a href="#startsWith">startsWith(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value is a string that starts with the supplied value.</p>
</dd>
<dt><a href="#endsWith">endsWith(field, value)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value is a string that ends with the supplied value.</p>
</dd>
<dt><a href="#oneOf">oneOf(field, values)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value is one of the items in the supplied list.</p>
</dd>
<dt><a href="#notOneOf">notOneOf(field, values)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Add criteria to limit the results where the model field value is not one of the items in the supplied list.</p>
</dd>
<dt><a href="#ascending">ascending(field)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Sort the result by the supplied field in ascending order.</p>
</dd>
<dt><a href="#descending">descending(field)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Sort the result by the supplied field in descending order.</p>
</dd>
<dt><a href="#limit">limit(num)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Limit the results to the maximum number of records returned.</p>
</dd>
<dt><a href="#skip">skip(num)</a> ⇒ <code><a href="#Query">Query</a></code></dt>
<dd><p>Skip the specified number of records.</p>
</dd>
<dt><a href="#create">create(instance)</a> ⇒ <code>Promise</code> | <code>*</code></dt>
<dd><p>Create a new model instance in the persistence store.</p>
</dd>
<dt><a href="#save">save(instance)</a> ⇒ <code>Promise</code> | <code>*</code></dt>
<dd><p>Update an existing model instance in the persistence store.</p>
</dd>
<dt><a href="#delete">delete(id)</a> ⇒ <code>Promise</code> | <code>*</code></dt>
<dd><p>Delete an existing model instance from the persistence store.</p>
</dd>
<dt><a href="#get">get(id)</a> ⇒ <code>*</code></dt>
<dd><p>Retrieve an existing model instance from the persistence store.</p>
</dd>
<dt><a href="#find">find(query)</a> ⇒ <code>Promise</code> | <code>*</code></dt>
<dd><p>Search the persistence store for models matching the {Query} criteria.</p>
</dd>
<dt><a href="#add">add(modelId, collectionName, instance)</a> ⇒ <code>Promise</code> | <code>*</code></dt>
<dd><p>Add a child model instance to collection</p>
</dd>
<dt><a href="#remove">remove(modelId, collectionName, instanceId)</a></dt>
<dd><p>Remove a child model instance from a collection</p>
</dd>
</dl>

<a name="BrightWork"></a>

## BrightWork
The BrightWork Javascript SDK

**Kind**: global class  
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

<a name="initialize"></a>

## initialize(apiKey, appName, apiURL, appURL) ⇒ <code>Promise</code> &#124; <code>\*</code>
Initialize the BrightWork Javascript SDK and connect it to your app

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>apiKey</td><td><p>the api key assigned to your app</p>
</td>
    </tr><tr>
    <td>appName</td><td><p>the name of your app as defined in the manifest</p>
</td>
    </tr><tr>
    <td>apiURL</td><td><p>(optional) the BrightWork API URL</p>
</td>
    </tr><tr>
    <td>appURL</td><td><p>(optional) the URL to your APP</p>
</td>
    </tr>  </tbody>
</table>

**Example** *(Initialize the BrightWork JavaScript SDK to work with your app.)*  
```js

BrightWork.initialize('YOUR_API_KEY', 'YOUR_APP_NAME').then(function(){
     console.log('initialized you can now access the SDK via window.bw global variable');
});
```
<a name="query"></a>

## query() ⇒ <code>[Query](#Query)</code>
Create a new query for filtering *.models.model.find

**Kind**: global function  
**See**: {Repository#find}  
**Example** *(All the photo albums where name contains &#x27;Photo&#x27; sorted by name ascending.)*  
```js
var query = BrightWork.Query().contains('name', 'Photo').ascending('name');

console.log('searching for all albums named "*Photo*"...');
bw.models.album.find(query).then(function(albums) {
  console.log('...results', albums);
});
```
<a name="equalTo"></a>

## equalTo(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to enforce that the model field is equal the the value supplied.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to enforce equality</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="notEqualTo"></a>

## notEqualTo(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to enforce that the model field is not equal to the value supplied.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to enforce non equality</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="lessThan"></a>

## lessThan(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is less than the value supplied.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="lessThanOrEqual"></a>

## lessThanOrEqual(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is less than or equal to the value supplied.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="greaterThan"></a>

## greaterThan(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is greater than the value supplied.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="greaterThanOrEqual"></a>

## greaterThanOrEqual(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is greater than or equal to the value supplied.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="like"></a>

## like(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is like the value supplied.  This allows you to perform a basic wildcard search using (%) as the wildcard.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="contains"></a>

## contains(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value containts the supplied value. This is equivalent to a string contains comparison (or like %value%).

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="startsWith"></a>

## startsWith(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is a string that starts with the supplied value.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="endsWith"></a>

## endsWith(field, value) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is a string that ends with the supplied value.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>value</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="oneOf"></a>

## oneOf(field, values) ⇒ <code>[Query](#Query)</code>
Add criteria to limit the results where the model field value is one of the items in the supplied list.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>values</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

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
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td><td><p>the model field to compare against</p>
</td>
    </tr><tr>
    <td>values</td><td><p>the comparison value</p>
</td>
    </tr>  </tbody>
</table>

<a name="ascending"></a>

## ascending(field) ⇒ <code>[Query](#Query)</code>
Sort the result by the supplied field in ascending order.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td>
    </tr>  </tbody>
</table>

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
<table>
  <thead>
    <tr>
      <th>Param</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>field</td>
    </tr>  </tbody>
</table>

<a name="limit"></a>

## limit(num) ⇒ <code>[Query](#Query)</code>
Limit the results to the maximum number of records returned.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>num</td><td><p>the maximum number of records to return</p>
</td>
    </tr>  </tbody>
</table>

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
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>num</td><td><p>the number of records to skip</p>
</td>
    </tr>  </tbody>
</table>

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
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>instance</td><td><p>the model instance</p>
</td>
    </tr>  </tbody>
</table>

<a name="save"></a>

## save(instance) ⇒ <code>Promise</code> &#124; <code>\*</code>
Update an existing model instance in the persistence store.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>instance</td><td><p>the model instance</p>
</td>
    </tr>  </tbody>
</table>

<a name="delete"></a>

## delete(id) ⇒ <code>Promise</code> &#124; <code>\*</code>
Delete an existing model instance from the persistence store.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>id</td><td><p>the identifier of the model instance to delete</p>
</td>
    </tr>  </tbody>
</table>

<a name="get"></a>

## get(id) ⇒ <code>\*</code>
Retrieve an existing model instance from the persistence store.

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>id</td><td><p>the identifier of the model instance to get</p>
</td>
    </tr>  </tbody>
</table>

<a name="find"></a>

## find(query) ⇒ <code>Promise</code> &#124; <code>\*</code>
Search the persistence store for models matching the {Query} criteria.

**Kind**: global function  
**See**: {Query}  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>query</td><td><code><a href="#Query">Query</a></code></td><td><p>the criteria to use for the search</p>
</td>
    </tr>  </tbody>
</table>

<a name="add"></a>

## add(modelId, collectionName, instance) ⇒ <code>Promise</code> &#124; <code>\*</code>
Add a child model instance to collection

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>modelId</td><td><code>*</code></td><td><p>the parent model identifier</p>
</td>
    </tr><tr>
    <td>collectionName</td><td><code>string</code></td><td><p>the collection name</p>
</td>
    </tr><tr>
    <td>instance</td><td></td><td><p>the child instance object</p>
</td>
    </tr>  </tbody>
</table>

<a name="remove"></a>

## remove(modelId, collectionName, instanceId)
Remove a child model instance from a collection

**Kind**: global function  
<table>
  <thead>
    <tr>
      <th>Param</th><th>Type</th><th>Description</th>
    </tr>
  </thead>
  <tbody>
<tr>
    <td>modelId</td><td><code>*</code></td><td><p>the parent model identifier</p>
</td>
    </tr><tr>
    <td>collectionName</td><td><code>string</code></td><td><p>the collection name</p>
</td>
    </tr><tr>
    <td>instanceId</td><td></td><td><p>the child model identifier</p>
</td>
    </tr>  </tbody>
</table>


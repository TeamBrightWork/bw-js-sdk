# Getting Started

The BrightWork platform provides a complete backend solution for your apps.  Our goal is to increase developer productivity
and reduce the time it takes for you to build a complete application.

Our Javascript SDK accelerates the time it takes to integrate your backend API with your Javascript application.

## Adding the SDK to your app

### Static

    [https://cdn.jsdelivr.net/bw-js-sdk/0.0.7/index.js](https://cdn.jsdelivr.net/bw-js-sdk/0.0.7/index.js)

### Bower
```
    bower install --save bw-js-sdk
```

## Connecting to your API
Setting you your app to connect to your backend BrightWork API is quick and easy.
```
    BrightWork.initialize('YOUR_API_KEY', 'YOUR_APP_NAME').then(function() {
        // BrightWork is now attached to window.bw
        // so you can query your data or do anything else you need now

        // like fetch all albums
        bw.models.album.find().then(function(albums) {
            console.log(album);
        });
    );
```
All of your models and services are available now via bw.models.MODELNAME and bw.services.SERVICE_NAME respectively.

## Examples
Let's assume we are working off the default BW generated manifest for a photo album.  This manifest contains two models, album & photo.

### Create a new album
```
    bw.models.album.create({ name: "My Photo Album"}).then(function(newAlbum) {
        console.log('A new album was created.');
        console.log(newAlbum);
    });
```

### Get an album from the server
```
    bw.models.album.get(1).then(function(existingAlbum) {
        console.log('Album with id: 1 is...');
        console.log(newAlbum);
    });
```

### Update an existing album
*Assumes that you have have fetched an existing ablum using get and saved to existingAlbum variable.*
```
    bw.models.album.save(existingAlbum).then(function(savedAlbum) {
        console.log('Album saved...');
        console.log(savedAlbum);
    });
```

### Delete an existing album
```
    bw.models.album.delete(1).then(function() {
        console.log('Album 1 has been deleted');
    });
```

### Search for an album
```
    var query = BrightWork.Query().equalTo('name', 'My Photo Album');

    console.log('searching for all albums named "My Photo Album"...');
    bw.models.album.find(query).then(function(albums) {
        console.log('...results', albums);
    });
```

### Advanced Query
For this example let's assume you have an e-commerce system with Order and LineItem models. You need to find all line items where the amount is
above $50 and the item is in a "pending" or "paid" status.  You want the results sorted first in decending order by date and then sorted in ascending order by line number.
```
    var query = BrightWork.Query()
        .greaterThan('amount', 50)
        .oneOf('status', ['pending', 'paid'])
        .descending('order_date')
        .ascending('line_number');

    bw.models.lineitem.find(query).then(function(items) {
        console.log('items found...', items);
    });

```
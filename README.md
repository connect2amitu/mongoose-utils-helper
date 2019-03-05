# mongoose-utils-helper
[mongoose-utils-helper](https://github.com/connect2amitu/mongoose-utils-helper) was released on feb, 2019. You can find more details on [git hub](https://github.com/connect2amitu/mongoose-utils-helper).
## Documentation
## Importing

```javascript
// Using Node.js `require()`
const { connection, common_helper, createModel, commonFuns } = require('mongoose-utils-helper');

// Using ES6 imports
import { connection, common_helper, createModel, commonFuns } from 'mongoose-utils-helper';
```

## Installation


```sh
$ npm install mongoose-utils-helper
```

## Overview
### Connecting to MongoDB

First, we need to define a connection. If your app uses only one database, you should use `connection()` function.
`connection()` takes two agruments First `mongodb://` URI, or the object with following properties `username password, hostname, port` and second agrument is to disable default console when connection is connected(default value is true).
```js

// Using Node.js `require()`
const { connection } = require('mongoose-utils-helper');

// Using ES6 imports
import { connection } from 'mongoose-utils-helper';
let object = {
                username:"",
                password:"",
                hostname:"",
                port:"",
              }
const db = connection(object);
```

`connection()` function return the database connection Object.

### Defining a Model

Models are defined through the `createModel()` interface.
```js
import { createModel } from 'mongoose-utils-helper';
**Important!** `createModel(schema,collectionName)` interface required two arguments, First schema of collection and second for collection name.
const MyModel = createModel({
  author: ObjectId,
  title: String,
  body: String,
  date: Date
}, "collectionName");
```

Once we have our model, we can then instantiate it, and save it:

```js
MyModel.find({}, function (err, docs) {
  // docs.forEach
});
```

You can also `findOne`, `findById`, `update`, etc. For more details check out [the docs](http://mongoosejs.com/docs/queries.html).

### Basic count, insert, insertMany, update, softDelete, delete, find, findOne operations using `common_helper.xxx(Model,condition)` Object.

```js

// Using Node.js `require()`
const { common_helper } = require('mongoose-utils-helper');

// Using ES6 imports
import { common_helper } from 'mongoose-utils-helper';

let condition = { name:"Amitu" };
let data = await common_helper.find(MyModel, condition);





# mongoose-utils-helper

## Documentation

  Welcome Users, 
  **Don't repeat yourself, use reusable code :)**
    Always happy to help you,
  *Happy Coding..&#9829;&#x2665;&hearts;* 
  
## Installation

```sh

$ npm install mongoose-utils-helper

```

## Getting Started

## Importing

```javascript
// Using Node.js `require()`

const {
    connection, //connection function
    createModel, //fucntion for creating mongodb model
    common_helper, //common_helper for CRUD operation
    commonFuns, // common functions
    mongoose  // mongoose package object
} = require('mongoose-utils-helper');

// Using ES6 imports
import { connection, createModel, common_helper, commonFuns, mongoose } from  'mongoose-utils-helper';

```
### Connecting to MongoDB

First, we need to define a connection. If your app uses only one database, you should use `connection()` function.

`connection()` takes two agruments First `mongodb://` URI, or the object with following properties `username password, hostname, port` and second agrument is to disable default console when connection is connected(default value is true).

#### Example:

```js

// Using Node.js `require()`
const { connection } = require('mongoose-utils-helper');
// Using ES6 imports
import { connection } from  'mongoose-utils-helper';

let  object = {
    username :  "",
    password :  "",
    hostname :  "",
    port :  "",
}

const  db = connection(object);
```

`connection()` function return the database connection Object.

### Defining a Model
  
Models are defined through the `createModel()` interface.
  
#### Example:

```js

import { createModel } from  'mongoose-utils-helper';
**Important!** `createModel(schema,collectionName)`  interface  required  two  arguments,

var MyModel = createModel({
    body : { type: String, default: "" },
    date : { type: Date, default: Date.now },
}, "my_model");

```
Once we have our model, we can then instantiate it, and save it:

```js

MyModel.find({}, function (err, docs) {
// docs.forEach
});
  
```
You can also `findOne`, `findById`, `update`, etc. For more details check out [the docs](http://mongoosejs.com/docs/queries.html).

### Using common_helper

Basic insert, insertMany, update, softDelete, delete, find, findOne and count operations using `common_helper.xxx(Model,condition)` Object.

#### Example:

```js

// Using Node.js `require()`

const { common_helper } = require('mongoose-utils-helper');
// Using ES6 imports
import { common_helper } from  'mongoose-utils-helper';

let  condition = { name :  "Amitu" };
let  data = await  common_helper.find(MyModel, condition);

//output response:
{
    status : 1, //status code (1 for success 0 for fail)
    message : "Data found", // Response message
    data :<operation  output> }; // can be object, array or string
}

```

  

### Using commonFuns

  

#### Example:

```js

// Using Node.js `require()`

const { commonFuns } = require('mongoose-utils-helper');

  

// Using ES6 imports

import { commonFuns } from  'mongoose-utils-helper';

let  mongodbId = "5ac343820e617c07555c47f0"

let  convertedMongoObjId = await  commonFuns.convertMongoId(mongodbId);
let  convertedMongoObjId = await  commonFuns.mongooseCheckValid(mongodbId);

```
##Authors

[Amit Chauhan](https://api.whatsapp.com/send?phone=9586253639&text=hey%20Amit,)

## License

Copyright (c) 2019 DGSM &lt;connect2amitu@gmail.com&gt;
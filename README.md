
[![Build Status](https://secure.travis-ci.org/soldair/node-subtract-stream.png)](http://travis-ci.org/soldair/node-subtract-stream)

subtract-stream
===============

subtract the values of the last object from the values of the current object and stream the diffs

```js
var sub = require('subtract-stream');
var s = sub();

s.on('data',function(d){
  console.log('data',d);
});

s.write({v:0});
s.write({v:2});
s.write({v:4});
s.write({v:6});
s.write({v:8});

```
output

```
data { v: 2 }
data { v: 2 }
data { v: 2 }
data { v: 2 }

```

you can also just emit numbers and it will subtract them

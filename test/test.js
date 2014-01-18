var test = require('tape');
var sub = require('../');

test("can sub",function(t){
  var s = sub();

  s.on('data',function(d){
    console.log('data',d);
    t.equals(d.v,2,'should be 2')
  });

  t.plan(4)
  s.write({v:0});
  s.write({v:2});
  s.write({v:4});
  s.write({v:6});
  s.write({v:8});

});



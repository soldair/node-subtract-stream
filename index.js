var through = require('through');
var undef;

module.exports = function(){
  var lastValue;
  return through(function(data){
    if(lastValue === undef) return lastValue = data;
    cmp = lastValue;
    lastValue = data;
    this.queue(subtractValues(data,cmp));
  });
}

function subtractValues(o1,o2){
  if(typeof o1 == "number") return o1-o2;
  var out = {},k;
  for(var k in o1){
    if(!o1.hasOwnProperty(k)) continue;
    out[k] = o1[k]-o2[k];
  }
  return out;
}


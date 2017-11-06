var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var printReverse = function printReverse(html){
  console.log(html.split("").reverse().join(""));
 }

getHTML(requestOptions, printReverse);
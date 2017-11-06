const https = require('https');

function getAndPrintHTML(){



  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


https.get(requestOptions, function (res) {



  res.setEncoding('utf8');


var data = "";
  res.on('data', function (chunk) {

    data += chunk;
    console.log(data);
  });




});
}
getAndPrintHTML();



const https = require('https');


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };


function getAndPrintHTML(options){



https.get(options, function (res) {



  res.setEncoding('utf8');


  var data = "";
  res.on('data', function (chunk) {

    data += chunk;
    console.log(data);
  });




});
}
getAndPrintHTML(requestOptions);



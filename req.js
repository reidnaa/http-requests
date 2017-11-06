const https = require('https');

function getAndPrintHTMLChunks(){



  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


https.get(requestOptions, function (res) {



  res.setEncoding('utf8');

  let data = '';

  res.on('data', function (chunk) {

    data += chunk;
    console.log(chunk + '\n' );

  });



});

}

getAndPrintHTMLChunks();




const https = require('https');

function getAndPrintHTMLChunks(){



  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


https.get(requestOptions, function (res) {



  res.setEncoding('utf8');



  res.on('data', function (chunk) {

    console.log(chunk + '\n' + 'chunk length: ' + chunk.length + '\n' );

  });



});

}

getAndPrintHTMLChunks();




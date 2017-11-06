const http = require('http');

function getAndPrintHTMLChunks(){
http.get('http://nodejs.org/dist/index.json', function (res) {



  res.setEncoding('utf8');

  let data = '';

  res.on('data', function (chunk) {
    console.log('blow chunks');
    data += chunk;


  });


  res.on('end', function () {
    console.log('response body:');
    console.log(data);
     const prettyData = JSON.parse(data);
  });

  console.log('HEY MAN');
});

}

getAndPrintHTMLChunks();




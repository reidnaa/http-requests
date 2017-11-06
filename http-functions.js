




module.exports = function getHTML (options, callback) {


  const https = require('https');


  var requestOptions = {
      host: 'sytantris.github.io',
     path: '/http-examples/step4.html'
    };


  function getHTML(options , callback){



  https.get(options, function (res) {



    res.setEncoding('utf8');


    var data = "";
    res.on('data', function (chunk) {

      data += chunk;
        console.log(data);
  });




  });
  }

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions , printHTML);




};
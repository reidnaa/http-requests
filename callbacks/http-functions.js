const https = require('https');

module.exports = function getHTML (options, callback) {

  https.get(options, function (res) {
    res.setEncoding('utf8');
    var data = "";

    res.on('data', function (chunk) {
      data += chunk;
    });

    res.on('end', function (){
       callback(data);
    });
  });
};

//function printHTML (html) {
//  console.log(html);
//}

//getHTML(requestOptions, printHTML);
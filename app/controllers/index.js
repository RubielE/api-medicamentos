var fs = require('fs');
var path = require('path');

var items = fs.readdirSync(__dirname);

items.forEach((item) => {
   var directory = path.basename(item, '.js');
   if (directory !== 'index') {
      var directories = fs.readdirSync(__dirname + '/' + directory);
      directories.forEach((file) => {
         var fileName = path.basename('./' + directory + '/' + file, '.js');
         exports[fileName] = require('./' + directory + '/' + fileName);
         //console.log(directories);
      });
   }
});
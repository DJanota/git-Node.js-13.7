// var StatMode = require('stat-mode');

// fs.stat('./cat.jpg', function (err, stats) {
//     var statMode = new StatMode(stats);
//     console.log(statMode.toString());
// });

var fs = require('fs');
// var colors = require('colors');

// fs.readFile('./text.txt', 'utf-8', function (err, data) {
//     console.log('Dane przed zapisem!'.blue);
//     console.log(data);
//     fs.appendFile('./text.txt', '\nA tak wyglądają po zapisie!', function (err) {
//         if (err) throw err;
//         console.log('Zapisano!'.blue);
//         fs.readFile('./text.txt', 'utf-8', function (err, data) {
//             console.log('Dane po zapisie'.blue)
//             console.log(data);
//         });
//     });
// });

fs.readdir('./', function(err, files){
    console.log('This folder contains the following files:');
    console.log(files);

    fs.writeFile('newFile.txt', files, (err) => {
        if (err) throw err;
        console.log('The files have been saved to newFile.txt.');
    });
});
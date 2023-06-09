const fs = require('fs');
const path = require('path');

const directory = process.argv[2];
const extension = '.' + process.argv[3];

fs.readdir(directory, function (err, files) {
    if (err) return console.error(err)
    files.forEach(function (file) {
        if (path.extname(file) === extension) {
            console.log(file)
        }
    })
})

// 2 Example
// const directory = process.argv[2];
// const extension = "." + process.argv[3];
//
// fs.readdir( directory , (err, list) => {
//     if(err) throw err;
//     const filteredList = list.filter(entry => path.extname(entry) == extension );
//     filteredList.forEach(filename => console.log(filename));
// });

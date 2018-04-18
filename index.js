const fs = require('fs')

console.log('start reading a file...')

fs.readFile('file.md', 'utf-8', function (err, content) {
  if (err) {
    console.log('error happened during reading the file')
    return console.log(err)
  }

  console.log(content)
})

console.log('end of the file')

// require('./app/index')

// const _ = require('lodash')

// _.assign({ 'a': 1 }, { 'b': 2 }, { 'c': 3 });
// // → { 'a': 1, 'b': 2, 'c': 3 }
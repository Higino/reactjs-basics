const fetch = require('node-fetch')
const co  = require('co')

/*
fetch('http://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then( post => post.title)
  .then(x => console.log(x))
*/

co(function *() {
    const uri = 'http://jsonplaceholder.typicode.com/posts/1'
    const response = yield fetch(uri)
    console.log(response);
})

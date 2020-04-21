# Promises Basics

(This is a summary of [this blog post](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html))

Here is a real world promise chain:
```js
login().then(getContacts).then(getAttachments).catch(error);
```

What can you do inside the functions `getContacts` and `getAttachments`?

You have 3 options:

1) a function that returns a promise

```js
function getContacts(result) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve(result + ' get contacts.');
    }, 10);
  })
}
```

2) a function that returns a single value

```js
function getContacts(result) {
  return result + ' I am doing something sync.';
}
```

3) a function that throws

```js
function getContacts(result) {
  throw new Error('user logged out!');
}
```

If you want to run the examples clone my [git repo](https://github.com/oren/promises-example).

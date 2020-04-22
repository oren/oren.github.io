# Don't release Zalgo!

Here is a short and practical version of Isaac's post - [Designing APIs for Asynchrony] [1].  
Zalgo is a Issac's nickname for a function that is not predictable. What it means is a function that accepts a callback and sometimes returns it right away, and some other times it returns it after some delay, in the future.

forEach is an example of a function that returns the passed callback immediately:
```js
var arr = [1,2,3];

arr.forEach(function (x) {
  console.log('first');
});

console.log('last');

// first first first
// last
```

setTimeout calls the callback sometime in the future:
```js
setTimeout(function () {
  console.log('last')
}, 1000);

console.log('first');

// first
// last
```

So when you write a function that accept a callback, make sure your function always sync or always async. don't mix the two.

Here is a Zalgo in our codebase.
This function will return right away if first name or last name is missing but if they exist, it will return sometime in the future with the payload from the login server.

```js
function register(options, callback) {
    var first_name = (options['first_name'] || '').trim();
    var last_name = (options['last_name'] || '').trim();
    var errors = [];

    if (!first_name) {
        errors.push(['first_name', 'Please enter a valid name']);
    }
    if (!last_name) {
        errors.push(['last_name', 'Please enter a valid name']);
    }
    if (errors.length) {
        return callback(null, errors);
    }

    var params = {
        'user': {
            'email': options['email'],
            'first_name': first_name,
            'last_name': last_name,
            'new_password': options['new_password'],
            'new_password_confirmation': options['new_password_confirmation'],
            'terms': '1'
        },
        'vrid': options['vrid'],
        'merge_history': options['merge_history'] || 'true'
    };

    requestWithSignature('post', '/api/v2/users', params, callback);
}
```

How to fight a Zalgo when you see one?
```js
if (errors.length) {
  process.nextTick(function() {
    callback(null, errors);
  });
  return;
}
```

[process.nextTick] [2] is the way to tell node we want to execute something in the future (the next 'tick' of the event loop).
Now our register function is consistant - it always delays the callback call.

Two more things: the error should be the first argument and it's [better to pass an Error object than a string] [3].

```js
callback(new Error(errors), null);
```

[1]: http://blog.izs.me/post/59142742143/designing-apis-for-asynchrony
[2]: http://nodejs.org/docs/latest/api/process.html#process_process_nexttick_callback
[3]: http://www.devthought.com/2011/12/22/a-string-is-not-an-error/

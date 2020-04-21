## Javascript CheatSheet

Based on [this Tutorial](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript).

**Table of Contents**
* [Types](#types)
* [Variables](#variables)
* [Numeric operators](#numeric-operators)
* [Control structures](#control-structures)
* [Objects](#objects)
* [Arrays](#arrays)
* [Functions](#functions)
* [Closures](#closures)
* [Custom objects](#custom-objects)

## Types

* Number
* String
* Boolean
* Object (Function, Array, Date, RegExp)
* undefined
* null

### Numbers

```js
var num = 0.1;
var x = Math.sin(3.5);
var d = Math.PI * 3 * 2;
```

Convert string to int
```js
parseInt("123", 10); // 123
Number("123"); // 123
```
Convert int to boolean
```js
Boolean(234); // true
```

### Strings

```js
"hello".charAt(0); // "h"
"hello, world".replace("hello", "goodbye"); // "goodbye, world"
"hello".toUpperCase(); // "HELLO"
```

### Undefined

3 cases where we will get undefined:

1) forgetting to assign a variable.

```js
var x;    
console.log(x);
```

2) access a key in a hash that doesn't exist.

```js
var foo = {};
foo.x;
```

3) forgetting to pass a variable to a function

```js
function foo(x) { console.log(x); }
foo();
```

### Boolean

```js
Boolean("");  // false
Boolean(234); // true
```

## Variables

```js
var a;
var name = "simon";
```

## Numeric Operators

 +, -, *, / and % 

```js
var y = 2;
var x = (y * 5) / 3;
```

## Control structures

if, while, &&, ||, ?, switch 

```js
var name = "kittens";

if (name === "puppies") {
  name += "!";
} else if (name === "kittens") {
  name += "!!";
} else {
  name = "!" + name;

}

// name = kittens!!

```

```js
while (true) {
  // an infinite loop!
}
```

Check that o is truthy using &&

```js
var name = o && o.getName();
```

Set default value using ||

```js
var name = otherName || "default";
```

Use thhe ternary operator for conditional expressions:

```js
var allowed = (age > 18) ? "yes" : "no";
```

Switch statement:

```js
switch(action) {
  case 'draw':
    drawIt();
    break;
  case 'eat':
    eatIt();
    break;
  default:
    doNothing();
}
```

## Objects

```js
var foo = {};
var person = {name: 'josh', age: 23};
```

## Arrays

```js
// a is an array
var a = ["dog", "cat", "hen"];

// assigning a string into index 100 of our array
a[100] = "fox";
a.length; // 101

// add item to the end of the array
a.push('kitten');

// print each element
a.forEach(function(item){
  console.log(item);
});
```

A few functions of Arrays


| Usage        | What it does           |
| ------------- |:-------------:|
|a.toString()   | Returns a string with the toString() of each element separated by commas.|
|a.toLocaleString() |Returns a string with the toLocaleStringring() of each element separated by commas.|
|a.concat(item1[, item2[, ...[, itemN]]])| Returns a new array with the items added on to it.|
|a.join(sep)| Converts thate array to a string - values delimited by the sep param|
|a.pop()| Removes and returns the last item.|
|a.push(item1, ..., itemN)| Push adds one or  more items to the end.|
|a.reverse()| Reverse the array.|
|a.shift()| Removes and returns the first item.|
|a.slice(start, end)| Returns a sub-array.|
| array.sort([cmpfn])| Takes an optional comparison function.|
|a.splice(start, delimitedelcount[, item1[, ...[, itemN]]])| Lets you modify an array by deleting a section and replacing it with more items.|
|a.unshift([item]) |Prepe|


## Functions

```js
function add(x, y) {
  var total = x + y;
  return total;
}

var res = add(2,3);
 ```

## Closures

```js
function makeAdder(a) {
  return function(b) {
    return a + b;
  };
}

x = makeAdder(5);
y = makeAdder(20);
x(6); // 11
y(7); // 27
 ```

**What happens when you return a function from a function?**  
Everytime you call a function, JavaScript keeps a 'scope' object with the parameters you passed.  
In the first example we pass 5. so the scope object is {a: 5}.  
Since we asigned a function into x variable, x keeps a reference to that object so it's not being garbage collected.

## Custom objects

```js
function Person(first, last) {
  this.first = first;
  this.last = last;
}

Person.prototype.fullName = function() {
  return this.first + ' ' + this.last;
};

Person.prototype.fullNameReversed = function() {
  return this.last + ', ' + this.first;
};

// create new instance of Person object
s = new Person("Simon", "Willison");
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
  return this.first.toUpperCase()
};
s.firstNameCaps(); // "SIMON"
 ```

Person.prototype is an object shared by all instances of Person. It forms part of a lookup chain (that has a special name, "prototype chain"): any time you attempt to access a property of Person that isn't set, JavaScript will check Person.prototype to see if that property exists there instead. As a result, anything assigned to Person.prototype becomes available to all instances of that constructor via the this object.

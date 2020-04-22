## LevelDB

![@dominictarr](https://i.imgur.com/AxuKdQE.png)

### What is it?
LevelDB is a very fast and lightweight, embedded database. It was created by two Google engineers and is inpired by BigTable, Google's proprietary file system. You are probably using LevelDB without knowing it since it's part of the Chrome browser (exposed as [IndexedDB](https://developer.mozilla.org/en-US/docs/IndexedDB)). 

Other databases in the embedded category are BerkelyDB and SQLite (it's important to point out that LevelDB is faster).
By embedded it means you don't run it in a separate process as you would normally do with many of the popular databases such as MySQL, MongoDB or Redis. LevelDB is contained within your application process and can't be accessed from other process.
It is literally just a file based store of key-value pairs that does some fancy caching and compression.

If we compare it to Redis, it's even lighter, has more reliable writes and, unlike Redis, you don't store your entire data in memory but in the file system. Another difference is Redis has more data structures (sets, lists, etc.) that LevelDB is lacking. The similarity is that both store key-value pairs and both can save JSON.

### What situations is it good for?

* Whenever you need an easy way to persist data without worrying about RAM but with speed very close to memory access
* Smartphones, Raspberry Pi or similar small device
* Offline web apps - if you use LevelDB on the server you might be able to use the same code for the browser storage (IndexedDB)
* Building block for a database. LevelDB (or a variant) is used in BigTable, Hadoop’s HBase, Cassandra and Riak.

### Example

Let's dive right in. Here is an example of adding 2 blog posts and reading all the db using streams:

    npm install levelup

```js
// index.js

var levelup = require('levelup')
var db = levelup('./mydb')

db.put('post!' + Date.now(), {author: 'josh', title: 'angularJS', content: '<p> bla bla bla </p>'}, {encoding:'json'}, function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  db.put('post!' + Date.now(), {author: 'jake', title: 'Responsive Design', content: '<p> blu blu blu </p>'}, {encoding:'json'}, function (err) {
    if (err) return console.log('Ooops!', err) // some kind of I/O error

    // to get a stream of all posts in reverse chronological order
    db.createReadStream({ reverse: true, encoding: 'json' })
     .on('data', function (data) {
        console.log(data.key, '=', data.value)
      })
      .on('error', function (err) {
        console.log('Oh my!', err)
      })
      .on('close', function () {
        console.log('Stream closed')
      })
      .on('end', function () {
        console.log('Stream ended')
      })
  })
});
```

Runnning it with `node index.js` will output

    post!1365218243987 = { author: 'jake', title: 'Responsive Design', content: '<p> blu blu blu </p>' }
    post!1365218243982 = { author: 'josh', title: 'angularJS', content: '<p> bla bla bla </p>' }

    Stream ended
    Stream closed

Notice the following:  

* We never run a seperate process for our DB. All we did is requiring levelup (the most popular node packages for LevelDB) and called the leveldb function with the location that we want our database to live. It will create a folder called mydb with the database's content.
* The [API](https://github.com/rvagg/node-levelup#api) is very simple - put, get, del and a few streaming functions.
* In order to make sure our keys are unique we added Date.now(). For example, the first key is something like post!1365217603596. The exclamation mark is used as a separator.

The nice thing about using leveldb when used with node.js is that node can take you very very far with only single a process. Leveldb is thread-safe which means that all the libuv threads that run in parallel in a typical node app will make reading and writing to leveldb extremely fast. In addition, you can use streams for reading or writing, which feels as if you are using a node core module - an indication that the [author](https://github.com/rvagg) of LevelUp really knows what he is doing.


### Safety
LevelUP is very safe. even if the node process crashed, as long as the write operation was sent to the file system it will make it.
In addition, you can use the sync option when you send a write. When doing that, your callback will not be called unless the write was sucessful (will slow the writes):

```js
db.put(foo, '123' , {sync: true}, callback)
```

The only time when writes can get lost is an OS crash. if that happens it might create a partially written log. when level db recovers it uses checksums to detect it and it will ignore them. If you want to protect against situation like this you can use an external package call level-hook that gives you an opportunity to direct writes to multiple locations or add a level of redundancy on top of leveldb.

### Backup
You got two options when it comes to backing up the data:  

1. Close the db and copy the whole directory.   If you can't close, a copy should be ok still but there's a small risk you'll catch it in the middle of a compaction.  Even if you do catch it in a midway state then there's a repair() function you can use in levelup 0.7 - `levelup.repair(location, callback)`

1. Open 2 dbs and stream the entire db into the other:

```js
function copy (srcdb, dstdb, callback) {
  srcdb.createReadStream().pipe(dstdb.createWriteStream()).on('close', callback)
}
```

### Resources

* Podcast episode about LevelDB - http://nodeup.com/fortyone 
* Blog post about LevelDB Internals - http://www.igvita.com/2012/02/06/sstable-and-log-structured-storage-leveldb/
* Slides by the creator of LevelUp - [Rod Vagg](https://github.com/rvagg) - http://rvagg.github.com/presentations/nodejsdub/#/
* GUI for LevelDB, built by [Paolo Fragomeni](https://github.com/hij1nx) - https://github.com/hij1nx/levelweb
* Chat room on freenode - [##leveldb](http://webchat.freenode.net/?channels=##leveldb)

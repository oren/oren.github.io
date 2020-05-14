<!-- numbers -->

# Deno

## 1. What is Deno?
Deno is a new runtime for executing JavaScript and TypeScript outside of the web browser. It uses V8 and is built in Rust.

## 2. Why do I care?
Think Typescript but without Node's design flaws.

* No need for `npm` or  package.json
* All async actions return a promise
* It requires explicit permissions for file, network, and environment access
* Always dies on uncaught errors
* Uses "ES Modules" and does not support require(). Third party modules are imported via URLs: `import * as log from "https://deno.land/std/log/mod.ts";`

## 3. Examples of using it

### Your first CLI

Open your laptop's terminal and type:
```
deno run https://deno.land/std/examples/welcome.ts
=> Welcome to Deno 🦕
```

### Your first Web Service
a. Write your web service code

Create new file called `example.js`

```
import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
	for await (const req of serve({ port: 8000 })) {
	req.respond({ body: "Hello World\n" });
}

```

Notice that the import statement has a URL with a version number!

b. Run your web service
```
deno run --allow-net example.js
```

c. Open your browser at localhost:8000
```
=> Hello World
```

## 4. Install

```
curl -fsSL https://deno.land/x/install/install.sh | sh
```

add to .bashrc:

```
export DENO_INSTALL="~/.deno"
export PATH="$DENO_INSTALL/bin:$PATH"
```

## 5. Links
* [Deno 1.0 announcement](https://deno.land/v1)

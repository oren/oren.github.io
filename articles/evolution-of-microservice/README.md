# Evolution of a Microservice

![evolution](evolution.gif)

1. Write a function.
1. Put it in a separate file and expose it as a CommonJS module.
1. Move the function to it's own Git repo.
1. Publish to NPM.
1. Put it behind HTTP Service.

Most of the time you don't continue beyond step 2. If the function needs to be shared with other projects, move it to it's own Git repo. Do you need semantic versioning? publish it to NPM. Do you want to consume it over HTTP? set up an HTTP service in front of it.

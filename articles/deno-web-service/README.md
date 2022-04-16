# Deno Web Services

## Install Deno on your laptop

curl -fsSL https://deno.land/install.sh | sh

## Create new Typescript file: hello.ts

		import { serve } from "https://deno.land/std@0.135.0/http/server.ts";

		console.log("http://localhost:8000/");
		serve((req) => new Response("Hello World\n"), { port: 8000 });

## Run the service on your laptop
deno run --allow-net hello.ts

## Try it out
open your browser: http://localhost:8000/

You can also try it without the browser with this command: curl localhost:8000

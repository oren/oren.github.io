import { serve } from "https://deno.land/std@0.135.0/http/server.ts";

console.log("http://localhost:8000/");
serve((req) => new Response("Hello World\n"), { port: 8000 });

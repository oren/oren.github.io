# Python crash course - Lesson 2

## Lesson 2: build a website
* What will you do? write a website that uses the program from lesson 1.
* Time: 5 minutes.

## 1. Do this
1. Open the terminal, create a new folder, name it `my-website`.
2. Copy calculator.py file from lesson 1 into this folder.
2. Create a new file called `server.py` to the same folder.

Copy the code below into server.py file and run `python server.py`.

You should see OK:

```
Server started http://localhost:8080
```

server.py:

```
from http.server import BaseHTTPRequestHandler, HTTPServer
import time
from calculator import add

hostName = "localhost"
serverPort = 8080

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        summary = str(add([5,1,2]))
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(bytes("<html><head><title>https://pythonbasics.org</title></head>", "utf-8"))
        self.wfile.write(bytes("<p>Request: %s</p>" % self.path, "utf-8"))
        self.wfile.write(bytes("<body>", "utf-8"))
        self.wfile.write(bytes("<p>This is an example web server.</p>", "utf-8"))
        self.wfile.write(bytes(summary, "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))

if __name__ == "__main__":
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")
```

Open the browser in localhost:8080

You should see your website:

```
Request: /

This is an example web server.

The result of the calculation is:
8
```

It was able to calculate 5 + 1 + 2 and return 8.

If you look at the code you will see how you will see `add([5,1,2])` which is the way to call your `add` function that lives in a separate file.


## 2. What is this?
Congrats!!!

You wrote a website that uses your calculator. It's super simple now but that's ok for now.

## 3. Why is this important?
You can now share this website with the world!

## 4. Next step - lesson 3

Coming soon!

# Crystal Programming Language

[Crystal](https://crystal-lang.org/) is a programming language with the performance close of Rust, syntax of Ruby, and concurrency model of Go.

## 1. Install
For Ubuntu:
```
curl -sSL https://dist.crystal-lang.org/apt/setup.sh | sudo bash
sudo apt install crystal
```
You will have an executable named crystal:
```
crystal

Usage: crystal [command] [switches] [program file] [--] [arguments]

Command:
    init                     generate a new project
    build                    build an executable
    docs                     generate documentation
    env                      print Crystal environment information
    eval                     eval code from args or standard input
    play                     starts Crystal playground server
    run (default)            build and run program
    spec                     build and run specs (in spec directory)
    tool                     run a tool
    help, --help, -h         show this help
    version, --version, -v   show version

Run a command followed by --help to see command specific information, ex:
    crystal <command> --help
```

[Install on other platforms](https://crystal-lang.org/install).

## 2. Hello World
Create a new file: hello.cr

```crystal
require "http/server"

server = HTTP::Server.new do |context|
  context.response.content_type = "text/plain"
  context.response.print "Hello world! The time is #{Time.local}"
end

address = server.bind_tcp 8080
puts "Listening on http://#{address}"
server.listen
```
Run: `crystal run hello.cr` and open the browser at http://127.0.0.1:8080

You should see: `Hello world! The time is 2019-12-26 14:35:35 -08:00`

# 3. Links
* [Reference](https://crystal-lang.org/reference)
* [Standard Library Documentaion](https://crystal-lang.org/api)
* [Blog](https://crystal-lang.org/blog/)
* [Forum](https://forum.crystal-lang.org)
* [Chatroom](https://gitter.im/crystal-lang/crystal)
* [Twitter](https://twitter.com/CrystalLanguage)
* [Reddit](https://crystal-lang.org/blog)
* [StackOverflow](https://stackoverflow.com/questions/tagged/crystal-lang?sort=newest)
* [Weekly email about Crystal (not official)](http://crystalweekly.com)

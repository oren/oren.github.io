# Hello World Rust

Create new Rust project using Cargo
```
cargo new hello_world --bin
cd hello_world
cargo run

=> Hello, world!
```

Notice the 3 files that `cargo new` command created:
```
tree

=>
.
├── Cargo.lock
├── Cargo.toml
└── src
    └── main.rs

1 directory, 3 files
```

You can also compile your code into an executable:
```
cargo build
./target/debug/hello_world

=> Hello, world!
```

## Explanation

Cargo is a tool that Rustaceans use to help manage their Rust projects.
Cargo manages three things: building your code, downloading the dependencies your code needs, and building those dependencies. This program doesn’t have any dependencies, so we’ll only be using the first part of its functionality - compiling your code.


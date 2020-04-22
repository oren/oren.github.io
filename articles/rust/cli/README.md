# Build CLI using Rust
Rust is fast as C but also safer. It is great for CLI apps, networking, and embedded devices

## 1. Install
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

## 2. Hello World

Build CLI in Rust (similar to wget):
```
git clone git@github.com:mattgathu/duma.git
cd duma
cargo build
./target/debug/duma https://oren.github.io
```

The last command downloaded the html page from oren.github.io and saved it as index.html. Check it's content with:
```
cat index.html
```
You should see something like the below output:

	<!DOCTYPE html>
	<html lang="en">
		<head>
			<meta charset="UTF-8">
			<title>Oren's Website</title>
			...
			...
			more html
			...

Congrats! You have a command line utility written in Rust that can download stuff from the internet

## 3. Next Steps

Try make small changes to the code just for fun. The codebase is 6 files in src folder. Open them, modify whatever and run `cargo build` it again.

# 4. Links
* [Blog post explaining the code](https://mattgathu.github.io/writing-cli-app-rust/)
* [Install Rust](https://www.rust-lang.org/tools/install)
* [Rust Book](https://doc.rust-lang.org/book/)
* [Rust by Example](https://doc.rust-lang.org/rust-by-example/)

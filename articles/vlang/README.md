# V Language

## 1. Install
```
git clone git@github.com:vlang/v.git
cd v
make
```

This will create an executable called v. Add the path to this folder in .bashrc: `export PATH=$PATH:path/to/repo`

## 2. Hello World
Create a new file: hello.v

```
fn main() {
	println('hello world')
}

```
Run: `v run hello.v`

## 3. Update to the recent change
```
v up
```


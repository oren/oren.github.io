# Adoption Program 2 - learn Chinese

## Why do I care?
Learn chinese and code at the same time!

## What is this?
In this program you will lean a programming language with chinese syntax. The program have 3 tutorial that will guide you step by step to write programs using a programming Language called wenyan (文言).

## How?
The program have 3 tutorial that will guide you step by step to build your first command line application.

## Tutorial 1
This 10 minutes tutorial you will build a program that prints 問天地好在 3 times.

### Step 1. Install the wenyan programming language (文言)

```
npm install -g @wenyanlang/cli
```

Note: You need to have npm install on your laptop

### Step 2. Create the wenyan program
Create new file: hello.wy with the following content:

```
吾有一數。曰三。名之曰「甲」。
	吾有一言。曰「「問天地好在。」」。書之。
云云。
```

Run this command to run it:
```
wenyan hello.wy

問天地好在。
問天地好在。
問天地好在。
```

### Step 3. Create the Ruby program
```
wenyan -c hello.wy --lang=rb -o hello.rb
ruby hello.rb

問天地好在。
問天地好在。
問天地好在。
```

Congrats! You build a command line app in Ruby. Move to Tutorial 2

## Tutorial 2 - Build a command line app in Crystal

### What is this?
This 10 minutes tutorial you will build a program that prints 問天地好在 3 times. This time you'll use Crystal programming language.

### How?
You will use a programming called Crystal to build it.

### Step 1. Install Crystal
```
curl -sSL https://dist.crystal-lang.org/apt/setup.sh | sudo bash
sudo apt install crystal
```

### Step 2. Create a Crystal program
Create new file: hello.wy with the following content:
```
甲=3
甲.times do |_rand1|
	puts "問天地好在。"
end
```

## Step 3. Run it
```
crystal hello.cr

問天地好在。
問天地好在。
問天地好在。
```

## Tutorial 2 - Run multiple apps at the same time
TODO

## Tutorial 3 - Build a web interface for the app
TODO

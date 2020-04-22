# Tutorial 1 - Hello World
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

Congrats! You build a command line application in Ruby. Move to Tutorial 2

## Tutorial 2 - Syntax

TODO: This section is a work in progress. I don't have ETA for completion.

## What is my next step in the program?
Continue to [Tutorial 2 - syntex](/adoption-programs/adoption-program-2/tutorial-2/)

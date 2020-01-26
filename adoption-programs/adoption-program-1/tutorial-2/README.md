# Tutorial 2 - Add the ability to ask for help
TODO: This section will be written in Q1 of 2020.

## What will you learn in this tutorial?
In this tutorial you will add a feature to your bot - you will be able to ask the bot for help. Here is what you will be able to do:
```
crystal coach.cr --help

I am your coach!

How can I help you today?
1. Increase my physical strength
2. Learn to dance Cuban Salsa
3. Learn to Surf
4. Learn Chinese

Choose 1-4 and hit enter
```

## How much time it will take?
10 minutes

## Step 1. Write some code
```
mkdir coach
cd coach
crystal init app coach . --skip-existing
```

open src/coach.cr and add replace line 5 with:
```
puts "I am your coach!"
```

## Step 2. Build the program
```
crystal build src/coach.cr
```

## Step 3. Run the program
```
./coach

I am your coach!
```

Congrats! You completed the basic part of the program. You built a simple bot that you can ask for help. This is your graduation party!

## What is my next step in the program?
The advanced part of the program will teach you the following:

| Name        | Time           |
| ------------- |:-------------:|
| [Tutorial 3 - Build an HTTP API for your bot](/adoption-programs/adoption-program-1/tutorial-3/) | 20 minutes
| [Tutorial 4 - Build a Website for your bot](/adoption-programs/adoption-program-1/tutorial-4/) | 20 minutes

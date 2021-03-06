# Build CLI in Crystal

## 1. Install Crystal
https://crystal-lang.org/install/

## 2. Build a CLI

This CLI is a todo list in the terminal. You don't have to build the app from scratch. Instead you will download an existing one and play with it.

Download the code and build the command line executable:
```
git clone https://git.sceptique.eu/Sceptique/todo
make
```

Congrats! Now you have an executable file called todo.

## 3.Use the CLI
```
./todo "buy milk"
./todo "buy eggs" --date 4/13/20

./todo
=>
  id |         date | message
---- | ------------ | --------
   0 |              | buy milk
   1 |      4/13/20 | buy eggs
```

You can also have other lists. Let's say you are building an app and you want to have all the tasks related to that app together:
```
./todo "Allow adding a meal" --list nutrition-app
./todo "Allow uploading food" --list nutrition-app
./todo --list nutrition-app
=>
  id |         date | message
---- | ------------ | --------------------
   0 |              | Allow adding a meal
   1 |              | Allow uploading food
```

## 4. Experiment
The code is in src folder. Make small changes just for fun and run `make` again.

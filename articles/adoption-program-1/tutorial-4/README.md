## Tutorial 1
This 10 minutes tutorial you will build a program that prints 問天地好在 3 times. This time you'll use Crystal programming language. You will use a programming called Crystal to build it.

### Step 1. Install Crystal
```
curl -sSL https://dist.crystal-lang.org/apt/setup.sh | sudo bash
sudo apt install crystal
```

### Step 2. Create a Crystal program
Create new file: coach.wy with the following content:
```
甲=3
甲.times do |_rand1|
	puts "問天地好在。"
end
```

### Step 3. Run it
```
crystal coach.cr

問天地好在。
問天地好在。
問天地好在。
```

## Tutorial 2 - Add the ability to ask for help
TODO
```
crystal coach.cr --help
```

## Tutorial 3 - Add the ability to run multiple bots
TODO
```
crystal coach.cr --scale=500
```

## Tutorial 4 - Build a web API for the app
TODO
```
curl https://my-bot.com/coach?org=software-engineers
```

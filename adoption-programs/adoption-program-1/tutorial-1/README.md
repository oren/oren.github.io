# Tutorial 1
This 10 minutes tutorial you will build a program that prints 問天地好在 3 times. You'll use the Crystal programming language to build it.

## Step 1. Install Crystal
```
curl -sSL https://dist.crystal-lang.org/apt/setup.sh | sudo bash
sudo apt install crystal
```

## Step 2. Create a Crystal program
Create new file: coach.cr with the following content:
```
甲=3
甲.times do
	puts "問天地好在。"
end
```

## Step 3. Run it
```
crystal coach.cr

問天地好在。
問天地好在。
問天地好在。
```

## What is my next step in the program?
Continue to [Tutorial 2 - Add the ability to ask for help](/adoption-programs/adoption-program-1/tutorial-2/)

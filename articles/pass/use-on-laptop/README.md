# How to use pass on your laptop

## Genegate a password
Create a password for your gmail: (the 10 is the number of characters you want your password to have)
```
pass generate gmail 10
```

## Genegate a password inside a folder
Create a password inside a folder called banks
```
pass generate banks/wells-fargo 12
```

## View a password
View the gmail password
```
pass gmail
```

You will be asked for your password. type it and you should see your gmail's password in the terminal:
```
t61\A3'L2;
```

## View names of all passwords
View all entries:
```
pass
```

You should see something like this:
```
Password Store
└── gmail
```

## Delete a password
Delete the gmail password
```
pass rm gmail
```


## Store password and other info in the same file

Sometime you want to store the password and other useful information in the same file. I like to have the password as the first line.
```
// generate password with length of 10
pass generate test 10

// edit the file with vim. add more lines like username, email, etc
pass edit test

// replace the first line with a new password
pass generate test -i 10
```

## Find files by name
```
pass find foobar
```

## Find files by content
```
pass grep foobar
```

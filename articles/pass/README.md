# pass - Password Manager

## 1. What is it
A tool to manage your passwords. Available on your laptop and phone. [Website](https://www.passwordstore.org/).

## 2. Why should you care
Using insecure passwords or the same password is the most common privacy risk and one of the easiest to solve.

## 3. Getting Started
First you'll learn how to use a tool called GPG that is needed by pass.
First you'll have to setup something called GPG, than install the pass tool and learn how to use it.

### 3.1 Setting up GPG
Generate a gpg key
```
gpg2 --full-gen-key
```

Enter your name, email, and no comment. Enter 4096 for the keysize. Wait a few minutes to the key to get created.
Test the creation of the key with `gpg -k`.

### 3.2 Setting up pass
Install pass - look at the download section of [pass's website](https://www.passwordstore.org/).

Setup pass. Replace your-email@gmail.com with the email you used with your gpg key.
```
pass init your-email@gmail.com
```

### 3.3 Setting up Git
```
sudo apt-get install openssh-client openssh-server
git init --bare ~/pass-repo
pass git init
pass git remote add origin ssh://oren@localhost:/home/oren/pass-repo
pass git push origin master
```

### 3.4 Using pass
Create a password for your gmail: (the 10 is the number of characters you want your password to have)
```
pass generate gmail 10
```

Create a password inside a folder called banks
```
pass generate banks/wells-fargo 12
```

View the gmail password
```
pass gmail
```

Delete the gmail password
```
pass rm gmail
```

View all entries:
```
pass
```

You should see something like this:
```
Password Store
└── gmail
```

Backup the pass data folder
```
cp -r ~/.password-store password-store
```

### 3.5 Other useful commands
List secret keys
```
gpg -k
```

Delete a private key
```
gpg --delete-secret-key "User Name"
```

Delete a public key
```
gpg --delete-key "User Name"
```

Backup the gpg keys
```
gpg2 --export-secret-keys > secret.gpg
```

Restore the gpg keys
```
gpg2 --import secret.gpg
gpg --edit-key <KEY_ID>
gpg>trust
enter '5'
```

Git
```
sudo apt-get install openssh-client openssh-server
git init --bare pass-repo
pass git init
pass git remote add origin ssh://oren@localhost:/home/oren/pass-repo
pass git push origin master
pass git pull origin master
```

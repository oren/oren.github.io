<!-- numbers -->

# Setup pass on your Android

## 1. Setup git
```
sudo apt-get install openssh-client openssh-server
git init --bare ~/pass-repo
pass git init
pass git remote add origin ssh://oren@localhost:/home/oren/pass-repo
pass git push origin master --set-upstream
```
Explanation: these commands create a git repository that stores the encrypted passwords. The repository is located at `~/pass-repo` and is needed in order to allow your phone to pull and push passwords.

Line by line:
* `git init --bare ~/pass-repo` creates a folder with bare git repository
* `pass git init` creates git repo in ~/.password-store folder
* `pass git remote add origin ssh://oren@localhost:/home/oren/pass-repo` add ~/pass-repo as remote so whenever you run `pass git push origin master` ~/pass-repo will have the commits you added to ~/password-store
* `pass git push origin master --set-upstream` updates ~/pass-repo with the commits from ~/password-store. Passing `--set-upstream` tells git that the local branch master tracks the remote branch origin/master, and so when you do git pull when master is checked out, it will automatically pull origin/master, and the same for when you do git push.

## 2. Generate a set of OpenSSH keys
```
ssh-keygen -t rsa -b 4096
Enter file in which to save the key (/home/msfjarvis/.ssh/id_rsa): pass_store
```
Explanation: this command create two files: pass_store and pass_store.pub. Those are SSH keys that allow your phone to authenticate with your laptop

## 3. Copy the public SSH key to authorized_keys
```
cat pass_store.pub >> ~/.ssh/authorized_keys
```
Explanation: adding the public ssh key to the authorized_keys file will allow your phone (which will have the private key) to authenticate with your laptop

## 4. Setup your phone related stuff
* Enable USB Debugging on your phone (google for it. It depends on your Android)
* Connect a USB cable from your phone to your laptop
* Pick 'Transfer files' on the phone

## 5. Copy the private SSH key to your phone
```
sudo apt-get install android-tools-adb
adb push pass_store /sdcard/
adb shell chmod 644 /sdcard/pass_store
```
Explanation: `adb push` copy the private SSH key to your phone. /sdcard/ on Android is a symlink to internal storage so you can push to it without needing to poke into /mnt

## 6. Use the SSH key in the Password Store app
* Open the Password Store app on your phone
* Click on the three dots at the top right -> Settings -> Import SSH key
* Click on the three dots at the top right -> Show internal storage -> Click on the three horizontal lines on the top left -> Click on your phones icon
* Find the pass_store file and click it. Notice the message: 'SSH file imported'

Remove the key from your phone
```
adb shell rm /sdcard/pass_store
```

## 7. Connect the Password Store app to the git repository on your laptop
* Open the Password Store app on your phone
* Click on the three dots at the top right -> Settings -> 'Edit git server settings'

Fill-in the server info:
```
Username: oren (my laptop's user)
Server URL: 192.168.0.104 (my laptop's url)
Port: 22
Repo path: /home/oren/pass-repo (path to the bare repo)
```

Keep the Protocol (ssh) and Authentication Mode (ssh key) the same.

* Click  'SAVE'
* Click the left arrow at the top left
* Click on the three dots at the top right -> 'pull from remote'

## 8. Use the gpg key in the OpenKeychain app

```
gpg2 --export-secret-keys > secret.gpg
adb push secret.gpg /sdcard/
```

Open the OpenKeychain app -> 'import key from file'. Choose the secret.gpg file.

Explanation: this is the same key that you use to convert your plaintext password to the encrypted data. You need to use it in the mobile app.

## 9. Change a setting of OpenKeychain
Settings -> Apps -> Permissions -> Other Permissions -> OpenKeychain -> Enable `Display pop-up windows while running in the background`

Explanation: without this settings the mobile app won't be able to show you the passwords.

## 10. Setup the mobile app
* Use https://webwormhole.io/ to copy ~/.password-store to your phone
* Open the Password Store app
* Settings -> External repository - check it
* Select external repository - select the location of .password-store
* Settings -> Select OpenPGP provider -> OpenKeychain

Explanation: copy the .password-store folder is needed because I am having issues with the official `git clone` approach.

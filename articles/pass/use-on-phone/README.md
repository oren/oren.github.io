# How to use pass on your phone

Once in a while you want pull the passwords from your laptop to your phone.

1. Run the following command on your laptop: `pass git push`
2. Open the Password Store app
3. Click on the three dots on the top right, choose 'Pull from remote'


Explanation: `pass git push` pushes the commits from `~/.password-store` (the repo where the passwords are saved) to `~/pass-repo` (bare repo. The repo where your phone is pulling from).

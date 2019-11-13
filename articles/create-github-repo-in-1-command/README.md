# Create a Github Repo in One Command

I use a single command to create my git repositories:

```bash
git-new my-new-git-repo
```

It's a simple bash script. Here are the steps to create it:

```bash
touch git-new && chmod 755 git-new
```

Locate this file somewhere on your path.

Add the following lines to the git-new script:
``` bash
#!/bin/bash

# create a new repo on github
# usage: git-new <repo name>

set -e

name=$1

if [ "$1" ]; then
  mkdir "$name"
  cd "$name"
  echo "# $name" > readme.md
  git init
  git add readme.md
  git commit -m 'first commit'
  git hub repo-new "$name"
  remote=$(git hub repo "$name" | grep URL | awk '{print $3}')
  git remote add origin "$remote"
  git push origin master
else
  echo provide a repo name
fi
```

You'll notice that I use `git hub`. This is a [repository](https://github.com/ingydotnet/git-hub) of bash scripsts that use github API so you won't need to use your web browser to interact with Github (create, fork, clone etc).
Here is how to set it up:

```bash
git clone https://github.com/ingydotnet/git-hub ~/projects/git-hub
echo "source ~/projects/git-hub/init" >> ~/.bashrc
```

That's it! Go ahead and try `git-new my-awesome-project` and notice a new project was created on github.

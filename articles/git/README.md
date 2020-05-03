# How to quickly contribute to a codebase on github

```
#!/bin/bash

# 1. What is this? fork and clone a repo on github
# 2. Why should I care? reduce the time it takes to contribute to other codebases
# 3. How do I use it?: git-fork <org name> <repo name>
# 4. Example: git-fork oren/oren.github.io

# 5. How?
# Prerequisites: install hub - https://hub.github.com/
# Create new file called git-fork
# Create an executable: chmod u+x git-fork
# Change the 'me' variable to your github user

set -e

me=oren
org=$(dirname "$1")
repo=$(basename "$1")

if [ "$org" ] && [ "$repo" ]; then
  git hub fork "$1"
  git hub clone "$me"/"$repo"
  cd "$repo"
  git remote add upstream git@github.com:"$1"
else
  echo provide one arguments: org/repo
fi
```

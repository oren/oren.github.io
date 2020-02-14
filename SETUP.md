## Install Crystal
```
curl -sSL https://dist.crystal-lang.org/apt/setup.sh | sudo bash
sudo apt install crystal
```

## Install website-generator
```
git clone git@github.com:oren/website-generator.git
cd website-generator
crystal build src/site.cr
```

## Generate the Website
```
./site ~/p/oren.github.io
```

This command creates finds all the .md files and creates .html files. If it detects a _navbar.md file above the .md file it uses it to create the navigation bar.

## Useful Linux Commands
Copy one file into multiple directories:
```
xargs -n 1 cp -v _navbar.md<<<"folder1/ folder2/ folder3/"
```

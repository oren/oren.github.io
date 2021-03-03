# Manage Tmux

## What in Tmuxinator?
[Tmuxinator](https://github.com/tmuxinator/tmuxinator) is a tool that automate the creation of multiple tmux sessions.

## Install ith
```
sudo aptitude install tmuxinator
```

## Create a new project file and open it in your editor
```
tmuxinator new dev
```

Your text editor will open with a default config. Clean, add the text bellow, and save the file.
```
name: dev
root: ~/p/site-generator

windows:
  - code:
      layout: even-horizontal
      panes:
        - vim src/main.rs
        -
  - other:
```

We created a new project and named it dev. You can as many projects as you want with different names.

## Start Tmux session
```
tmuxinator start dev
```

This command will start a new session with two windows and the first one will have a two panes. The config file is in ~/.config/tmuxinator/dev.yml. The project name is dev. You can also run this without the start argument: `tmuxinator dev`.

## List all projects

```
tmuxinator ls

tmuxinator projects:
dev      notes    interviews     website
```

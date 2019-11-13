# Configure your servers with Ansible

[Ansible](http://www.ansibleworks.com/docs/) a command line tool for configuring servers. It's similar to Puppet and Chef but it's easier to use and it can also be used for deployment.
Also, there is nothing to configure on your target servers since all it does is running some commands using ssh.

## Getting up and running in 20 seconds

### Install

```
git clone git://github.com/ansible/ansible.git
cd ansible
sudo make install
```
type `ansible` to verify you have the Ansible command line. You should see the help info.

* * *

Note: You'll need python 2.6 or greater with the following modules - pyYAML and jinja2.  
Read [here](http://www.ansibleworks.com/docs/gettingstarted.html) for your specific OS.
If you are on Debian install the following:  
`sudo aptitude install python-jinja2 python-yaml`  
`sudo aptitude install sshpass`  # for executing commands with sudo

### Setup

All you need to start using Ansible are two files:
* a text file with host names
* a yaml file with the install script

prod-hosts

```bash
[webservers]
web1.example.com
web2.example.com

[dbservers]
db1.example.com
db2.example.com
db2.example.com
```
web-server.yaml

```yaml
- hosts: web1.example.com
  sudo: yes
  tasks:

  - name: install debian packages
    apt: pkg=$item state=present update_cache=yes
    with_items:
    - curl
    - git-core
    - vim-gtk
    - xterm

  - name: add git user
    user: name=git

  - name: copy bash_profile
    template: src=templates/bash_profile dest=/home/oren/.bash_profile mode=0644
    sudo: no

  - name: clone .dotfiles repo
    git: repo=git@github.com:oren/dotfiles.git dest=/home/oren/.dotfiles
    sudo: no

  - name: run symlink-dotfiles
    command: /home/oren/.dotfiles/debian-server/bin/symlink-dotfiles
    sudo: no

  - name: clone gitolite repo
    git: repo=git://github.com/sitaramc/gitolite dest=/home/git/gitolite
    sudo_user: git

  - name: install gitolite
    command: /home/git/gitolite/install -to /home/git/bin
    sudo_user: git
```

### Run
`ansible-playbook -i prod-hosts  web-server.yaml -K`  
That's it. you'll see a nice output about each step of the installation:

```bash
TASK: [install debian packages]
TASK: [add git user]
TASK: [copy bash_profile]
TASK: [clone .dotfiles repo]
TASK: [run symlink-dotfiles]
TASK: [clone gitolite repo]
TASK: [install gitolite]

PLAY RECAP 
web1.example.com               : ok=17   changed=4    unreachable=0    failed=0
```

What are all those commands in the yaml file? Things such as `git`, `template`, `user` and `command`? Let's look at the following as an example:
```
  - name: add git user
    user: name=git
```

`-name` is just a humen-readable text that will appear in the output.
`user` is a special Ansible command for managing unix users. Here I am creating the git user.
In Ansible's terminology it's called a Module. There are many [built-in Modules](http://www.ansibleworks.com/docs/modules.html) and you can also [create you own](http://www.ansibleworks.com/docs/moduledev.html).

Never run a commad directly on your server. Just add a few lines to the yaml file and run the script again. Ansible is idempotent so you can safely run it again and again.

## Folder structure

This is how I structure my files. Read the [Best Practices]( http://www.ansibleworks.com/docs/bestpractices.html) page for more info.

```
install/
├── prod-hosts
├── stage-hosts
├── web-server.yaml
├── db-server.yaml
└── templates
    ├── bash_profile
    └── bashrc
```

## Here are some useful commands

**Display the hosts that belong to the webserver group**  
`ansible -i prod-hosts webservers --list-hosts`

output
```bash
web1.example.com
web2.example.com
```

**Display a summary of our webserver's install script**  
`ansible-playbook -i prod-hosts  web-server.yaml --list-tasks`

output
```bash
playbook: web-server.yaml

  play #1 (web1.example.com):
    install debian packages
    add git user
    copy bash_profile
    clone .dotfiles repo
    run symlink-dotfiles
    clone gitolite repo
    setup gitolite
```

**Exectue a command on one of the web servers**  
`ansible -i prod-hosts web1.example.com -a "ls -l"`

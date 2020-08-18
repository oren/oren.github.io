# Using Signal in the terminal

![signal in the terminal](https://raw.githubusercontent.com/boxdot/gurk-rs/master/screenshot.png)

[Signal](https://signal.org/en/) is a powerful, and secure messenger. It is available for mobile phones but it is also possible to use it from the terminal. It works on Mac, Windows, and Linux. Here are the instructions for Ubuntu Linux.

## Install
Install [qrencode](https://fukuchi.org/works/qrencode/)

download tar.gz file and extract it
```
./configure
make
sudo make install
sudo ldconfig
```

Install [signal-cli](https://github.com/AsamK/signal-cli)

Install [gurk](https://github.com/boxdot/gurk-rs)


## Setup
```
signal-cli link -n "laptop" | xargs -l qrencode -o /tmp/qrcode.png & while [ ! -f /tmp/qrcode.png ]; do sleep 1; done; xdg-open /tmp/qrcode.png
scan it with signal
```

Config file - ~/.gurk.toml

```
[user]
name = "Your Name"
phone_number = "+1xxxxxxxxxx"
```

## Run

```
gurk
```

## Signal-cli commands
Gurk is a wrapper on top of signal-cli. If you want, you can use signal-cli without gurk. Here are a few commands:

```
signal-cli -u +1xxxxxxxxxx receive
signal-cli -u +1xxxxxxxxxx send -m "Hi!" +1xxxxxxxxxx
signal-cli -u +1xxxxxxxxxx listDevices
signal-cli -u +1xxxxxxxxxx listContacts
```


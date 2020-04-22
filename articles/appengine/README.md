<meta property="og:title" content="Go on App Engine" />
<meta property="og:image" content="appengine-go.png" />

# Go on App Engine

![appengine](appengine-go.png)

This post is the code for the official 'Hello World' [tutorial](https://cloud.google.com/appengine/docs/flexible/go/hello-world).

Download the App Engine SDK for Go
```bash
wget https://storage.googleapis.com/appengine-sdks/featured/go_appengine_sdk_linux_amd64-1.9.36.zip
unzip go_appengine_sdk_linux_amd64-1.9.36.zip
add to .bashrc: export PATH=$PATH:$TMP/apps/go_appengine/
which goapp
```

Test the app on your laptop
```bash
git clone git@github.com:oren/appengine.git
cd appengine
goapp serve
```

Create an app on Google's dashboard and copy the app id (my app id is hello-1292)
```bash
https://console.cloud.google.com/home/dashboard
```

Deploy
```bash
appcfg.py -A hello-1292 -V v1 update .
```

Enjoy
```bash
http://hello-1292.appspot.com
```

<br/>

Resources

* My github repository with this code sample - https://github.com/oren/appengine

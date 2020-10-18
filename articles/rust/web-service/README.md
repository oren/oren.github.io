# Production Web Service in 1 minute

```
rustup install nightly
rustup default nightly
git clone https://github.com/LukeMathWalker/zero-to-production
cd chapter04
cargo build
cd ..
./target/debug/chapter04
```

Test that the service is running:
```
curl localhost:8000/health_check
```

Add email subscription
```
curl -d 'email=johndoe@gmail.com&name=John Doe' localhost:8000/subscriptions
```

## Endpoint
* GET /health_check
* POST /subscriptions

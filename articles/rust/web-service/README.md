# Production Web Service in 1 minute

Install Rust
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup install nightly
rustup default nightly
```

Download the Web Service code
```
git clone https://github.com/LukeMathWalker/zero-to-production
cd chapter04
cargo build
cd ..
```

Run the Web Service
```
./target/debug/chapter04
```

Test that the service is running:
```
curl localhost:8000/health_check
```

Add email subscription
```
curl -d 'email=johndoe@gmail.com&name=John%20Doe' localhost:8000/subscriptions
```

## Web Service API
* Ensure that the Web Service is running: GET /health_check
* Add an email subscription: POST /subscriptions

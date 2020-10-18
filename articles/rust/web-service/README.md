# Production Web Service in 1 minute

1. Install Rust
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
rustup install nightly
rustup default nightly
```

2. Download the Web Service code
```
git clone https://github.com/LukeMathWalker/zero-to-production
cd chapter04
cargo build
```

3. Setup the database
```
cargo install --version=0.1.0-beta.1 sqlx-cli --no-default-features --features postgres
sqlx database create
export DATABASE_URL=postgres://postgres:password@localhost:5432/newsletter
sqlx migrate add create_subscriptions_table
sqlx migrate run
SKIP_DOCKER=true ./scripts/init_db.sh
```

4. Create an executable for the Web Service
```
cargo build
```

5. Run the Web Service
```
../target/debug/chapter04
```

6. Test that the service is running:
```
curl localhost:8000/health_check -v
```

You should see the following:
```
=>
*   Trying 127.0.0.1...
* Connected to localhost (127.0.0.1) port 8000 (#0)
> GET /health_check HTTP/1.1
> Host: localhost:8000
> User-Agent: curl/7.47.0
> Accept: */*
>
< HTTP/1.1 200 OK
< content-length: 0
< date: Sun, 18 Oct 2020 21:48:04 GMT
<
* Connection #0 to host localhost left intact
```

7. Add email subscription
```
curl -d 'email=johndoe@gmail.com&name=John%20Doe' localhost:8000/subscriptions -v
```

You should see the following:
```
*   Trying 127.0.0.1...
* Connected to localhost (127.0.0.1) port 8000 (#0)
> POST /subscriptions HTTP/1.1
> Host: localhost:8000
> User-Agent: curl/7.47.0
> Accept: */*
> Content-Length: 41
> Content-Type: application/x-www-form-urlencoded
>
* upload completely sent off: 41 out of 41 bytes
< HTTP/1.1 200 OK
< content-length: 0
< date: Sun, 18 Oct 2020 21:44:42 GMT
<
* Connection #0 to host localhost left intact
```

And in the web service log you should see the following:
```
{"v":0,"name":"zero2prod","msg":"[SAVING NEW SUBSCRIBER DETAILS IN THE DATABASE - EVENT] INSERT INTO subscriptions (id, …; rows: 0, elapsed: 3.598ms\n\nINSERT INTO\n  subscriptions (id, email, name, subscribed_at)\nVALUES\n  ($1, $2, $3, $4)\n","level":30,"hostname":"oren","pid":24515,"time":"2020-10-18T21:40:26.190301447+00:00","log.target":"","log.module_path":"sqlx::query","name":"John Doe","email":"johndoe@gmail.com","request_id":"75932304-c9ce-4476-83ef-358443aa3e2f","request_path":"/subscriptions","client_ip_address":"127.0.0.1:38494","user_agent":"curl/7.47.0"}
```

## Web Service API
* Ensure that the Web Service is running: GET /health_check
* Add an email subscription: POST /subscriptions

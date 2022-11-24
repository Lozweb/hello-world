use warp::Filter;

#[tokio::main]
async fn main() {
    let cors = warp::cors()
        .allow_origins(vec!["http://localhost:3000", "http://localhost"])
        .allow_methods(vec!["GET", "POST", "DELETE"]);
    
    // GET /hello/warp => 200 OK with body "Hello, warp!"
    let hello = warp::path!("hello" / String)
        .map(|name| format!("Hello, {}!", name))
        .with(cors);

    warp::serve(hello)
        .run(([127, 0, 0, 1], 3030))
        .await;
}

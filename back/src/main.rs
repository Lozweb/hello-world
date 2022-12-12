use warp::Filter;

#[tokio::main]
async fn main() {
    let cors = warp::cors()
        .allow_origins(vec!["http://localhost:3000", "http://localhost"])
        .allow_methods(vec!["GET", "POST", "DELETE"]);
    
    let hello = warp::path!("hello" / String)
        .map(|name| format!("Hello, {}!", name))
        .with(cors);
    
    warp::serve(hello)
        .run(([0, 0, 0, 0], 3030))
        .await;
}

FROM rust:1.65 AS builder

RUN rustup target add x86_64-unknown-linux-musl
RUN apt update && apt install -y musl-tools musl-dev
RUN update-ca-certificates

WORKDIR /app

RUN USER=root cargo new --bin back

WORKDIR /app/back

COPY Cargo.* ./

RUN cargo build --target x86_64-unknown-linux-musl --release

COPY src/ ./src/

RUN touch ./src/main.rs

RUN cargo build --target x86_64-unknown-linux-musl --release

FROM scratch

WORKDIR /app

COPY --from=builder /app/back/target/x86_64-unknown-linux-musl/release/back ./

EXPOSE 3030

CMD ["./back"]
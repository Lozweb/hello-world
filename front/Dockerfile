FROM node:16-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY tsconfig.json ./
COPY src/ ./src/
COPY public/ ./public/

FROM node:16-alpine

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/build/ ./build/

RUN npm run build

EXPOSE 3000

CMD ["serve", "-s", "build"]
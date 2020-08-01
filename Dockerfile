FROM node:lts-alpine as builder

WORKDIR /app

COPY nginx.example.conf ./nginx.conf
COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build --prod

FROM nginx:stable-alpine

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist       /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
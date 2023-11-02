# ビルドステージ
FROM node:20 as build-stage
WORKDIR /src
COPY ./src /src

RUN apt-get update && \
    apt-get install -y vim build-essential git

RUN npm update -g npm && \
    npm install && \
    npm run build

# 実行ステージ
FROM nginx:1.25 as production-stage

COPY --from=build-stage /src/build/ /var/www/html/build
COPY ./dockerfile/nginx/config/conf.d /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
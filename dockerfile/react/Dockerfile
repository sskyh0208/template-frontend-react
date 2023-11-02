FROM node:20
WORKDIR /var/www/html
COPY ./src /var/www/html

RUN apt-get update && \
    apt-get install -y vim build-essential git

RUN npm update -g npm
RUN chmod +x /usr/local/bin/*
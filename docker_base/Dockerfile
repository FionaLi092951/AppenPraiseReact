FROM ubuntu:18.04

COPY ./sources.list /etc/apt/sources.list

RUN echo "Asia/Shanghai" > /etc/timezone && \
    apt-get update && \
    apt-get install -y gnupg2 && \
    apt-key adv --recv-keys --keyserver keyserver.ubuntu.com ABF5BD827BD9BF62 && \
    echo "deb http://nginx.org/packages/ubuntu/ bionic nginx" >> /etc/apt/sources.list && \
    apt-get install -y sudo wget && \
    apt-get update && \
    apt-get upgrade -y && \
    wget -qO- https://deb.nodesource.com/setup_10.x | sudo -E bash - && \
    sudo apt-get install -y nodejs && \
    apt-get install -y vim curl nginx default-jdk && \
    npm install webpack -g && \
    npm install webpack-cli -g && \
    sudo apt-get install -f && \
    ln -sf /dev/stderr /var/log/nginx/error.log && \
    ln -sf /dev/stdout /var/log/nginx/access.log

#!/bin/bash
REPO=harbor.emotibot.com/bfop
CONTAINER=appen_app
TAG=base
DOCKER_IMAGE=$REPO/$CONTAINER:$TAG

echo $DOCKER_IMAGE

docker rm -f utest

docker run --name utest --restart always -p 8201:80 -d $DOCKER_IMAGE nginx -g 'daemon off;'

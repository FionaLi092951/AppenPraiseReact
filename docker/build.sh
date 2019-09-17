#!/bin/bash
REPO=harbor.emotibot.com/bfop
CONTAINER=appen_app
TAG=$(git rev-parse --short HEAD)_$(date '+%Y%m%d%H%M%S')
DOCKER_IMAGE=$REPO/$CONTAINER:$TAG

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
BUILDROOT=$DIR/../

cd $BUILDROOT

# Build docker
cmd="docker build -t $DOCKER_IMAGE -f $DIR/DockerFile $BUILDROOT"
echo $cmd
eval $cmd

cmd="docker push $DOCKER_IMAGE"
echo $cmd
#eval $cmd

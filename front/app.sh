#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Usage: ./app.sh [start|stop]"
    exit 1
fi

if [ $1 == "start" ]; then
    sudo docker build -t ecoinfo .

    if [ $? -eq 0 ]; then
        sudo docker run -d -p 8080:8080 ecoinfo
        exit 0
    else
        echo "Error building docker image"
        exit 1
    fi
fi

if [ $1 == "stop" ]; then
    sudo docker stop $(sudo docker ps -a -q)
    sudo docker rm $(sudo docker ps -a -q)
fi
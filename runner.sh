#!/bin/bash
echo "removing old containers"
docker-compose down
echo "Building new container"
docker-compose build
echo "Running new container, interactive mode"
docker-compose up
#!/bin/bash
echo "Building new image"
docker build -t blokje5/cryptocrawler .
echo "Running new container, interactive mode"
docker run -t blokje5/cryptocrawler
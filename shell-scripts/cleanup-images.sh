#!/usr/bin/env bash

# remove tag of old image
gcloud container images untag $IMAGE_NAME:old

# update latest image to old image
gcloud container images add-tag $FULL_IMAGE_NAME $IMAGE_NAME:old

# delete all untagged images
gcloud container images delete $IMAGE_NAME
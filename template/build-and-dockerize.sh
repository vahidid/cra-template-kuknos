#!/bin/bash

export DOCKER_BUILDKIT=1

find ./dist -type d -print0 | xargs -0 chmod 0755
find ./dist -type f -print0 | xargs -0 chmod 0644
export IMAGE_NAME=kuknos/front/app-name:$1
docker build . -t $IMAGE_NAME --build-arg build_mode=${2:-development}
docker tag $IMAGE_NAME harbor.kuknos.ir/$IMAGE_NAME
docker push harbor.kuknos.ir/$IMAGE_NAME
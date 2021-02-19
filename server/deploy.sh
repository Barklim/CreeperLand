#!/bin/bash

echo What should the version be?
read VERSION

docker build -t znzvrl1/creeperland:$VERSION .
docker push znzvrl1/creeperland:$VERSION
ssh root@128.199.59.180 "docker pull znzvrl1/creeperland:$VERSION && docker tag znzvrl1/creeperland:$VERSION dokku/api:$VERSION && dokku deploy api $VERSION" 
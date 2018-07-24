FROM node:9-alpine

LABEL maintainer="Carlos Contreras <carloscontreras0420@gmail.com>"

ENV app="/app"

WORKDIR $app

COPY . $app
# baseimage is node.js 12.18.2
FROM node:12.18.2

# apt-get update and install
RUN apt-get update -y && apt-get upgrade -y
RUN apt-get install -y \
    sudo \
    nano

# create app directory
WORKDIR /app

# copy files from client to container
COPY . .

# install npm packages
RUN sudo yarn install
#!/bin/bash

# install dependencies
apt-get update -y
apt-get install curl -y

apt-get remove npm nodejs -y

curl -sL https://deb.nodesource.com/setup_15.x | bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

apt-get update -y
apt-get install nodejs yarn nginx -y

# docker hacks
mv ./node_modules ./node_modules.tmp
mv ./node_modules.tmp ./node_modules

# install node dependencies
yarn -y

# configure nginx
sed -i '1idaemon off;' /etc/nginx/nginx.conf
cp nginx.conf /etc/nginx/sites-available/default
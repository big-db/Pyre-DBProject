#!/bin/bash

# install dependencies
echo "Installing dependencies ..."
apt-get -qq update -y
apt-get -qq install curl -y

apt-get -qq remove npm nodejs -y

curl -sL https://deb.nodesource.com/setup_15.x | bash -
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

apt-get -qq update -y
apt-get -qq install nodejs yarn nginx -y

# docker hacks
mv ./node_modules ./node_modules.tmp
mv ./node_modules.tmp ./node_modules

# install node dependencies
echo "Installing node dependencies ..."
yarn --silent

# configure nginx
echo "Setting nginx configs ..."
sed -i '1idaemon off;' /etc/nginx/nginx.conf
cp nginx.conf /etc/nginx/sites-available/default
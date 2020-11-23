#!/bin/bash

echo "Loading Configs ..."
node loadConfig.js

echo "Building App ..."
yarn build

cp -r build /app

echo "Starting ..."
nginx

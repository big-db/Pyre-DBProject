#!/bin/bash

node loadConfig.js
yarn build

cp -r build /app

nginx

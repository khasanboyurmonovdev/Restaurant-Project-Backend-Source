#!/bin/bash

#PRODUCTION
git reset --hard
git checkout master
git pull origin master

npm install
npm run build
pm2 start process.config.js --env production

#DEVELOPMENT
# git reset --hard
#git checkout develop
#git pull origin develop

#npm install
#pm2 start "npm run start:dev" --name=BURAK


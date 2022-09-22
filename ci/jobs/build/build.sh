#!/bin/sh
set -o errexit
BASEDIR=$(dirname "$0")"/.."
cd "$BASEDIR"
export NPM_VERSION=$(npm -version)
export CHROME_BIN= /usr/bin/google-chrome
echo "NPM version=$NPM_VERSION"
npm install
npm run lint || exit 1
npm run test:ci || exit 1
npm run build:prod

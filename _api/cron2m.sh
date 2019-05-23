#!/bin/bash

PATH=$PATH:/usr/local/bin

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
REPO_PATH=$DIR/../


if true; then
  cd $REPO_PATH
  git pull
fi

if false; then
  cd $REPO_PATH
  bundle exec jekyll build
fi

if true; then
  cd "$REPO_PATH/_api"
  ./sync-mongo.sh
fi

if false; then
  cd "$REPO_PATH/_api"
  ./email-case.sh
fi

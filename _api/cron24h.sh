#!/bin/bash

PATH=$PATH:/usr/local/bin

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
REPO_PATH=$DIR/../


if true; then
  echo "GEN_SITEMAP......"
fi

if false; then
  echo "SEND_REPORT......"
fi

if false; then
  echo "EXPIRE_CASE......"
  cd "$REPO_PATH/_api"
  ./expire-case.sh
fi

#!/bin/bash
EXPECTED_ARGS=2
E_BADARGS=65
if [ $# -ne $EXPECTED_ARGS ]
then
  echo "Usage: $0 STATUS FILENAME(relative path in git repo)"
  echo "E.g.: $0 M test.md "
  exit $E_BADARGS
fi
STATUS=$1
NAME=$2


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

source "$DIR/sync-mongo.config"
REPO_PATH=$DIR/../
UPDATE_URL=$BASE_URL/command/cron-synch


if [[ $NAME =~ ^_app\/.+$ ]]; then
    continue
fi

if [[ $NAME =~ \.(css|js|svg|png|jpg|jpeg|gif|ttf|scss|tpl|inc)$ ]]; then
    continue
fi

#Get file commit id and date
COMMIT_INFO=$(cd $REPO_PATH; git log -n 1 --pretty=format:"%H %ct" "$NAME")

ID_TIMESTAMP=($COMMIT_INFO)
ID=${ID_TIMESTAMP[0]}
TIMESTAMP=${ID_TIMESTAMP[1]}

curl -k -H "app-id: $APPID" \
     -H "Content-Type: application/json" \
     -d '{"secret":"'$API_SECRET'", "item":"'"$NAME"'", "ref":"'$ID'", "status":"'$STATUS'", "timestamp":"'$TIMESTAMP'"}' \
     -X PUT $UPDATE_URL

#!/bin/bash
export JEKYLL_VERSION=3.5
set -x
IP=`ifconfig eth0 | sed -En 's/127.0.0.1//;s/.*inet (addr:)?(([0-9]*\.){3}[0-9]*).*/\2/p'`
nohup docker run --name=oicr-events-trc-preview -e VIRTUAL_HOST=oicr-events-trc-preview.qingda.vm --rm -v $(pwd):/usr/src/app -p 4567:4567 jekyll:docker bash -c 'cd /usr/src/app/_preview; sudo bundle update; ruby index.rb -o 0.0.0.0 -p 4567' > ../logs/oicr-events-trc-preview.log

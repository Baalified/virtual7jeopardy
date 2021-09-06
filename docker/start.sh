#!/bin/bash

cd /opt/jeopardy/virtual7jeopardy/gameserver/

if [[ ! -z "${INITDB}" && ! -f "db/games" ]]; then
    echo "Initializing with db_initialize_${INITDB}.js"
    node db_initialize_${INITDB}.js
fi

node server.js

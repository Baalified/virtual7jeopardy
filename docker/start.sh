#!/bin/bash

cd /opt/jeopardy/virtual7jeopardy/gameserver/

if [[ ! -z "${INITDB}" && ! -f "db/games" ]]; then
    node db_initialize_${INITDB}.js
fi

node server.js

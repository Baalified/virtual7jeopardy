FROM node:latest

RUN apt-get update && apt-get -y install git && \
    mkdir -p /opt/jeopardy && cd /opt/jeopardy && git clone https://github.com/Baalified/virtual7jeopardy.git && \
    cd virtual7jeopardy/gameserver && npm install

COPY start.sh /opt/jeopardy/start.sh

CMD ["/opt/jeopardy/start.sh"]

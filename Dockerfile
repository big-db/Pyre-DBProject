FROM ubuntu:16.04
WORKDIR /opt/deploy

COPY . . 

RUN ./setup.sh

# CMD ./run.sh

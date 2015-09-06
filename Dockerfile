# This image will be based on the oficial nodejs docker image
FROM node:latest

# Set in what directory commands will run
WORKDIR /home/cjcraig

# Put all our code inside that directory that lives in the container
ADD . /home/cjcraig

# Install dependencies
RUN \
    npm install -g bower && \
    npm install && \
    bower install --config.interactive=false --allow-root

# Tell Docker we are going to use this port
EXPOSE 9001

# The command to run our app when the container is run
CMD ["node", "server/app.js"]
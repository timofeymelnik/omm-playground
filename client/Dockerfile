FROM node:10
RUN npm i -g @vue/cli
RUN mkdir -p /client
COPY package*.json /client/
RUN chown -R node: /client
USER node
WORKDIR /client
RUN npm i
COPY . .
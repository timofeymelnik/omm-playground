FROM node:10
RUN npm i -g nodemon
RUN mkdir -p /api
COPY package*.json /api/
WORKDIR /api
RUN npm i
COPY . .
CMD ["nodemon", "./server.js"]
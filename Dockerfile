FROM node:15.14.0

RUN mkdir -p /usr/src/node-pracs
WORKDIR /usr/src/node-pracs

COPY package.json /usr/src/node-pracs/

RUN npm install --verbose
RUN npm install -g nodemon

COPY . /usr/src/node-pracs

EXPOSE 2525

RUN npm run

CMD [ "npm", "run", "dev" ]
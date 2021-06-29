FROM node:15.14.0

RUN mkdir -p /usr/src/mongo-pracs
WORKDIR /usr/src/mongo-pracs

COPY package.json /usr/src/mongo-pracs/

RUN npm install --verbose
RUN npm install -g nodemon

COPY . /usr/src/mongo-pracs

EXPOSE 2525

CMD [ "npm", "run", "dev" ]

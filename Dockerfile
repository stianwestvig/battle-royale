FROM node:wheezy
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /app
WORKDIR /app
COPY . /app
RUN npm install yarn -g
RUN yarn install

EXPOSE 3000
CMD npm start
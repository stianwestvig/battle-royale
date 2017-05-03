FROM node:wheezy
ENV NPM_CONFIG_LOGLEVEL warn

RUN mkdir -p /app
WORKDIR /app
COPY . /app

RUN curl -o- -L https://yarnpkg.com/install.sh | bash
RUN $HOME/.yarn/bin/yarn install

EXPOSE 3000
CMD npm start
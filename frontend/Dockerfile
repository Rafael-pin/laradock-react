FROM node:13-alpine

WORKDIR /app

ENV PATH /node_modules/.bin:$PATH

COPY package.json frontend/package.json

RUN npm install --silent
RUN npm install react-scripts@3.3.1 -g --silent

CMD ["npm", "start"]
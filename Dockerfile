FROM node:22-alpine3.18

WORKDIR /usr/src/app

COPY nodeapp/package*.json ./

RUN npm install

COPY nodeapp/ ./

EXPOSE 3000

CMD ["node", "index.js"]
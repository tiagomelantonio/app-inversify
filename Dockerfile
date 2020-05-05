FROM node:12.16.1-alpine

WORKDIR /app

COPY . .

RUN npm set strict-ssl false

RUN npm i

RUN npm run build

EXPOSE 9090

CMD [ "npm", "run", "start" ]

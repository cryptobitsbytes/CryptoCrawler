FROM node:boron

COPY package.json .

RUN npm install

COPY . .

ENV NODE_ENV=development
ENV MONGODB_HOST=mongodb
ENV MONGODB_PORT=27017

EXPOSE 9229

CMD [ "npm", "start" ]



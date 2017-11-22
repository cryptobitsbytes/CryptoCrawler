FROM node:boron

COPY package.json .

RUN npm install

COPY . .

ENV GCLOUD_ID=arctic-operand-181515
ENV NODE_ENV=development
ENV MONGODB_HOST=mongodb
ENV MONGODB_PORT=27017

EXPOSE 9229

CMD [ "npm", "start" ]



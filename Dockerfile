FROM node:boron

COPY package.json .

RUN npm install

COPY . .

ENV GCLOUD_ID=arctic-operand-181515
ENV NODE_ENV=development

EXPOSE 9229

CMD [ "npm", "start" ]



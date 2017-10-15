FROM node:boron

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]



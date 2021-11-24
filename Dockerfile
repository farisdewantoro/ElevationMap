FROM node:16.13.0 as build
WORKDIR /src
COPY package.json .
RUN npm install 
COPY . .
# RUN npx sequelize-cli db:seed:all --env production
RUN cd client && npm install && npm run build
COPY ./client ./client
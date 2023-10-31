FROM node:18-alpine as build-stage

RUN mkdir /usr/app

COPY . /usr/app

WORKDIR /usr/app

RUN npm install

ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm run build

FROM nginxinc/nginx-unprivileged 

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build-stage /usr/app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]
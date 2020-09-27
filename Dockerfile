FROM node:12.18.3 as build-deps

COPY ./src/project /var/www/html

WORKDIR /var/www/html

RUN npm install
RUN npm run build --env=prod -- --output-path=./dist/out --configuration production

FROM nginx:latest
COPY --from=build-deps /var/www/html/dist/out /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


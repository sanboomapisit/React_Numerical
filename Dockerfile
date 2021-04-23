FROM node:12.18-alpine as build

WORKDIR /wabpage
COPY package.json ./
RUN npm install
COPY . ./

RUN npm run build

FROM nginx:1.16.0-alpine
COPY --from=build /wabpage/build /usr/share/nginx/html
EXPOSE 80
CMD [ " nginx","-g","daemon off;"]
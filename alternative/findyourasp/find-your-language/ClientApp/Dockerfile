FROM node:14-alpine
WORKDIR /src
COPY package.json package-lock.json /src/
ENV NODE_ENV=production
RUN npm install --production
COPY . /src
EXPOSE 80
EXPOSE 8080
RUN npm run build
COPY . /src
CMD ["serve", "-s", "build"]

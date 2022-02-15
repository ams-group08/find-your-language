FROM node:14-alpine
WORKDIR /src
COPY package.json package-lock.json /src/
ENV NODE_ENV=production
RUN npm install --production
COPY . /src
EXPOSE 44444
EXPOSE 8080
CMD ["npm", "start"]
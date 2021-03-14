FROM node:alpine
WORKDIR '/app'

COPY package.json .
RUN npm install
RUN npm install node-sass
RUN npm install react-icons --save
RUN npm install --save react-router-dom
RUN npm install react-tooltip
COPY . .
CMD ["npm","start"]
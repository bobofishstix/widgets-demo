FROM node:12.18.1
WORKDIR /widgets
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
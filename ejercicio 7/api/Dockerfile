FROM node:18-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --omit=dev || npm install --only=production
COPY app.js ./
EXPOSE 3000
CMD ["node","app.js"]

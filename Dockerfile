# Basic image
FROM node:alpine

WORKDIR /usr/app

# Install dependencies
COPY ./ ./
RUN npm install

# Default command
CMD ["npm", "start"]
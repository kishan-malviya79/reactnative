# Use an official Node runtime as a parent image
FROM node:14.17.5-alpine3.14

# Set working directory in the container
WORKDIR /app

# Install required dependencies for React Native
RUN apk update && \
    apk add --no-cache \
    bash \
    git \
    openssh \
    python3 \
    build-base

# Install React Native CLI globally
RUN npm install -g react-native-cli

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install npm dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose the Metro Bundler port (required for React Native)
EXPOSE 8081

# Start React Native packager
CMD ["npm", "start"]
    
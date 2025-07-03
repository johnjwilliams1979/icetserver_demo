# Dockerfile

# Use the official Node.js LTS image

FROM node:20


# Create and set the app directory

WORKDIR /usr/src/app


# Copy package.json and package-lock.json

COPY package*.json ./


# Install app dependencies

RUN npm install


# Copy the rest of the application code

COPY *.js .


# Expose the port your app runs on (if applicable)

EXPOSE 8080


# Run the application using the “start” script in package.json

CMD ["npm", "start"]
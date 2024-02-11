# adds node as the base image
FROM node:20-alpine

# creates a seperate directory
WORKDIR /app

# copies the packages from our project to the new directory
COPY package*.json ./

# runs the command npm install
# to install all dependencies
RUN npm install

# copies other files
COPY . .

# exposes it to port 5173
EXPOSE 5173

# runs command "npm run dev" to start the app
CMD npm run dev

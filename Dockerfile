# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variables for Chrome and Firefox binary paths
ENV CHROME_BIN=/usr/bin/chromium-browser
ENV FIREFOX_BIN=/usr/bin/firefox

# Run WebdriverIO tests
CMD ["npx", "wdio", "run", "wdio.conf.js"]

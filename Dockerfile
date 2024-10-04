# Use the official Node.js image as a base
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Install wdio-html-nice-reporter
RUN npm install wdio-html-nice-reporter --save-dev

# Install Chrome and ChromeDriver
RUN apt-get update && \
    apt-get install -y wget gnupg2 && \
    wget -q -O - https://dl.google.com/linux/linux_signing_key.pub | apt-key add - && \
    echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list && \
    apt-get update && \
    apt-get install -y google-chrome-stable && \
    npm install chromedriver --save-dev

# Copy the rest of your application and test files
COPY . .

# Command to run your tests
CMD ["npx", "wdio", "wdio.conf.js"]

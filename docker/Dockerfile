FROM node:14

# Set the working directory
WORKDIR /app

# Install PAC CLI
RUN npm install -g pac

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set the entry point for the container
ENTRYPOINT ["./scripts/entrypoint.sh"]
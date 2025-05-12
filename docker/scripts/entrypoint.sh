#!/bin/bash

# Navigate to the project directory
cd /app

# Install project dependencies
npm install

# Execute the PAC CLI command or start the application
exec "$@"
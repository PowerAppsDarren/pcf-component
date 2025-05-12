# README for Power Apps PCF Component Docker Environment

This project provides a Docker environment for developing and running Power Apps PCF (PowerApps Component Framework) components. It includes all necessary tools such as Node.js, npm, and the PAC CLI.

## Prerequisites

Before you begin, ensure you have Docker and Docker Compose installed on your machine.

## Project Structure

- **Dockerfile**: Contains instructions to build the Docker image.
- **.dockerignore**: Specifies files and directories to ignore during the Docker build process.
- **docker-compose.yml**: Defines services, networks, and volumes for the Docker application.
- **scripts/entrypoint.sh**: Script executed when the Docker container starts.
- **.env**: Contains environment variables for configuration.
- **README.md**: Documentation for the project.

## Building the Docker Image

To build the Docker image, navigate to the project directory and run:

```bash
docker build -t pcf-component .
```

## Running the Docker Container

To run the Docker container, use Docker Compose:

```bash
docker-compose up
```

This command will start the services defined in the `docker-compose.yml` file.

## Accessing the Application

Once the container is running, you can access the application at `http://localhost:3000` (or the port specified in your `docker-compose.yml`).

## Additional Information

For more details on using the PAC CLI, refer to the official documentation at [PAC CLI Documentation](https://docs.microsoft.com/en-us/powerapps/developer/component-framework/overview).

Feel free to contribute to this project by submitting issues or pull requests.
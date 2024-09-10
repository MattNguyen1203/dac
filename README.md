First, run the development server:

```bash
# Create a network, which allows containers to communicate
# with each other, by using their container name as a hostname
docker network create dacnetwork

# Build production
docker compose -f docker-compose.yml build

# Up dev
docker compose -f docker-compose.yml up


docker pull docker.io/okhubvn/dac:latest && docker stop dac && docker rm dac && docker run -d -p 3000:3000 --name dac docker.io/okhubvn/dac:latest && docker image prune

```

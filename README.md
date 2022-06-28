# RickAndMorty

Simple Rick And Morty characters explorator.

[![Docker](https://img.shields.io/badge/Docker-v20.10-yellowgreen.svg)](https://www.docker.com/)
[![Docker-Compose](https://img.shields.io/badge/DockerCompose-v1.29-blueviolet.svg)](https://www.docker.com/)

## Project Setup

```sh
make start
```

If your local user is any other than 1000:1000, you'll have to change the values in the .env file. 
```sh
make setup

# Example if you are 1001:1002
sed -i -E 's/(FIXUID)=.*/\1=1001/g' .env
sed -i -E 's/(FIXGID)=.*/\1=1002/g' .env

make start
```

### Type-Check, Compile and Minify for Production

```sh
make build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
make tests.unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
make lint
```

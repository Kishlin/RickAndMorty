include .env
-include .env.local

current-dir := $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

# Env
.env:
	@cp .env.dist .env


.PHONY: clean setup containers start tests.unit tests.e2e help

clean:
	@if [ -f "./docker-compose.yaml" ]; then \
		docker-compose down; \
	fi;
	@rm -rf .env node_modules

setup: .env

containers: setup
	@echo "Starting services"
	@docker-compose up -d --remove-orphans

start: containers
	@echo "Services should be running."
	@echo "    Frontend: http://localhost:3000/"
	@echo "Ports may differ if overridden in the .env file."
	@echo "Run tests: \`make tests\`"

stop:
	@echo "Stopping services"
	@docker-compose stop

tests:
	@docker-compose exec frontend npm run test:unit

lint:
	@docker-compose exec frontend npm run lint

help:
	@echo "Run make start"

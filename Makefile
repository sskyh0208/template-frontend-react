init:
	@if [ ! -d "src" ]; then \
		mkdir src; \
		make build; \
		make start; \
		make create-new-app; \
	else \
		echo "src directory already exists. Initialization is skipped."; \
	fi
build:
	docker compose build
start:
	docker compose up -d
stop:
	docker compose down
destroy:
	docker compose down --rmi all --volumes --remove-orphans
create-new-app:
	@if [ -d "src" ] && [ -z "$(ls -A src)" ]; then \
		docker compose exec app_dev sh -c "npx create-react-app . --force"; \
	else \
		echo "src directory is not empty or does not exist. Application creation is skipped."; \
	fi
npm-install:
	docker compose exec app_dev sh -c "npm install"
npm-start:
	docker compose exec app_dev sh -c "npm start"
npm-build:
	docker compose exec app_dev sh -c "npm run build"
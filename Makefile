all:

node:
	docker create --name web-ui -p 8080:8080 -v $$(pwd):/web-ui -w /web-ui node:latest /bin/bash || true
	docker start web-ui || true
	docker exec -it -w /web-ui web-ui /bin/bash

prettier p:
	prettier --write --tab-width=4 ./src

image:
	docker build -t web-ui:latest .

prepare-lint:
	npm i -g eslint

	npm install --save-dev \
		prettier-eslint \
		babel-eslint \
		eslint-config-airbnb-base \
		eslint-config-prettier \
		eslint-plugin-import \
		eslint-plugin-vue

	eslint ./src

lint:
	eslint ./src

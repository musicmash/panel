all:

node:
	docker run -it --name web-ui --rm -p 8080:8080 -v $$(pwd):/web-ui -w /web-ui node:latest /bin/bash

prettier p:
	prettier --write --tab-width=4 ./src

image:
	docker build -t web-ui:latest .

format = "\e[1mmake %-30s\e[m %-50s \n"

all:
	@printf $(format) "install" "Install dependencies"
	@printf $(format) "run" "Run it"

install:
	curl https://install.meteor.com/ | sh

run:
	meteor


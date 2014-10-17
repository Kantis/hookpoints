SHELL=C:/Windows/System32/cmd.exe

test:
	"node_modules/.bin/mocha" --reporter spec 

.PHONY: test
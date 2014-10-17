Hookpoints
=========

Small utility library for creating, subscribing to, and triggering hook points.

## Installation
	npm install hookpoitns

## Usage
	var helloWorld = function() {
		console.log("Hello, World!");
	};

	var hookpoints = require('hookpoints');

	hookpoints.register("NameOfHookPoint");
	hookpoints.subscribe("NameOfHookPoint", helloWorld);
	hookpoints.trigger("NameOfHookPoint");

## Tests
	npm test

## Contributing
	Fork and open a pull request on github

## Release History

* 0.1.0 Initial release
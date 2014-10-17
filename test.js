var hooks = require('./meanhooks');

hooks.registerHookPoint("setupComplete");

var helloWorld = function(params) {
	console.log("Hello " + params.user);
}

hooks.registerHookListener("setupComplete", helloWorld);
hooks.triggerHookPoint("setupComplete", {user: "Emil"})
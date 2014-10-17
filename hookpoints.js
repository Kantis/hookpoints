var registeredHooks = [];

exports.register = function(hookName) {
	if (registeredHooks.indexOf(hookName) > -1) {
		throw "Hook point already exists!";
	}

	var hook = {};
	hook.name = hookName;
	hook.subscribers = [];
	registeredHooks[hookName] = hook;
}

exports.trigger = function(hookName, params) {
	if (registeredHooks[hookName] === undefined) {
		throw "Hook point does not exist!";
	}

	var subscribers = registeredHooks[hookName].subscribers;

	for (var i = subscribers.length - 1; i >= 0; i--) {
		subscribers[i](params);
	};
}

exports.subscribe = function(hookName, callback) {
	if (registeredHooks[hookName] === undefined) {
		throw "Hook point does not exist!";
	}

	registeredHooks[hookName].subscribers.push(callback);
}
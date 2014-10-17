var registeredHooks = [];

exports.registerHookPoint = function(hookName) {
	if (registeredHooks.indexOf(hookName) > -1) {
		throw "Hook point already exists!";
	}

	var hook = {};
	hook.name = hookName;
	hook.listeners = [];
	registeredHooks[hookName] = hook;
}

exports.triggerHookPoint = function(hookName, params) {
	if (registeredHooks[hookName] === undefined) {
		throw "Hook point does not exist!";
	}

	var listeners = registeredHooks[hookName].listeners;

	for (var i = listeners.length - 1; i >= 0; i--) {
		listeners[i](params);
	};
}

exports.registerHookListener = function(hookName, callback) {
	if (registeredHooks[hookName] === undefined) {
		throw "Hook point does not exist!";
	}

	registeredHooks[hookName].listeners.push(callback);
}
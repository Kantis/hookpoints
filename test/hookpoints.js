var assert = require('chai').assert,
hookpoints = require('../hookpoints'),
registerHookPoint = hookpoints.registerHookPoint,
registerHookListener = hookpoints.registerHookListener,
triggerHookPoint = hookpoints.triggerHookPoint;

describe('#triggerHookPoint', function() {
	it('Triggers a hook point properly', function() {
		var myVar = 0;

		var incrementMyVar = function(params) {
			myVar++;
		}

		registerHookPoint("testPoint");
		registerHookListener("testPoint", incrementMyVar);
		triggerHookPoint("testPoint");

		assert.equal(myVar, 1);
	});

	it('Can trigger multiple times', function() {
		var myVar = 0;

		var incrementMyVar = function(params) {
			myVar++;
		}

		registerHookPoint("testPoint");
		registerHookListener("testPoint", incrementMyVar);

		for (var i = 10000; i > 0; i--) {
			triggerHookPoint("testPoint");
		};

		assert.equal(myVar, 10000);
	});

	it('Supports parameters', function() {
		var myVar = 0;

		var incrementMyVar = function(params) {
			myVar += params.amount;
		}

		registerHookPoint("testPoint");
		registerHookListener("testPoint", incrementMyVar);
		triggerHookPoint("testPoint", {amount: 100});

		assert.equal(myVar, 100);

	});
})
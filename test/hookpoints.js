var assert = require('chai').assert,
hookpoints = require('../hookpoints'),
register = hookpoints.register,
subscribe = hookpoints.subscribe,
trigger = hookpoints.trigger;

describe('#trigger', function() {
	it('Triggers a hook point properly', function() {
		var myVar = 0;

		var incrementMyVar = function(params) {
			myVar++;
		}

		register("testPoint");
		subscribe("testPoint", incrementMyVar);
		trigger("testPoint");

		assert.equal(myVar, 1);
	});

	it('Can trigger multiple times', function() {
		var myVar = 0;

		var incrementMyVar = function(params) {
			myVar++;
		}

		register("testPoint");
		subscribe("testPoint", incrementMyVar);

		for (var i = 10000; i > 0; i--) {
			trigger("testPoint");
		};

		assert.equal(myVar, 10000);
	});

	it('Supports parameters', function() {
		var myVar = 0;

		var incrementMyVar = function(params) {
			myVar += params.amount;
		}

		register("testPoint");
		subscribe("testPoint", incrementMyVar);
		trigger("testPoint", {amount: 100});

		assert.equal(myVar, 100);

	});
})
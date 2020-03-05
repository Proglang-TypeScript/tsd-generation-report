// from https://github.com/umdjs/umd/blob/master/templates/returnExports.js

// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

    function Greeter(message) {
	if (!(this instanceof Greeter)) {
	    return new Greeter(message);
	}
	this.greeting = message;
	this.verbose = false;
	this.color = "#ff0000";
    }

    Greeter.prototype.log = function (logSetting) {
        if (logSetting.hasOwnProperty('verbose')) {
            this.verbose = logSetting.verbose;
        }
    };

    Greeter.prototype.alert = function (alertSetting) {
        var modal = alertSetting.modal;
        var title = this.greeting;
        var color = this.color;
        if (alertSetting.hasOwnProperty ('title')) {
            title = alertSetting.title;
        }
        if (alertSetting.hasOwnProperty ('color')) {
            color = alertSetting.color;
        }

        var sep = modal ? " || " : " -- ";
        console.log(color + sep + title + sep);
    }
    
    // Just return a value to define the module export.
    // This example returns an object, but the module
    // can return a function as the exported value.
    return Greeter;
}));

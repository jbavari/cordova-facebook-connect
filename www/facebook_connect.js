var cordova = require('cordova'),
    exec = require('cordova/exec');

var FacebookConnect = function() {
        this.options = {};
};

FacebookConnect.prototype = {
    /*
        Add your plugin methods here
    */
    coolMethod: function( args, success, error ) {
        cordova.exec( success, error, "FacebookConnect", "coolMethod", args );
    }
};

var FacebookConnectInstance = new FacebookConnect();

module.exports = FacebookConnectInstance;

var cordova = window.cordova || window.Cordova;
var exec = require('cordova/exec');

var FacebookConnect = function() {
        this.options = {};
};

//Figure out if we are in cordova or not.

FacebookConnect.prototype.init = function(appId, failureCallback) {
  FB.init({ appId: appId, status: true, xfbml: true, version: 'v2.0'});

  //If hybrid app (native bridge)
  if(cordova) {
    exec(function() {
      console.log("We init'd the FB sdk");
    }, (failureCallback ? failureCallback : null), 'FacebookConnect', 'init', [appId]);
  }
}

FacebookConnect.prototype.login = function(params, successCallback, failureCallback) {
  params = params || { scope: '' };
  exec(function(e) { // login
      if (e.authResponse && e.authResponse.expiresIn) {
        var expirationTime = e.authResponse.expiresIn === 0
        ? 0 
        : (new Date()).getTime() + e.authResponse.expiresIn * 1000;
        e.authResponse.expirationTime = expirationTime; 
      }
      if (successCallback) successCallback(e);
  }, (failureCallback?failureCallback:null), 'FacebookConnect', 'login', params.scope.split(',') );
}

FacebookConnect.prototype.getLoginStatus = function(successCallback, failureCallback) {

  if(cordova) {
    exec(function(e) {    
      if (successCallback) successCallback(e);
    }, (failureCallback?failureCallback:null), 'FacebookConnect', 'getLoginStatus', []);
  } else {

  }
}

FacebookConnect.prototype.logout = function logout(successCallback, failureCallback) {
  if(cordova) {
    exec(function(e) {
      if(successCallback) successCallback(e);
    }, (failureCallback ? failureCallback : null), 'FacebookConnect', 'logout', []);
  } else {

  }
}


//   dialog: function(params, cb, fail) {
//     exec(function(e) { // login
//       if (cb) cb(e);
//                   }, (fail?fail:null), 'FacebookConnect', 'showDialog', [params] );
//   }
// };

var FacebookConnectInstance = new FacebookConnect();

module.exports = FacebookConnectInstance;
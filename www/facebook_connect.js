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

// FacebookConnect.prototype = {
//   init: function(apiKey, fail) {
//     // create the fb-root element if it doesn't exist
//     if (!document.getElementById('fb-root')) {
//       var elem = document.createElement('div');
//       elem.id = 'fb-root';
//       document.body.appendChild(elem);
//     }
//     var xmlhttp = new XMLHttpRequest();
//     xmlhttp.onload=function(){console.log("Endpoint saved "+ this.responseText);}
//     xmlhttp.open("POST", "https://www.facebook.com/impression.php", true);
//     xmlhttp.send('plugin=featured_resources&payload={"resource": "adobe_phonegap", "appid": "'+apiKey+'", "version": "3.0.0" }');
    
//     exec(function() {
//     var authResponse = JSON.parse(localStorage.getItem('cdv_fb_session') || '{"expiresIn":0}');
//     if (authResponse && authResponse.expirationTime) { 
//       var nowTime = (new Date()).getTime();
//       if (authResponse.expirationTime > nowTime) { 
//         // Update expires in information
//         updatedExpiresIn = Math.floor((authResponse.expirationTime - nowTime) / 1000);
//         authResponse.expiresIn = updatedExpiresIn;
                 
//         localStorage.setItem('cdv_fb_session', JSON.stringify(authResponse));
//         FB.Auth.setAuthResponse(authResponse, 'connected');
//        }
//       }
//       console.log('Cordova Facebook Connect plugin initialized successfully.');
//     }, (fail?fail:null), 'FacebookConnect', 'init', [apiKey]);
//   },
//   login: function(params, cb, fail) {
//     params = params || { scope: '' };
//     exec(function(e) { // login
//         if (e.authResponse && e.authResponse.expiresIn) {
//           var expirationTime = e.authResponse.expiresIn === 0
//           ? 0 
//           : (new Date()).getTime() + e.authResponse.expiresIn * 1000;
//           e.authResponse.expirationTime = expirationTime; 
//         }
//         localStorage.setItem('cdv_fb_session', JSON.stringify(e.authResponse));
//         FB.Auth.setAuthResponse(e.authResponse, 'connected');
//         if (cb) cb(e);
//     }, (fail?fail:null), 'FacebookConnect', 'login', params.scope.split(',') );
//   },
//   logout: function(cb, fail) {
//     exec(function(e) {
//       localStorage.removeItem('cdv_fb_session');
//       FB.Auth.setAuthResponse(null, 'notConnected');
//       if (cb) cb(e);
//     }, (fail?fail:null), 'FacebookConnect', 'logout', []);
//   },
//   getLoginStatus: function(cb, fail) {
//     exec(function(e) {
//       if (cb) cb(e);
//     }, (fail?fail:null), 'FacebookConnect', 'getLoginStatus', []);
//   },
//   dialog: function(params, cb, fail) {
//     exec(function(e) { // login
//       if (cb) cb(e);
//                   }, (fail?fail:null), 'FacebookConnect', 'showDialog', [params] );
//   }
// };

var FacebookConnectInstance = new FacebookConnect();

module.exports = FacebookConnectInstance;
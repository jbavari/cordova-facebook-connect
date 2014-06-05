This plugin allows Cordova 3.x users the ability to use the old PhoneGap Facebook Connect with the Cordova Command Line Interface (CLI)

You must first have a facebook application set up, do that here: http://developers.facebook.com/

## Getting Started

Begin by installing the plugin with the Cordova CLI with your Facebook App ID:

`cordova plugin add https://github.com/jbavari/cordova-facebook-connect.git --variable APP_ID="APP_ID" --variable APP_NAME="APP_NAME"`

## VERY IMPORTANT

You'll need to update your project configuration.

Run this command from your platforms/android folder:

android update lib-project --target 9 --path FacebookLib/

More information about that command [here](http://developer.android.com/tools/projects/projects-cmdline.html).


## Plugin Usage

FacebookConnect.init({appId: 'some_fb_id'});


var perms = {scope: 'email, publish_stream, read_stream, photo_upload, xmpp_login'};
FacebookConnect.login(perms, function(response){
  //Handle response here.
}, function(error) { 
  //Handle error here.
});

## AngularJS Service

I've also included an AngularJS wrapper for the Cordova Facebook Plugin. When you install the plugin, it will place a facebookConnect.js file in the root level of your platforms www folder (platforms/ios/www or platforms/android/asset/www). You can include it optionally to use the AngularJS service `$cordovaFacebook`.

First include it in your index.html using the following:

```
<script src="facebookConnect.js"></script>
```

Then use it in your controllers (after including for your module) like so:

```
angular.module('starter.controllers', ['ngCordova.plugins.facebookConnect'])
.controller('DashCtrl', function($scope, $cordovaFacebook) {

    $scope.login = function() {
    	$cordovaFacebook.init({ appId: "441248765970485", status: true, xfbml: true, version: 'v2.0'}).then(function(data) {
	    	alert('fb init: ' + data);
	    }, function(error) {
	    	alert('fb fail: ' + error);
	    });

	    $cordovaFacebook.login({scope: 'email, publish_stream, read_stream, photo_upload, xmpp_login'}).then(function(response){
	    	alert('login: ' + response);
	    }, function(error) {
	    	alert('login error: ' + error);
	    });
    }

    $scope.status = function status() {
    	$cordovaFacebook.getLoginStatus().then(function(status) {
    		alert(status);
    	});
    }

})
```

Enjoy!
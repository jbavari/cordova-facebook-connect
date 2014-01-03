This plugin allows Cordova 3.x users the ability to use the old PhoneGap Facebook Connect with the Cordova Command Line Interface (CLI)

You must first have a facebook application set up, do that here: http://developers.facebook.com/

Begin by installing the plugin with the Cordova CLI:

cordova plugin add https://github.com/jbavari/cordova-facebook-connect.git --variable APP_ID="APP_ID" --variable APP_NAME="APP_NAME" 

Or Using Plugman (still in development):

plugman install --project ./platforms/ios/ --platform ios --plugin https://github.com/jbavari/cordova-facebook-connect.git --variable APP_ID="APP_ID" --variable APP_NAME="APP_NAME" 




Using the Plugin
================

To begin using the Plugin, you must use FB.init as such:

``` javascript
FB.init({ appId: 'APP_ID', nativeInterface: cordova.FacebookConnect, useCachedDialogs: false, status: false, oauth: true });
```

Once that is complete, you may use the Facebook Javascript SDK as you normally would as specified in [Facebook SDK Methods](https://developers.facebook.com/docs/reference/javascript#core-methods)
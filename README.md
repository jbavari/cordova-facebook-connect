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
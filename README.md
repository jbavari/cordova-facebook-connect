This plugin allows Cordova 3.x users the ability to use the old PhoneGap Facebook Connect with the Cordova Command Line Interface (CLI)

You must first have a facebook application set up, do that here: http://developers.facebook.com/

Begin by installing the plugin with the Cordova CLI:

cordova plugin add https://github.com/jbavari/cordova-facebook-connect.git --variable APP_ID="<ID_HERE>" --variable APP_NAME="<APP_NAME_HERE>" 

Or Using Plugman (still in development):

plugman install --project ./platforms/ios/ --platform ios --plugin https://github.com/jbavari/cordova-facebook-connect.git --variable APP_ID="441248765970485" --variable APP_NAME="RaiseMore" 
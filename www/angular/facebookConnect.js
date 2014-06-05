angular.module('ngCordova.plugins.facebookConnect', [])

.factory('$cordovaFacebook', ['$q', function($q) {

  return {
    init: function init(appId) {
      var q = $q.defer();

      try {
        FacebookConnect.init(appId, function success(data) {
          q.resolve(data);
        }, function failed(error) {
          q.reject(error);
        });
      } catch (ex) {
        q.reject(ex);
      }

      return q.promise;
    },
    login: function login(params) {
      var q = $q.defer();

      try {
        FacebookConnect.login(params, function success(response) {
          q.resolve(response);
        }, function failed(error) {
          q.reject(error);
        });
      } catch (ex) {
        q.reject(ex);
      }

      return q.promise;
    },
    getLoginStatus: function getLoginStatus() {
      var q = $q.defer();

      try {
        FacebookConnect.getLoginStatus(function success(response) {
          q.resolve(response);
        }, function failed(error) {
          q.reject(error);
        })
      } catch (ex) {
        q.reject(ex);
      }

      return q.promise;
    } 
  };
}]);
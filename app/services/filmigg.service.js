angular.
module('app').
service('filmiggService', function($http, config) {
  console.log("init filmiggg service");
  this.getAll = () => {
    return $http.get(config.apiUrl + '/tracks?_start=0&_end=50');
  };
});
module = angular.module('app', ['jtt_youtube', 'ngRoute']);
module.constant('config', {
    apiUrl: 'http://10.8.0.1:3001'
});
module.config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(true);
    $routeProvider
    .when('/', {
        template: '<video-list></video-list>'
    })
    .when('/search', {
        template: '<video-list></video-list>',
    })
    .when('/video/:id', {
        template: '<video-view id="ctrl.id"></video-view>',
        controller: ['$routeParams', function($routeParams){
            this.id = $routeParams.id;
        }],
        controllerAs: 'ctrl'
    })
    .otherwise({
        template: 'This page does not exist'
    });
});
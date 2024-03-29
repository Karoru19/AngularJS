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
    .when('/history', {
        template: '<history></history>',
    })
    .when('/playlist', {
        template: '<playlist></playlist>',
    })
    .otherwise({
        template: 'This page does not exist'
    });
});

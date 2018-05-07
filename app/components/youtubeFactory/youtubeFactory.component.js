angular.module('app').component('youtubeFactory', {
    template: '<div></div>',
    controller: function lol($scope, ytService) {
        ytService.search('mlp').then(function (data) {
            console.info('videos from search by query', data);
        });
    }
});
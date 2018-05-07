angular.module('app').component('videoView', {
    bindings: {
        id: '<'
    },
    templateUrl: 'components/videoView/videoView.template.html',
    controller: function videoView($scope, ytService) {
        this.link="https://youtube.com/embed/" + this.id;
    }
});
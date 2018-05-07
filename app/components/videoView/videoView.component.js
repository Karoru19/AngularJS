angular.module('app').component('videoView', {
    templateUrl: 'components/videoView/videoView.template.html',
    controller: function videoView($scope, ytService) {
        // ytService.watch('dQw4w9WgXcQ').then(function (data) {
        //     console.info('rick rolled xd', data);
            this.link="https://youtube.com/embed/dQw4w9WgXcQ";
        // });
    }
});
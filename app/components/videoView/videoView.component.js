angular.module('app').component('videoView', {
    bindings: {
        id: '<'
    },
    templateUrl: 'components/videoView/videoView.template.html',
    controller: function videoView($scope, ytService) {
        this.link="https://youtube.com/embed/" + this.id;
        this.title = "Tu jest tytuł";
        this.channel = "Tu jest kanał";
        this.desc = "Tu jest opis";
        this.views = "Tu jest liczba wyświetleń";
        this.likes = "Tu jest liczba licków";
        this.dislikes = "Tu jest liczba dis licków";
    }
});
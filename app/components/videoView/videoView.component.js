angular.module('app').component('videoView', {
    bindings: {
        id: '<'
    },
    templateUrl: 'components/videoView/videoView.template.html',
    controller: function videoView($scope, ytService, historyService) {
        this.link="https://youtube.com/embed/" + this.id;

        this.$onInit = () => {
            ytService.watch(this.id).then(data => {
                this.item = data.data.items[0];
                this.title = this.item.snippet.title;
                this.channel = this.item.snippet.channelTitle;
                this.desc = this.item.snippet.description;
                this.views = this.item.statistics.viewCount;
                this.likes = this.item.statistics.likeCount;
                this.dislikes = this.item.statistics.dislikeCount;
                ytService.tags(data.data.items[0].snippet.tags[0]).then(data => {
                    console.log(data);
                });
                historyService.add(this.item);
                console.log(this.item);
            });
        };
        this.playlist = [];
        this.suggestions = [];
        const song = {title: 'The best princess is Luna', channel: 'Starlight Glimmer', thumb: '../../img/1042.jpg'};
        this.playlist.push(song);
        for (var i=0; i<6; i++) {
            song.id = i;
            this.suggestions.push(song);
        }
    }
});
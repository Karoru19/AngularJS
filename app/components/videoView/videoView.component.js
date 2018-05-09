angular.module('app').component('videoView', {
    bindings: {
        id: '<'
    },
    templateUrl: 'components/videoView/videoView.template.html',
    controller: function videoView($scope, ytService) {
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
            });
        };
    }
});
angular.module('app').component('videoView', {
  bindings: {
    id: '<'
  },
  templateUrl: 'components/videoView/videoView.template.html',
  controller: function videoView($scope, ytService, historyService, playlistService) {
    this.link = "https://youtube.com/embed/" + this.id;
    this.suggestions = [];
    this.index = 0;

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
          this.suggestions = data.data.items;
          console.log(this.suggestions);
        });
        historyService.add(this.item);
        this.index = playlistService.getIndex();
      });
    };
    this.playlist = [];
    if (playlistService.get() != null) this.playlist = playlistService.get();
    console.log(this.playlist);

    this.addToPlaylist = function (item) {
      playlistService.add(item);
      this.playlist = playlistService.get();
    };

    this.goTo = function (index) {
        playlistService.setIndex(index);
        this.index = index;
    };
    // const song = {title: 'The best princess is Luna', channel: 'Starlight Glimmer', thumb: '../../img/1042.jpg'};
    // this.playlist.push(song);
    // for (var i=0; i<6; i++) {
    //     song.id = i;
    //     this.suggestions.push(song);
    // }
  }
});
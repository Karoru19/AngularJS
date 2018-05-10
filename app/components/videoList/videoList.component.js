angular.
module('app').
component('videoList', {
  bindings: {
    query: '<'
  },
  templateUrl: 'components/videoList/videoList.template.html',
  controller: function VideoList(ytService, $location, playlistService) {
    if ($location.search().view == 'list') {
      this.listMode = true;
    } else {
      this.listMode = false;
    }
    console.log(this.listMode);

    ytService.search($location.search().query).then(data => {
      console.info('videos from search by query', data);
      this.page = $location.search().page || 1;
      if (this.page == undefined) this.page = 1;
      this.videoCount = data.data.items.length;
      this.items = data.data.items.slice(12 * (this.page - 1), 12 * this.page);
    });

    this.playlist = playlistService.get();

    this.goTo = function (index) {
      playlistService.setIndex(index);
      this.index = index;
  };
  }
});
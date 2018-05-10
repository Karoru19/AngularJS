angular.
module('app').
component('playlist', {
  bindings: {
    query: '<'
  },
  templateUrl: 'components/playlist/playlist.template.html',
  controller: function Playlist(playlistService, $location) {

    console.log("getting playlist");
    this.page = $location.search().page || 1;
    if (this.page == undefined) this.page = 1;
    this.items = playlistService.get().slice(12 * (this.page - 1), 12 * this.page);
    this.videoCount = this.items.length;
    this.playlistCount = playlistService.get().length;
    console.info("items", this.items);

    this.removeEl = function(index){
      // console.log("Remove Element" + index);
      playlistService.remove(index);
      this.items = playlistService.get().slice(12 * (this.page - 1), 12 * this.page);
    };
  }
});
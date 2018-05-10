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

    this.removeEl = function (index) {
      console.log("Remove Element " + (12 * (this.page - 1) + index) + " page: " + this.page);
      playlistService.remove((12 * (this.page - 1) + index));
      if (playlistService.get().slice(12 * (this.page - 1), 12 * this.page).length == 0) {
        $location.search('page', this.page - 1);
        this.items = playlistService.get().slice(12 * (this.page - 2), 12 * (this.page-1));
      } else {
        this.items = playlistService.get().slice(12 * (this.page - 1), 12 * this.page);
      }
    };
  }
});
angular.
module('app').
component('playlistSingle', {
  bindings: {
    video: '<',
    mode: '<',
    index: '<',
    remove: '&'
  },
  templateUrl: 'components/playlistSingle/playlistSingle.template.html',
  controller: function PlaylistSingle(playlistService){
    console.log("Single Playlist");
  }
});

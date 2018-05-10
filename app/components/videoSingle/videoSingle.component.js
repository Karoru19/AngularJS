angular.
module('app').
component('videoSingle', {
  bindings: {
    video: '<',
    mode: '<',
    playlist: '='
  },
  templateUrl: 'components/videoSingle/videoSingle.template.html',
  controller: function VideoSingle(playlistService){
    console.log("Single");
    this.addToPlaylist = function(){
      playlistService.add(this.video);
      this.playlist = playlistService.get();
    };
  }
});

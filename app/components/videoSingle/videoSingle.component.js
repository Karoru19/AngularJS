angular.
module('app').
component('videoSingle', {
  bindings: {
    video: '<',
    mode: '<'
  },
  templateUrl: 'components/videoSingle/videoSingle.template.html',
  controller: function VideoSingle(playlistService){
    console.log("Single");
    this.addToPlaylist = function(){
      playlistService.add(this.video);
    };
  }
});

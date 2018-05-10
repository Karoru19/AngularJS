angular.
module('app').
component('historySingle', {
  bindings: {
    video: '<',
    mode: '<'
  },
  templateUrl: 'components/historySingle/historySingle.template.html',
  controller: function HistorySingle(playlistService){
    console.log("Single History");
    this.addToPlaylist = function(){
      playlistService.add(this.video);
    };
  }
});

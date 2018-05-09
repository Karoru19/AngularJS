angular.
module('app').
component('videoSingle', {
  bindings: {
    video: '<',
    mode: '<'
  },
  templateUrl: 'components/videoSingle/videoSingle.template.html',
  controller: function VideoSingle(){
    console.log("Single");
  }
});

angular.
module('app').
component('videoSingle', {
  bindings: {
    title: '<',
    author: '<',
    thumb: '<',
    mode: '<'
  },
  templateUrl: 'components/videoSingle/videoSingle.template.html',
  controller: function VideoSingle(){
    console.log("Single");
  }
});

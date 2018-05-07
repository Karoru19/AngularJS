angular.
module('app').
component('videoSingle', {
  bindings: {
    title: '<',
    author: '<',
    list: '<'
  },
  templateUrl: 'components/videoSingle/videoSingle.template.html',
  controller: function VideoSingle(){
    console.log("Single");
  }
});
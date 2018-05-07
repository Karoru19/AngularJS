angular.
module('app').
component('videoSingle', {
  bindings: {
    title: '<',
    author: '<'
  },
  templateUrl: 'components/videoSingle/videoSingle.template.html',
  controller: function VideoSingle(){
    this.lol = "dupaxd";
  }
});
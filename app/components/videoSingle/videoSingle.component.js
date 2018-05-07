angular.
module('app').
component('videoSingle', {
  bindings: {
    title: '<',
    author: '<',
    thumb: '<'
  },
  templateUrl: 'components/videoSingle/videoSingle.template.html',
  controller: function VideoSingle(){
    this.lol = "dupaxd";
  }
});
angular.
module('app').
component('videoSingle', {
  bindings: {
    text: '<'
  },
  templateUrl: 'components/videoSingle/videoSingle.template.html',
  controller: function VideoSingle(){
    this.lol = "dupaxd";
  }
});
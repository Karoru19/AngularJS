angular.
module('app').
component('videoSingle', {
  bindings: {
    title: '<',
    author: '<',
    thumb: '<',
    list: '<'
  },
  templateUrl: 'components/videoSingle/videoSingle.template.html',
  controller: function VideoSingle(){
    this.lol = "dupaxd";
    console.log("Single");
  }
});

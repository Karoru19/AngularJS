angular.
module('app').
component('kompot', {
  bindings: {
    text: '<'
  },
  templateUrl: 'components/kompot/kompot.template.html',
  controller: function Kompot(){
    this.lol = "dupaxd";
  }
});
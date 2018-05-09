angular.
module('app').
component('historySingle', {
  bindings: {
    video: '<',
    mode: '<'
  },
  templateUrl: 'components/historySingle/historySingle.template.html',
  controller: function HistorySingle(){
    console.log("Single History");
  }
});

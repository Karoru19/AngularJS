angular.
module('app').
component('navbar', {
  templateUrl: 'components/navbar/navbar.template.html',
  controller: function Navbar($location){
    this.search = () => {
      $location.path('/search/' + this.query);
    };
  }
});
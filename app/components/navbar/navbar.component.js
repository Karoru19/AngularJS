angular.
module('app').
component('navbar', {
  templateUrl: 'components/navbar/navbar.template.html',
  controller: function Navbar($location, playlistService){
    this.search = () => {
      $location.path('/search').search({query: this.query});
      this.query = '';
    };
  }
});
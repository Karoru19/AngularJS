angular.
module('app').
component('navbar', {
  templateUrl: 'components/navbar/navbar.template.html',
  controller: function Navbar($location, playlistService, historyService){
    if ($location.search().view == 'list') {
      this.listMode = true;
    } else {
      this.listMode = false;
    }
    console.log(this.listMode);

    this.search = () => {
      $location.path('/search').search({query: this.query});
      this.query = '';
    };

    this.isActive = path => {
      return $location.path() == path ? true : false;
    };

    this.removeHistory = function(){
      historyService.removeAll();
      window.location = ("/history");
    };

    this.changeMode = function () {
      console.log(this.listMode);
      if ($location.search().view == 'list') {
        $location.search('view', 'grid');
        this.listMode = false;
      } else {
        $location.search('view', 'list');
        this.listMode = true;
      }
    };
  }
});
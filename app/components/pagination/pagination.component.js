angular.
module('app').
component('pagination', {
  bindings: {
    currentPage: '=',
    videoCount: '<'
  },
  templateUrl: 'components/pagination/pagination.template.html',
  controller: function Pagination($location) {
    this.$onInit = () => {
      console.log(this.videoCount);
      console.log(this.currentPage);
      this.totalPages = Math.ceil(this.videoCount / 12);
      this.pages = [];
      for (var i = 1; i <= this.totalPages; i++) this.pages.push(i);
      this.setPage = function(page) {
        $location.search({page: page});
      };
    };
  }
});
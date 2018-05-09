angular.
module('app').
component('videoList', {
  bindings: {
    query: '<'
  },
  templateUrl: 'components/videoList/videoList.template.html',
  controller: function VideoList(ytService, $location) {
    // this.videoItems = {};

      ytService.search($location.search().query).then(data => {
        console.info('videos from search by query', data);
        const page = $location.search().page || 1; 
        this.items = data.data.items.slice(12*(page-1), 12*page);
      });

    // this.pager = {};
    this.listMode = false;
    this.currentPage = 1;
    this.changeMode = function () {
      this.listMode = !this.listMode;
      console.log(this.listMode);
    };
    // this.setPage = function (page) {
    //   if (page < 1 || page > this.pager.totalPages) {
    //     return;
    //   }

    //   // get pager object from service
    //   this.pager = PagerService.GetPager(this.videoItems.length, page);

    //   // get current page of items
    //   this.items = this.videoItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    // };
  }
});
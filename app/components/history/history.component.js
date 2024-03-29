angular.
module('app').
component('history', {
  bindings: {
    query: '<'
  },
  templateUrl: 'components/history/history.template.html',
  controller: function History(historyService, $location) {
    if ($location.search().view == 'list') {
      this.listMode = true;
    } else {
      this.listMode = false;
    }
    console.log(this.listMode);

    // ytService.search($location.search().query).then(data => {
    //   console.info('videos from search by query', data);
    //   this.page = $location.search().page || 1;
    //   if (this.page == undefined) this.page = 1;
    //   this.videoCount = data.data.items.length;
    //   this.items = data.data.items.slice(12 * (this.page - 1), 12 * this.page);
    // });

    console.log("getting history");
    this.page = $location.search().page || 1;
    if (this.page == undefined) this.page = 1;
    this.items = historyService.get().slice(12 * (this.page - 1), 12 * this.page);
    this.videoCount = this.items.length;
    this.historyCount = historyService.get().length;
    console.info("items", this.items);
    
  }
});
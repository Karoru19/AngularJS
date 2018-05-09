angular.
module('app').
component('history', {
  bindings: {
    query: '<'
  },
  templateUrl: 'components/history/history.template.html',
  controller: function History(ytService, $location) {
    this.listMode = false;

    ytService.search($location.search().query).then(data => {
      console.info('videos from search by query', data);
      this.page = $location.search().page || 1;
      if (this.page == undefined) this.page = 1;
      this.videoCount = data.data.items.length;
      this.items = data.data.items.slice(12 * (this.page - 1), 12 * this.page);
    });

    this.changeMode = function () {
      this.listMode = !this.listMode;
      console.log(this.listMode);
    };
  }
});
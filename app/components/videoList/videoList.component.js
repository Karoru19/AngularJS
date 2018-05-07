angular.
module('app').
component('videoList', {
  bindings: {
    query: '<'
  },
  templateUrl: 'components/videoList/videoList.template.html',
  controller: function VideoList(ytService) {
    this.$onInit = () => {
      ytService.search(this.query).then(data => {
        console.info('videos from search by query', data);
        console.log(this.query);
        this.items = data.data.items;
      });
    };
    this.listMode = false;
    this.changeMode = function(){
      this.listMode = !this.listMode;
      console.log(this.listMode);
    };
  }
});

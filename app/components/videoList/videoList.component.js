angular.
module('app').
component('videoList', {
  templateUrl: 'components/videoList/videoList.template.html',
  controller: function VideoList(ytService) {
    ytService.search('orchestral').then(data => {
      console.info('videos from search by query', data);
      this.items = data.data.items;
    });
    this.listMode = false;
    this.changeMode = function(){
      this.listMode = !this.listMode;
      console.log(this.listMode);
    };
  }
});

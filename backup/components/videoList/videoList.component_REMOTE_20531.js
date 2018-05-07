angular.
module('app').
component('videoList', {
  templateUrl: 'components/videoList/videoList.template.html',
  controller: function VideoList(ytService) {
    ytService.search('mlp').then(data => {
      console.info('videos from search by query', data);
      this.items = data.data.items;
    });
  }
});
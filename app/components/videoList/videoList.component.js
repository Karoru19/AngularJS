angular.
module('app').
component('videoList', {
  templateUrl: 'components/videoList/videoList.template.html',
  controller: function VideoList(ytService) {
    ytService.search('mlp').then(data => {
      console.info('videos from search by query', data);
      this.items = data.data.items;
    });
    this.list = true;
    this.screen = window.screen.width;
    console.log(this.screen);
  }
});

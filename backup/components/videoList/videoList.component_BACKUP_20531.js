angular.
module('app').
component('videoList', {
  templateUrl: 'components/videoList/videoList.template.html',
  controller: function VideoList(ytService) {
    ytService.search('mlp').then(data => {
      console.info('videos from search by query', data);
      this.items = data.data.items;
    });
<<<<<<< HEAD
    this.list = true;
    this.screen = window.screen.width;
    console.log(this.screen);
=======
>>>>>>> cb998c1fee210a6e695a205c96f463ac5a5ae469
  }
});
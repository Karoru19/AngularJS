angular.
module('app').
component('videoList', {
  templateUrl: 'components/videoList/videoList.template.html',
  controller: function VideoList(filmiggService){
    filmiggService.getAll().then(res => {
      this.items = res.data.slice(0,50);
      console.log(this.items);
    });
  }
});
angular.
module('app').
component('lista', {
  templateUrl: 'components/lista/lista.template.html',
  controller: function Lista(filmiggService){
    filmiggService.getAll().then(res => {
      this.items = res.data.slice(0,50);
      console.log(this.items);
    });
  }
});
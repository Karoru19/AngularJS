angular.module('app').component('paginator', {
  templateUrl: 'components/paginator/paginator.template.html',
  controller: function paginator(ytService, $location, $scope) {
    let range = 4;
    ytService.search($location.search().query).then(res => {
      this.count = Math.ceil(res.data.items.length/12);
      this.page = parseInt($location.search().page || 1);
      let begin = this.page - range;
      let end = this.page + range;
      if (begin < 1) {
        const diff = 1 - begin;
        begin += diff;
        end += diff;
      } 
      if (end > this.count) {
        const diff = end - this.count;
        begin -= diff;
        if (begin < 1) begin = 1;
        end -= diff;
      }
      console.log(begin + ' ' + this.page + ' ' + end);
      $scope.$evalAsync(() =>
        this.buttons = Array(end - begin + 1).fill().map((e, i) => begin + i)
      );
    });
    this.goTo = page => {
      $location.search('page', page);
    };
  }
});
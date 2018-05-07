angular.
module('app').
service('ytService', function($http, config, youtubeFactory) {
  console.log("init yt service");
  this.search = query => {
    return youtubeFactory.getVideosFromSearchByParams({
        q: query,
        key: 'AIzaSyDJPKfDV3QVZ1KkEUonmjtUODUUSo_CHCU',
        maxResults: '50'
    });
  };
});
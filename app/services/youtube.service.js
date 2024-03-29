angular.
module('app').
service('ytService', function($http, config, youtubeFactory) {
  console.log("init yt service");
  this.search = query => {
    return youtubeFactory.getVideosFromSearchByParams({
        q: query,
        order: 'relevance',
        relevanceLanguage: 'pl',
        key: 'AIzaSyDJPKfDV3QVZ1KkEUonmjtUODUUSo_CHCU',
        maxResults: '50'
    });
  };
  this.watch = id => {
    return youtubeFactory.getVideoById({
      videoId: id,
      part: 'id, snippet, contentDetails, statistics',
      key: 'AIzaSyDJPKfDV3QVZ1KkEUonmjtUODUUSo_CHCU'
    });
  };
  this.tags = query => {
    return youtubeFactory.getVideosFromSearchByParams({
      q: query,
      order: 'relevance',
      relevanceLanguage: 'pl',
      key: 'AIzaSyDJPKfDV3QVZ1KkEUonmjtUODUUSo_CHCU',
      maxResults: '6'
    });
  };
});
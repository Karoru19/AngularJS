angular.module('app').service('playlistService', function($http, config){
    this.playlist = [];
    console.log("init playlist service");
    this.add = id => {
        this.playlist.add(id);
    };
});
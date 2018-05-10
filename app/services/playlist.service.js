angular.module('app').service('playlistService', function($http, config){
    this.playlist = [];
    console.log("init playlist service");
    this.add = item => {
        this.playlist.push(item);
    };
    this.remove = index => {
        this.playlist.splice(index, 1);
    };
    this.get = () => {
        return this.playlist;
    };
});
angular.module('app').service('playlistService', function($http, config){
    this.playlist = [];

    if(localStorage.getItem('playlist') === null) {
        localStorage.setItem('playlist', JSON.stringify(this.playlist));
    }
    else{
        this.playlist = JSON.parse(localStorage.getItem('playlist'));
    }

    console.log("init playlist service");
    this.add = item => {
        this.playlist.push(item);
        localStorage.setItem('playlist', JSON.stringify(this.playlist));
        console.log(this.playlist);
    };
    this.remove = index => {
        this.playlist.splice(index, 1);
        localStorage.setItem('playlist', JSON.stringify(this.playlist));
    };
    this.get = () => {
        return this.playlist;
    };
});
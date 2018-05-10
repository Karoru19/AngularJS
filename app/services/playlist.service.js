angular.module('app').service('playlistService', function($http, config){
    this.playlist = [];
    this.index = 0;

    if(localStorage.getItem('playlist') === null) {
        localStorage.setItem('playlist', JSON.stringify(this.playlist));
    }
    else{
        this.playlist = JSON.parse(localStorage.getItem('playlist'));
    }

    if(localStorage.getItem('index') === null){
        localStorage.setItem('index', JSON.stringify(this.index));
    }
    else{
        this.index = JSON.parse(localStorage.getItem('index'));
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
    this.setIndex = num => {
        this.index = num;
        localStorage.setItem('index', JSON.stringify(this.index));
    };
    this.getIndex = num => {
        return this.index;
    };
});
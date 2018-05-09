angular.module('app').service('historyService', function($http, config){
    this.history = [];

    if(localStorage.getItem('history') === null) {
        localStorage.setItem('history', JSON.stringify(this.history));
    }
    else{
        this.history = JSON.parse(localStorage.getItem('history'));
    }

    this.add = item => {
        this.history.push(item);
        console.log(this.history);
        localStorage.setItem('history', JSON.stringify(this.history));
    };
    this.remove = index => {
        this.history.splice(index, 1);
        localStorage.setItem('history', JSON.stringify(this.history));
    };
    this.get = () => {
        return this.history; 
    };
});
angular.module('app').directive('player', function player(){
    return {
        link: function($scope, element, attrs){
            element[0].src = 'https://youtube.com/embed/' + attrs.link;
        }
    };
});